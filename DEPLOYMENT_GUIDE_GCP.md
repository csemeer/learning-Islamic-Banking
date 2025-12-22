# 🚀 Google Cloud Platform Deployment Guide

This guide provides **three deployment options** for your Islamic Banking Learning Platform on Google Cloud Platform.

## 📋 Table of Contents
1. [Option 1: Cloud Storage (Static Hosting) - RECOMMENDED](#option-1-cloud-storage-recommended)
2. [Option 2: App Engine](#option-2-app-engine)
3. [Option 3: Cloud Run (Containerized)](#option-3-cloud-run)

---

## Prerequisites

### 1. Install Google Cloud SDK

**Windows:**
```bash
# Download and run installer from:
# https://cloud.google.com/sdk/docs/install

# Or use PowerShell:
(New-Object Net.WebClient).DownloadFile("https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe", "$env:Temp\GoogleCloudSDKInstaller.exe")
& $env:Temp\GoogleCloudSDKInstaller.exe
```

**macOS:**
```bash
curl https://sdk.cloud.google.com | bash
exec -l $SHELL
```

**Linux:**
```bash
curl https://sdk.cloud.google.com | bash
exec -l $SHELL
```

### 2. Initialize gcloud CLI

```bash
# Login to your Google account
gcloud auth login

# Set your project (create one if needed)
gcloud projects create islamic-banking-platform --name="Islamic Banking Learning Platform"

# Set the project as default
gcloud config set project islamic-banking-platform

# Enable billing (required - you need to link a billing account via console)
# Visit: https://console.cloud.google.com/billing
```

---

## Option 1: Cloud Storage (RECOMMENDED)

**Best for:** Static websites, fastest, cheapest ($0.026/GB/month)
**Pros:** Simple, fast, cost-effective, automatic CDN
**Cons:** Static only, no server-side processing

### Step 1: Build the Application

```bash
# Build production bundle
npm run build

# This creates a 'dist' folder with optimized static files
```

### Step 2: Create and Configure Storage Bucket

```bash
# Create a unique bucket name (must be globally unique)
export BUCKET_NAME="islamic-banking-platform-$(date +%s)"

# Create the bucket
gcloud storage buckets create gs://$BUCKET_NAME --location=us-central1

# Make bucket public for website hosting
gcloud storage buckets add-iam-policy-binding gs://$BUCKET_NAME \
  --member=allUsers \
  --role=roles/storage.objectViewer

# Configure bucket for static website hosting
gcloud storage buckets update gs://$BUCKET_NAME --web-main-page-suffix=index.html --web-error-page=index.html
```

### Step 3: Upload Files

```bash
# Upload all built files to the bucket
gcloud storage cp -r dist/* gs://$BUCKET_NAME/

# Set cache control for assets (1 year for hashed files)
gcloud storage objects update gs://$BUCKET_NAME/assets/** \
  --cache-control="public, max-age=31536000, immutable"

# Set cache control for index.html (no cache)
gcloud storage objects update gs://$BUCKET_NAME/index.html \
  --cache-control="no-cache, no-store, must-revalidate"
```

### Step 4: Get the Website URL

```bash
# Your website is now live at:
echo "https://storage.googleapis.com/$BUCKET_NAME/index.html"

# Or use the simpler URL format:
echo "http://$BUCKET_NAME.storage.googleapis.com/index.html"
```

### Step 5 (Optional): Set up Cloud CDN and Load Balancer

```bash
# Reserve a static IP address
gcloud compute addresses create islamic-banking-ip --global

# Create backend bucket
gcloud compute backend-buckets create islamic-banking-backend \
  --gcs-bucket-name=$BUCKET_NAME \
  --enable-cdn

# Create URL map
gcloud compute url-maps create islamic-banking-url-map \
  --default-backend-bucket=islamic-banking-backend

# Create HTTP(S) target proxy
gcloud compute target-http-proxies create islamic-banking-http-proxy \
  --url-map=islamic-banking-url-map

# Create forwarding rule
gcloud compute forwarding-rules create islamic-banking-http-rule \
  --address=islamic-banking-ip \
  --global \
  --target-http-proxy=islamic-banking-http-proxy \
  --ports=80

# Get your IP address
gcloud compute addresses describe islamic-banking-ip --global --format="get(address)"
```

### Step 6 (Optional): Configure Custom Domain & SSL

```bash
# For HTTPS with custom domain (e.g., islamicbanking.example.com)

# 1. Create SSL certificate
gcloud compute ssl-certificates create islamic-banking-cert \
  --domains=islamicbanking.example.com

# 2. Create HTTPS proxy
gcloud compute target-https-proxies create islamic-banking-https-proxy \
  --url-map=islamic-banking-url-map \
  --ssl-certificates=islamic-banking-cert

# 3. Create HTTPS forwarding rule
gcloud compute forwarding-rules create islamic-banking-https-rule \
  --address=islamic-banking-ip \
  --global \
  --target-https-proxy=islamic-banking-https-proxy \
  --ports=443

# 4. Point your domain's DNS A record to the IP address shown above
```

### Update/Redeploy

```bash
# Build new version
npm run build

# Upload updated files
gcloud storage cp -r dist/* gs://$BUCKET_NAME/

# Clear CDN cache (if using Cloud CDN)
gcloud compute url-maps invalidate-cdn-cache islamic-banking-url-map --path "/*"
```

---

## Option 2: App Engine

**Best for:** Zero-ops deployment with auto-scaling
**Pros:** Automatic scaling, no infrastructure management
**Cons:** More expensive than Cloud Storage, vendor lock-in

### Step 1: Build the Application

```bash
npm run build
```

### Step 2: Create app.yaml

This file is already created for you at `app.yaml`

### Step 3: Deploy to App Engine

```bash
# Initialize App Engine (first time only)
gcloud app create --region=us-central

# Deploy the application
gcloud app deploy

# Open the deployed app in browser
gcloud app browse
```

### Update/Redeploy

```bash
# Build and deploy
npm run build
gcloud app deploy

# View logs
gcloud app logs tail -s default
```

---

## Option 3: Cloud Run

**Best for:** Containerized apps, best price/performance for traffic spikes
**Pros:** Pay per request, auto-scaling, Docker-based
**Cons:** Requires Docker knowledge, cold starts

### Step 1: Enable Required APIs

```bash
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
```

### Step 2: Build and Deploy with Cloud Build

The Dockerfile is already created for you.

```bash
# Build the container image using Cloud Build
gcloud builds submit --tag gcr.io/islamic-banking-platform/islamic-banking-app

# Deploy to Cloud Run
gcloud run deploy islamic-banking-app \
  --image gcr.io/islamic-banking-platform/islamic-banking-app \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --memory 512Mi \
  --cpu 1 \
  --port 8080 \
  --max-instances 10 \
  --min-instances 0

# Get the service URL
gcloud run services describe islamic-banking-app \
  --region us-central1 \
  --format="value(status.url)"
```

### Update/Redeploy

```bash
# Rebuild and redeploy
gcloud builds submit --tag gcr.io/islamic-banking-platform/islamic-banking-app
gcloud run deploy islamic-banking-app \
  --image gcr.io/islamic-banking-platform/islamic-banking-app \
  --platform managed \
  --region us-central1
```

---

## 💰 Cost Comparison

**Cloud Storage (Static Hosting):**
- Storage: $0.020/GB/month
- Network: $0.12/GB (first 1GB free)
- **Estimated:** $1-5/month for typical usage

**App Engine:**
- Instance hours: $0.05-0.10/hour
- **Estimated:** $35-70/month minimum

**Cloud Run:**
- CPU: $0.00002400/vCPU-second
- Memory: $0.00000250/GiB-second
- Requests: First 2M free, then $0.40/million
- **Estimated:** $0-10/month for low traffic, pay per use

## 🎯 Recommendation

**For this static React/Vite app:** Use **Option 1 (Cloud Storage)** - it's the most cost-effective, fastest, and simplest solution.

## 📊 Monitoring & Management

```bash
# View Cloud Storage usage
gcloud storage du -s gs://$BUCKET_NAME

# View App Engine versions
gcloud app versions list

# View Cloud Run services
gcloud run services list

# View billing
gcloud billing accounts list
gcloud billing projects describe islamic-banking-platform
```

## 🔒 Security Best Practices

```bash
# Enable Cloud Armor (DDoS protection) for Cloud Storage + CDN
gcloud compute security-policies create islamic-banking-policy \
  --description "Security policy for Islamic Banking Platform"

# Add rate limiting
gcloud compute security-policies rules create 1000 \
  --security-policy islamic-banking-policy \
  --expression "true" \
  --action "rate-based-ban" \
  --rate-limit-threshold-count 1000 \
  --rate-limit-threshold-interval-sec 60 \
  --ban-duration-sec 600

# Attach to backend
gcloud compute backend-buckets update islamic-banking-backend \
  --security-policy islamic-banking-policy
```

## 🆘 Troubleshooting

```bash
# Check deployment status
gcloud app describe  # App Engine
gcloud run services describe islamic-banking-app --region us-central1  # Cloud Run

# View logs
gcloud app logs tail  # App Engine
gcloud run logs read islamic-banking-app --region us-central1  # Cloud Run

# Debug build issues
gcloud builds list
gcloud builds log <BUILD_ID>

# Test locally before deploying
npm run build
npm run preview
```

## 📞 Support

- GCP Documentation: https://cloud.google.com/docs
- GCP Pricing Calculator: https://cloud.google.com/products/calculator
- GCP Support: https://cloud.google.com/support

---

**Ready to deploy!** 🚀 Start with Option 1 (Cloud Storage) for the simplest and most cost-effective deployment.
