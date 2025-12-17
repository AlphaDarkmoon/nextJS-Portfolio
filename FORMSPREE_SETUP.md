# Formspree Setup Instructions

## Setting up the Contact Form

1. **Create a Formspree Account**
   - Go to [formspree.io](https://formspree.io) and create a free account

2. **Create a New Form**
   - Click "Create a new form"
   - Give it a name like "Portfolio Contact Form"
   - Copy the form ID (it looks like: `xeqwryzl`)

3. **Update Environment Variables**
   - Open `.env.local` file
   - The form ID is already set to: `xdkakeqt`
   - If you need to change it, replace with your actual form ID:
   ```
   NEXT_PUBLIC_FORMSPREE_FORM_ID=your-new-form-id
   ```

4. **Configure Email Notifications**
   - In your Formspree dashboard, go to the form settings
   - Add your email address to receive form submissions
   - Optionally configure email templates and spam filtering

5. **Test the Form**
   - Submit a test message from your portfolio
   - Check your email and Formspree dashboard for the submission

## Features

- ✅ Form validation
- ✅ Loading states
- ✅ Success/error feedback
- ✅ Spam protection (built into Formspree)
- ✅ Email notifications
- ✅ Form analytics in Formspree dashboard

## Troubleshooting

### "Failed to send message" Error

If you're getting form submission errors, check:

1. **Form ID is correct** - Verify the ID in `.env.local` matches your Formspree form
2. **Form is active** - Make sure your Formspree form is not paused/disabled
3. **Network connectivity** - Check browser console for network errors
4. **CORS issues** - The form uses FormData submission which should work with Formspree

### Test the Form

1. Open browser developer tools (F12)
2. Go to Network tab
3. Submit the form
4. Look for the Formspree request and check the response

### Alternative: Direct HTML Form

If API submission fails, you can temporarily use a direct HTML form:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- form fields -->
  <button type="submit">Send</button>
</form>
```

This bypasses JavaScript and submits directly to Formspree.