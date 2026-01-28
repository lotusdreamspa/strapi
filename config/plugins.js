module.exports = ({ env }) => ({
  email: {
    config: {
      provider: env('EMAIL_PROVIDER', 'nodemailer'), // Legge dalla variabile o usa nodemailer di default
      providerOptions: {
        host: env('EMAIL_SMTP_HOST', 'smtp.gmail.com'),
        port: env.int('EMAIL_SMTP_PORT', 465),
        secure: true,
        auth: {
          user: env('EMAIL_SMTP_USER'),
          pass: env('EMAIL_SMTP_PASS'),
        },
      },
      settings: {
        defaultFrom: env('EMAIL_SMTP_USER'),
        defaultReplyTo: env('EMAIL_SMTP_USER'),
      },
    },
  },
});