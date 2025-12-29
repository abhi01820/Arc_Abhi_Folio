const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/api/notify-download', async (req, res) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'mekalaabhilash01820@gmail.com',
      subject: 'Resume Downloaded',
      text: 'Someone downloaded your resume from the portfolio website.'
    });
    res.status(200).send('Notification sent');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending notification');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
