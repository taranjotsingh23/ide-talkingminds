
  export default function (req, res) {
    require('dotenv').config();
    // const PASSWORD = process.env.password;
    let nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: 'talking.minds.india@gmail.com',
        pass: process.env.password,
      },
      secure: true,
    })
    const mailData = {
      from: 'Talking Minds',
      to: req.body.email,
      subject: `Mentorship Call Scheduled`,
      text: "",
      html: `<div>
            Dear ${req.body.name},<br>

            I hope this email finds you well. I am reaching out to schedule a counselling session on mental health with you. As you may know, mental health is an important aspect of our overall well-being, and it is important to take the time to address any concerns we may have in this area. <br>
            
            The counselling session is scheduled for <b>${req.body.dt}</b>. We will be using a video conferencing platform for our session, and I have included the joining link below: <br>
            
            <b>Joining Code: ${req.body.meetResult}</b> <br> <br>
            
            Please make sure to click on the link at the scheduled time to join the session. If you have any technical difficulties or questions, please do not hesitate to contact me. <br>
            
            I understand that this may be a difficult time for you, but please know that I am here to support you in any way that I can. I look forward to speaking with you during our session.<br><br>
            
            Best regards,<br>
            Team Talking Minds<br>
            <img src="${req.body.img}" alt="Talking Minds Logo" height="200px"/>
            </div>`,
    }
    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    res.status(200);
  }
