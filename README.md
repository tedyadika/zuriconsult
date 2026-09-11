# ZuriConsult

Premium PPP, infrastructure project-development and investment advisory website.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contact form email

The contact form sends submissions through [Resend](https://resend.com). Before deploying:

1. Create a Resend API key.
2. Verify the sending domain you will use.
3. Add these environment variables in your hosting provider:

```env
RESEND_API_KEY=re_your_api_key
CONTACT_TO_EMAIL=Adika.okelo@outlook.com
CONTACT_FROM_EMAIL=ZuriConsult <contact@your-verified-domain.com>
```

`CONTACT_FROM_EMAIL` must use the verified sending domain. Keep the API key in your hosting provider's secret environment variables and never commit `.env.local`.

## Production

```bash
npm run build
npm run start
```

The build script uses webpack instead of Turbopack because some managed hosting
environments restrict the worker-process port binding used by Turbopack.

## GoDaddy deployment

Use a GoDaddy hosting plan that supports Node.js applications. Standard static/shared
hosting cannot run the Next.js server or the contact API route.

1. Connect the Git repository in GoDaddy's Node.js application setup.
2. Set the Node.js version to `20` or newer.
3. Set the application start command to `npm run start`.
4. Set the application port using GoDaddy's provided `PORT` value; `next start` reads it automatically.
5. Add the variables from `.env.example` in GoDaddy's environment-variable settings.
6. Deploy and connect the domain to the running Node.js application.

The contact form requires the Resend API key and a verified sending domain. DNS records
for the sending domain should be configured in Resend, while the website domain can remain
managed through GoDaddy.
