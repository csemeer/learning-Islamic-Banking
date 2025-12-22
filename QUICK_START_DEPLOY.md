# 🚀 Quick Start Deployment Guide

Deploy your Islamic Banking Learning Platform to Google Cloud in **5 minutes**!

## 📦 What You Need

1. Google Cloud account (free tier available)
2. Google Cloud SDK installed
3. Node.js and npm installed

---

## ⚡ Quick Deploy (Recommended - Cloud Storage)

### Step 1: Install Google Cloud SDK

**Choose your OS:**

**Linux/macOS:**
```bash
curl https://sdk.cloud.google.com | bash
exec -l $SHELL
gcloud auth login
```

**Windows (PowerShell as Administrator):**
```powershell
(New-Object Net.WebClient).DownloadFile("https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe", "$env:Temp\GoogleCloudSDKInstaller.exe")
& $env:Temp\GoogleCloudSDKInstaller.exe
```

### Step 2: Create GCP Project

```bash
# Create project (choose a unique project ID)
gcloud projects create islamic-banking-platform-123 --name="Islamic Banking Platform"

# Set as default
gcloud config set project islamic-banking-platform-123

# Enable billing (REQUIRED - do this in console)
# Visit: https://console.cloud.google.com/billing
```

### Step 3: Deploy with One Command!

```bash
# Make script executable
chmod +x deploy-cloud-storage.sh

# Deploy!
./deploy-cloud-storage.sh islamic-banking-platform-123
```

**That's it!** Your site will be live in ~2 minutes! 🎉

---

## 🎯 Three Deployment Options

### Option 1: Cloud Storage (CHEAPEST - $1-5/month)

```bash
chmod +x deploy-cloud-storage.sh
./deploy-cloud-storage.sh YOUR-PROJECT-ID
```

**Best for:** Static websites (this app)
**Cost:** $1-5/month
**Speed:** Fastest
**Setup time:** 2 minutes

---

### Option 2: App Engine ($35-70/month)

```bash
chmod +x deploy-app-engine.sh
./deploy-app-engine.sh YOUR-PROJECT-ID
```

**Best for:** Zero-ops deployment
**Cost:** $35-70/month minimum
**Speed:** Fast
**Setup time:** 5 minutes

---

### Option 3: Cloud Run ($0-10/month)

```bash
chmod +x deploy-cloud-run.sh
./deploy-cloud-run.sh YOUR-PROJECT-ID
```

**Best for:** Pay-per-use, Docker apps
**Cost:** $0-10/month (first 2M requests free)
**Speed:** Very fast
**Setup time:** 10 minutes

---

## 📋 Step-by-Step Manual Deployment

### Cloud Storage (Static Hosting) - RECOMMENDED

```bash
# 1. Set project
gcloud config set project YOUR-PROJECT-ID

# 2. Build app
npm run build

# 3. Create bucket (globally unique name)
BUCKET_NAME="islamic-banking-$(date +%s)"
gcloud storage buckets create gs://$BUCKET_NAME --location=us-central1

# 4. Make public
gcloud storage buckets add-iam-policy-binding gs://$BUCKET_NAME \
  --member=allUsers --role=roles/storage.objectViewer

# 5. Configure for web
gcloud storage buckets update gs://$BUCKET_NAME \
  --web-main-page-suffix=index.html \
  --web-error-page=index.html

# 6. Upload files
gcloud storage rsync -R dist gs://$BUCKET_NAME

# 7. Get URL
echo "https://storage.googleapis.com/$BUCKET_NAME/index.html"
```

**Done! Your site is live!** 🌍

---

## 🔄 Update/Redeploy

### Cloud Storage
```bash
npm run build
gcloud storage rsync -R dist gs://YOUR-BUCKET-NAME
```

### App Engine
```bash
npm run build
gcloud app deploy
```

### Cloud Run
```bash
./deploy-cloud-run.sh YOUR-PROJECT-ID
```

---

## 🌐 Custom Domain & SSL

### Step 1: Reserve Static IP
```bash
gcloud compute addresses create islamic-banking-ip --global
gcloud compute addresses describe islamic-banking-ip --global --format="get(address)"
```

### Step 2: Point Your Domain
Point your domain's **A record** to the IP address from step 1.

### Step 3: Create SSL Certificate
```bash
gcloud compute ssl-certificates create islamic-banking-cert \
  --domains=yourdomain.com
```

### Step 4: Set up Load Balancer
```bash
# Create backend bucket
gcloud compute backend-buckets create islamic-banking-backend \
  --gcs-bucket-name=YOUR-BUCKET-NAME --enable-cdn

# Create URL map
gcloud compute url-maps create islamic-banking-url-map \
  --default-backend-bucket=islamic-banking-backend

# Create HTTPS proxy
gcloud compute target-https-proxies create islamic-banking-https-proxy \
  --url-map=islamic-banking-url-map \
  --ssl-certificates=islamic-banking-cert

# Create forwarding rule
gcloud compute forwarding-rules create islamic-banking-https-rule \
  --address=islamic-banking-ip --global \
  --target-https-proxy=islamic-banking-https-proxy --ports=443
```

**Wait 15-30 minutes** for SSL certificate provisioning. ⏳

---

## 💰 Cost Calculator

| Option | Monthly Cost | Best For |
|--------|-------------|----------|
| **Cloud Storage** | $1-5 | Static sites (RECOMMENDED) |
| **App Engine** | $35-70 | Auto-scaling apps |
| **Cloud Run** | $0-10 | Pay-per-request |

**Recommendation:** Use **Cloud Storage** for this React app!

---

## 🆘 Troubleshooting

### "gcloud: command not found"
```bash
# Reinstall gcloud SDK
curl https://sdk.cloud.google.com | bash
exec -l $SHELL
```

### "Permission denied" error
```bash
gcloud auth login
gcloud auth application-default login
```

### Build fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Bucket already exists
```bash
# Use a different bucket name (must be globally unique)
BUCKET_NAME="islamic-banking-$(date +%s)"
```

### Check deployment status
```bash
# List buckets
gcloud storage buckets list

# List App Engine versions
gcloud app versions list

# List Cloud Run services
gcloud run services list
```

---

## 📞 Support & Resources

- **Full Guide:** See `DEPLOYMENT_GUIDE_GCP.md` for detailed documentation
- **GCP Console:** https://console.cloud.google.com
- **GCP Pricing:** https://cloud.google.com/pricing/calculator
- **GCP Documentation:** https://cloud.google.com/docs

---

## ✅ Deployment Checklist

- [ ] Install Google Cloud SDK
- [ ] Create GCP project
- [ ] Enable billing
- [ ] Build application (`npm run build`)
- [ ] Deploy using one of the scripts
- [ ] Test the deployed URL
- [ ] (Optional) Set up custom domain
- [ ] (Optional) Configure SSL/HTTPS
- [ ] (Optional) Set up monitoring

---

**Ready to deploy?** Pick your deployment option above and run the script! 🚀

**Recommended for beginners:** Start with **Cloud Storage** deployment - it's the simplest and cheapest!
