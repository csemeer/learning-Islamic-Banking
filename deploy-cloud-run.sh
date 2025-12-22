#!/bin/bash

# Deploy Islamic Banking Learning Platform to Google Cloud Run

set -e  # Exit on error

echo "🚀 Deploying Islamic Banking Platform to Google Cloud Run..."
echo ""

# Configuration
PROJECT_ID=${1:-"islamic-banking-platform"}
SERVICE_NAME=${2:-"islamic-banking-app"}
REGION=${3:-"us-central1"}
IMAGE_NAME="gcr.io/$PROJECT_ID/$SERVICE_NAME"

echo "📋 Configuration:"
echo "   Project ID: $PROJECT_ID"
echo "   Service Name: $SERVICE_NAME"
echo "   Region: $REGION"
echo "   Image: $IMAGE_NAME"
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

# Enable required APIs
echo "🔌 Enabling required APIs..."
gcloud services enable cloudbuild.googleapis.com run.googleapis.com containerregistry.googleapis.com

# Build the container image
echo "🐳 Building container image with Cloud Build..."
gcloud builds submit --tag $IMAGE_NAME

if [ $? -ne 0 ]; then
    echo "❌ Error: Container build failed."
    exit 1
fi

# Deploy to Cloud Run
echo "📤 Deploying to Cloud Run..."
gcloud run deploy $SERVICE_NAME \
    --image $IMAGE_NAME \
    --platform managed \
    --region $REGION \
    --allow-unauthenticated \
    --memory 512Mi \
    --cpu 1 \
    --port 8080 \
    --max-instances 10 \
    --min-instances 0 \
    --timeout 60 \
    --concurrency 80

# Get the service URL
SERVICE_URL=$(gcloud run services describe $SERVICE_NAME \
    --region $REGION \
    --format="value(status.url)")

echo ""
echo "✅ Deployment successful!"
echo ""
echo "🌍 Your website is live at:"
echo "   $SERVICE_URL"
echo ""
echo "📝 Useful commands:"
echo "   View logs:    gcloud run logs read $SERVICE_NAME --region $REGION"
echo "   Describe:     gcloud run services describe $SERVICE_NAME --region $REGION"
echo "   List services: gcloud run services list"
echo ""
echo "💰 Cost Estimate:"
echo "   Cloud Run: Pay per request (~$0-10/month for low traffic)"
echo "   First 2 million requests free per month"
echo ""
echo "🔄 To update:"
echo "   ./deploy-cloud-run.sh $PROJECT_ID $SERVICE_NAME $REGION"
echo ""
