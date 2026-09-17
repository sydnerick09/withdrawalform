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
