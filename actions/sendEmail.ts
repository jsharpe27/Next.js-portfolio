"use server"

import { Resend } from 'resend'
import { validateString } from '@/lib/utils'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('email')
    const message = formData.get('message')

   // simple server-side validation
   if (!validateString(senderEmail, 500)) {
        return {
            error: "invalid sender email"
        }
   }
   if (!validateString(message, 5000)) {
        return {
            error: "invalid message"
        }   
   }
   try {
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'sharpejordan@gmail.com',
        subject: 'Message from contact form',
        reply_to: senderEmail as string,
        text: message as string
    })
   } catch (error: unknown){
     return {
        error: error.message
     }
   }
    
}

