#!/bin/bash
# Build and deploy to Google Cloud Run
# Usage: ./deploy.sh [PROJECT_ID]

PROJECT_ID=${1:-aiinkwell}
SERVICE_NAME=re-entre
REGION=us-central1

echo "Building Re-Entre for Cloud Run..."
gcloud builds submit --tag gcr.io/$PROJECT_ID/$SERVICE_NAME --project=$PROJECT_ID

echo "Deploying to Cloud Run..."
gcloud run deploy $SERVICE_NAME \
  --image gcr.io/$PROJECT_ID/$SERVICE_NAME \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated \
  --project=$PROJECT_ID

echo "Done!"
