import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.EMAIL_API_KEY);
export default async (req, res) => {
  const { email, subject, message, name } = req.body;

  const msg = {
    to: 'kobi.iptv@gmail.com',
    from: 'dev.hassuu@gmail.com',
    subject,
    name,
    text: message,
  };

  try {
    await sgMail.send(msg);
    res.json({ message: `Email has been sent` });
  } catch (error) {
    console.log(error.response.body);
    res.status(500).json({ error: 'Error sending email' });
  }
};
