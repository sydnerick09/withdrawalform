# GWENO Hub — Withdrawal Verification Form

This is a static HTML/CSS/JavaScript form.

## Email delivery

The form is configured to submit through FormSubmit to:

businesshub.comke@gmail.com

There is no database or custom backend in this project.

### First-time activation

FormSubmit normally requires the destination email address to be confirmed the first time a form is submitted. Submit a test form and check the destination inbox for the confirmation message. Complete that confirmation before relying on the form.

## Important security note

This form collects National ID and phone-number information. Treat the inbox as sensitive data and restrict access to authorized staff.

The form deliberately does NOT request:
- M-Pesa PIN
- OTP
- passwords
- card PINs
- security codes

The page uses GWENO Hub branding rather than presenting itself as an official Safaricom page.

## Files

- index.html — form markup
- style.css — green corporate responsive design
- script.js — submission state handling

## Local test

Open `index.html` in a browser.

For production, host the files on your normal website/domain and use HTTPS.


## Chat and Admin Panel
`chat.html` adds the requested chat interface. Attachments are restricted to photos and supported documents; videos are rejected, and files must be **below 5 MB**. The Admin Panel displays chat messages and users stored by this demo in browser localStorage.

**Important:** this uploaded project is a static HTML/CSS/JavaScript site. The existing withdrawal form uses FormSubmit and the README states that there is no database or custom backend. Therefore, the included admin panel is a front-end/demo implementation only. A production admin panel that sees all users/messages across devices requires a real authenticated backend/database and server-side authorization.
