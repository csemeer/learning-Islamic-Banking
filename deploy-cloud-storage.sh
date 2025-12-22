#!/bin/bash

# Deploy Islamic Banking Learning Platform to Google Cloud Storage
# This is the RECOMMENDED deployment method (cheapest and fastest)

set -e  # Exit on error

echo "🚀 Deploying Islamic Banking Platform to Google Cloud Storage..."
echo ""

# Configuration
PROJECT_ID=${1:-"islamic-banking-platform"}
BUCKET_NAME=${2:-"islamic-banking-$(date +%s)"}
LOCATION=${3:-"us-central1"}

echo "📋 Configuration:"
echo "   Project ID: $PROJECT_ID"
echo "   Bucket Name: $BUCKET_NAME"
echo "   Location: $LOCATION"
echo ""

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo "❌ Error: gcloud CLI is not installed."
    echo "   Install from: https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# Set the project
echo "🔧 Setting GCP project..."
gcloud config set project $PROJECT_ID

# Build the application
echo "🔨 Building production bundle..."
npm run build

if [ ! -d "dist" ]; then
    echo "❌ Error: dist directory not found. Build failed."
    exit 1
fi

# Create the bucket
echo "🪣 Creating storage bucket..."
gcloud storage buckets create gs://$BUCKET_NAME \
    --location=$LOCATION \
    --uniform-bucket-level-access \
    || echo "Bucket already exists, continuing..."

# Make bucket public
echo "🌐 Making bucket public for website hosting..."
gcloud storage buckets add-iam-policy-binding gs://$BUCKET_NAME \
    --member=allUsers \
    --role=roles/storage.objectViewer

# Configure for static website hosting
echo "⚙️  Configuring static website hosting..."
gcloud storage buckets update gs://$BUCKET_NAME \
    --web-main-page-suffix=index.html \
    --web-error-page=index.html

# Upload files
echo "📤 Uploading files to Cloud Storage..."
gcloud storage rsync -R dist gs://$BUCKET_NAME

# Set cache headers for assets
echo "🏎️  Setting cache headers..."
gcloud storage objects update gs://$BUCKET_NAME/assets/** \
    --cache-control="public, max-age=31536000, immutable" \
    2>/dev/null || true

# Set cache headers for index.html
gcloud storage objects update gs://$BUCKET_NAME/index.html \
    --cache-control="no-cache, no-store, must-revalidate"

# Get the URL
WEBSITE_URL="https://storage.googleapis.com/$BUCKET_NAME/index.html"

echo ""
echo "✅ Deployment successful!"
echo ""
echo "🌍 Your website is live at:"
echo "   $WEBSITE_URL"
echo ""
echo "📝 To update your deployment, run:"
echo "   ./deploy-cloud-storage.sh $PROJECT_ID $BUCKET_NAME $LOCATION"
echo ""
echo "💡 Next steps:"
echo "   1. Test your website: $WEBSITE_URL"
echo "   2. (Optional) Set up Cloud CDN for better performance"
echo "   3. (Optional) Configure custom domain with SSL"
echo ""
