# Setting Up Sanity Webhooks

Since your project is using Vite/React and not Next.js, you'll need to set up a serverless function or a small server to handle webhooks. Here's how to set it up:

## 1. Create a Vercel Deploy Hook

1. Go to your Vercel project dashboard
2. Navigate to Settings > Git
3. Scroll down to "Deploy Hooks"
4. Create a new deploy hook with a name like "Sanity Content Update"
5. Copy the generated URL

## 2. Set Up a Serverless Function

You can use Vercel Functions, Netlify Functions, or any other serverless provider:

### Example for Netlify Functions:

Create a file at `netlify/functions/sanity-webhook.js`:

\`\`\`javascript
const crypto = require('crypto');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // Verify the webhook signature
  const signature = event.headers['x-sanity-signature'];
  const webhookSecret = process.env.SANITY_WEBHOOK_SECRET;
  
  if (!signature || !webhookSecret) {
    return { statusCode: 401, body: 'Missing signature or webhook secret' };
  }

  const hmac = crypto.createHmac('sha256', webhookSecret);
  const computedSignature = hmac.update(event.body).digest('hex');
  
  if (computedSignature !== signature) {
    return { statusCode: 401, body: 'Invalid signature' };
  }

  try {
    // Trigger your Vercel deploy hook
    const response = await fetch(process.env.VERCEL_DEPLOY_HOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      return { statusCode: 200, body: 'Build triggered successfully' };
    } else {
      return { statusCode: 500, body: 'Failed to trigger build' };
    }
  } catch (error) {
    console.error('Error triggering build:', error);
    return { statusCode: 500, body: 'Internal server error' };
  }
};
\`\`\`

## 3. Configure Sanity Webhook

1. Go to your Sanity project dashboard
2. Navigate to API > Webhooks
3. Create a new webhook
4. Set the URL to your serverless function endpoint
5. Choose which dataset and events to trigger the webhook (e.g., "Created", "Updated", "Deleted")
6. Generate a secret and save it
7. Add this secret to your environment variables as `SANITY_WEBHOOK_SECRET`
8. Add your Vercel deploy hook URL as `VERCEL_DEPLOY_HOOK_URL`

Now, whenever content is updated in Sanity, it will trigger your webhook, which will then trigger a rebuild of your site.
