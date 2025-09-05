require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const port = process.env.PORT;

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL })); 
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: email,
      to: "shivkushwah0001@gmail.com",
      subject: `Message from ${name}`,
      text: message,
    });

    res.json({ message: "✅ Email sent successfully!", id: info.messageId });
    console.log("✅ Email sent successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "❌ Failed to send email" });
  }
});

app.listen(port, () => console.log(`Server running on ${port}`));
