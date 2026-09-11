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
