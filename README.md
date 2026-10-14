# Creative Campaign Gallery

https://advitas.in/

this is the website i want similar website with same features and functionality but look should be different it should look more modern and premium i want a complete mern stack website with same advertisement purpose only fully functional frontend website with react

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e1e70325-3b0a-4b30-ab7f-6738da4342f4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```


## Email notifications for contact enquiries

The contact form first saves the enquiry to Supabase, then attempts to send an email notification through Resend. An email failure does not undo the database save or ask the visitor to submit again.

1. Copy `.env.example` to `.env` and fill in your own Supabase values.
2. Create a Resend account and obtain an API key. Set `RESEND_API_KEY` on the server only.
3. Set `INQUIRY_NOTIFICATION_EMAIL` to the inbox that should receive enquiries.
4. Set `RESEND_FROM_EMAIL` to a sender address/domain verified in Resend. Resend's test sender can only be used under its own test restrictions.
5. For Vercel, add the same server environment variables in Project Settings → Environment Variables, including `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY`, `INQUIRY_NOTIFICATION_EMAIL`, and `RESEND_FROM_EMAIL`. Add the `VITE_` Supabase variables if the client-side app needs them. Redeploy after changing variables.

Never prefix a secret or service-role key with `VITE_`, commit `.env`, or expose server secrets in browser code. `.env` in this package is a safe template and must be filled before running locally.
