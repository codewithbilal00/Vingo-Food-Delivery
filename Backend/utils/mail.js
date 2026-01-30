import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()
// const transporter = nodemailer.createTransport({
//   service: "Gmail",
//   port: 465,
//   secure: true, // true for 465, false for other ports
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASS,
//   },
// });

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,          // 👈 IMPORTANT
  secure: false,      // 👈 true ONLY for 465
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS, // App Password
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000,
});

export const sendOtpMail=async (to,otp) => {
//     await transporter.sendMail({
//         from:process.env.EMAIL,
//         to,
//         subject:"Reset Your Password",
//         html:`<p>Your OTP for password reset is <b>${otp}</b>. It expires in 5 minutes.</p>`
//     })
// }
  await transporter.sendMail({
  from: `"Vingo Delivery" <${process.env.EMAIL}>`,
  to: user.email,
  subject: "Delivery OTP",
  text: `Your delivery OTP is ${otp}. It expires in 5 minutes.`,
  html: `<p>Your OTP for delivery is <b>${otp}</b>. It expires in 5 minutes.</p>`
});



// export const sendDeliveryOtpMail=async (user,otp) => {
//     await transporter.sendMail({
//         from:process.env.EMAIL,
//         to:user.email,
//         subject:"Delivery OTP",
//         html:`<p>Your OTP for delivery is <b>${otp}</b>. It expires in 5 minutes.</p>`
//     })
// }

// export const sendDeliveryOtpMail = async (user, otp) => {
//   try {
//     const info = await transporter.sendMail({
//       from: `"Vingo Delivery" <${process.env.EMAIL}>`,
//       to: user.email,
//       subject: "Delivery OTP",
//       html: `<p>Your OTP for delivery is <b>${otp}</b>. It expires in 5 minutes.</p>`,
//     });

//     console.log("DELIVERY OTP SENT:", info.messageId);
//   } catch (error) {
//     console.error("DELIVERY OTP FAILED ❌", error);
//   }
// };
export const sendDeliveryOtpMail = async (user, otp) => {
  try {
    const info = await transporter.sendMail({
      from: `"Vingo Delivery" <${process.env.EMAIL}>`,
      to: user.email,
      subject: "Your delivery code",
      text: `Your delivery code is ${otp}. It expires in 5 minutes.`,
      html: `
        <p>Hello ${user.fullName || ""},</p>
        <p>Your delivery code is <b>${otp}</b>.</p>
        <p>This code will expire in 5 minutes.</p>
      `,
    });

    console.log("MAIL SENT:", info.messageId);
  } catch (error) {
    console.error("MAIL FAILED:", error);
  }
};

