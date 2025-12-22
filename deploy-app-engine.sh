#!/bin/bash

# Deploy Islamic Banking Learning Platform to Google App Engine

set -e  # Exit on error

echo "🚀 Deploying Islamic Banking Platform to Google App Engine..."
echo ""

# Configuration
PROJECT_ID=${1:-"islamic-banking-platform"}
REGION=${2:-"us-central"}

echo "📋 Configuration:"
echo "   Project ID: $PROJECT_ID"
echo "   Region: $REGION"
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

# Check if App Engine app exists
echo "📱 Checking App Engine status..."
if ! gcloud app describe &> /dev/null; then
    echo "Creating App Engine application..."
    gcloud app create --region=$REGION
fi

# Deploy to App Engine
echo "📤 Deploying to App Engine..."
gcloud app deploy --quiet

# Get the URL
APP_URL=$(gcloud app describe --format="value(defaultHostname)")

echo ""
echo "✅ Deployment successful!"
echo ""
echo "🌍 Your website is live at:"
echo "   https://$APP_URL"
echo ""
echo "📝 Useful commands:"
echo "   View logs:    gcloud app logs tail"
echo "   Open browser: gcloud app browse"
echo "   View versions: gcloud app versions list"
echo ""
echo "💰 Cost Estimate:"
echo "   App Engine Standard: ~$35-70/month minimum"
echo "   Consider Cloud Storage ($1-5/month) for lower cost"
echo ""
