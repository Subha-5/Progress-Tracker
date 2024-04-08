import User from '@/models/user.model';
import nodemailer from 'nodemailer';
import bcrypt from 'bcryptjs';

// TODO: Verify Email and Forget Password

export const sendMail = async ({ email, emailType, userId }: sendMailProps) => {
  try {
    const hashedToken = await bcrypt.hash(userId.toString(), 10)

    // configure mail for usage
    if (emailType === 'VERIFY') {
      await User.findByIdAndUpdate(userId,
        {
          $set: {
            verifyToken: hashedToken,
            verifyTokenExpiry: Date.now() + 3600_000
          }
        }
      )
    } else if (emailType === 'RESET') {
      await User.findByIdAndUpdate(userId,
        {
          $set: {
            forgotPasswordToken: hashedToken,
            forgotPasswordTokenExpiry: Date.now() + 3600_000
          }
        }
      )
    }

    const transporter = nodemailer.createTransport({
      // @ts-ignore
      host: process.env.NODEMAILER_TRANSPORT_HOST!,
      port: process.env.NODEMAILER_TRANSPORT_PORT!,
      secure: process.env.NODEMAILER_TRANSPORT_SECURE!,
      auth: {
        user: process.env.NODEMAILER_TRANSPORT_AUTH_USER!,
        pass: process.env.NODEMAILER_TRANSPORT_AUTH_USER!,
      },
    });

    const mailSubject = emailType === 'VERIFY' ? 'Verify your email' : 'Reset your password'

    const mailContent = `<p>Click <a href="${process.env.DOMAIN}/verifyemail?${hashedToken}"> to ${emailType === 'VERIFY' ? "verify your email" : "reset your password"} 
    <br /> or copy and paste the link below in your browser 
    <br />${process.env.DOMAIN}/verifyemail?${hashedToken}</p>`
    
    const mailOptions = {
      from: process.env.MAIL_OPTIONS_FROM,
      to: email,
      subject: mailSubject,
      text: mailSubject,
      html: mailContent,
    }

    const mailResponse = await transporter.sendMail(mailOptions)
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message)
  }
}

type sendMailProps = {
  email: string,
  emailType: string,
  userId: string
}