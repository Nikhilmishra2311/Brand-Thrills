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


## Contact form email notifications (EmailJS)

This project sends contact-form submissions directly to `brandthrillsadv@gmail.com` using EmailJS from the browser. It does **not** store submissions in Supabase or another database. If sending fails, the visitor sees an error and should retry or contact the team by phone.

### Configure EmailJS

1. In the EmailJS dashboard, create/connect an Email Service (for example, the company Gmail account).
2. Create an Email Template. Set **To email** to `brandthrillsadv@gmail.com` (or use `{{to_email}}` if you prefer the value passed by the form).
3. Use these template variables in the subject/body: `{{name}}`, `{{email}}`, `{{phone}}`, `{{company}}`, `{{service}}`, `{{message}}`. Set **Reply-To** to `{{reply_to}}` if available.
4. Copy the Service ID, Template ID, and Public Key from EmailJS.
5. Put them in the local `.env` file:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
6. Restart the development server after changing `.env`.
7. In EmailJS settings, enable allowed domains / origin restrictions for your local development origin and production Vercel domain. Configure rate limits and CAPTCHA/bot protection where available.

### Vercel

Add the same three `VITE_EMAILJS_*` variables under **Project → Settings → Environment Variables**, for Preview and Production as needed, then redeploy. These identifiers are intended for browser use; do not put private credentials or Gmail passwords in frontend environment variables.

### Important limitation

Because this version intentionally uses EmailJS only, enquiries are **not saved to a database**. EmailJS has account plan limits and browser-side form submissions can be abused if domain restrictions and anti-spam protections are not configured.

## Brand Thrills final design update

The homepage now follows the supplied Brand Thrills visual reference with a red/black/white identity, poster-led hero, service cards, About section with real exhibition photography, project-photo client cards, available client logos, and a Contact section with clickable Google Maps directions for both Gurugram and Ghaziabad locations.

### EmailJS configuration

Set these Vite environment variables in `.env` locally and in Vercel Project Settings → Environment Variables:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

The EmailJS template should use `to_email` as the recipient variable and include `name`, `email`, `phone`, `company`, `service`, `message`, and `reply_to`. Set the template recipient to `brandthrillsadv@gmail.com` in EmailJS itself as well. Contact enquiries are sent directly through EmailJS and are not stored in a database.
