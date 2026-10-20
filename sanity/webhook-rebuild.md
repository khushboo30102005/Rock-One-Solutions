# Sanity Webhook → GitHub Actions Rebuild

When content is published in Sanity, trigger a rebuild and deploy.

## Setup

1. In your Sanity project dashboard (manage.sanity.io):
   - Go to **API** → **Webhooks**
   - Click **Create webhook**

2. Configure the webhook:
   - **Name**: `Deploy to Production`
   - **URL**: `https://api.github.com/repos/YOUR_ORG/YOUR_REPO/dispatches`
   - **HTTP method**: `POST`
   - **HTTP Headers**:
     ```
     Authorization: token YOUR_GITHUB_PAT
     Accept: application/vnd.github.v3+json
     ```
   - **Trigger on**: Create, Update, Delete
   - **Filter**: Leave empty (all document types) or set to:
     ```
     _type in ["blogPost", "workProject", "caseStudy", "googleReview", "clientLogo"]
     ```
   - **Projection / Body**:
     ```json
     {
       "event_type": "sanity-webhook",
       "client_payload": {
         "documentType": "${_type}",
         "documentId": "${_id}"
       }
     }
     ```

3. The GitHub PAT needs `repo` scope to trigger `repository_dispatch`.

## How it works

1. Editor publishes content in Sanity Studio
2. Sanity fires the webhook to GitHub
3. GitHub Actions `deploy.yml` runs (triggered by `repository_dispatch`)
4. The build fetches fresh content from Sanity
5. Static HTML is synced to S3 and CloudFront is invalidated
