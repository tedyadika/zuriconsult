# ZuriConsult

Premium PPP, infrastructure project-development and investment advisory website.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contact form email

The contact form sends submissions through GoDaddy's authenticated SMTP service. Before deploying:

1. Use the full GoDaddy mailbox address and its mailbox password.
2. Add these environment variables in your hosting provider:

```env
SMTP_HOST=smtpout.secureserver.net
SMTP_PORT=465
SMTP_USER=your-go-daddy-email@your-domain.com
SMTP_PASSWORD=your-go-daddy-email-password
CONTACT_TO_EMAIL=info@zurilconsult.com
CONTACT_FROM_EMAIL=your-go-daddy-email@your-domain.com
```

Use port `587` instead of `465` if your GoDaddy account requires STARTTLS. Keep
`SMTP_PASSWORD` in your hosting provider's secret environment variables and never
commit `.env.local`.

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

The contact form requires the GoDaddy mailbox credentials. The sender and recipient
should normally be the same GoDaddy mailbox; visitor replies are routed to the
visitor's address through `replyTo`.
