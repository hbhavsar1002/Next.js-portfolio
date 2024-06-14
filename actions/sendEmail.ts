//to send an email we use Resend third party component
//to style an email we use react email
"use server";
import React from "react";
import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";
import ContactForm from "@/email/contactform";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log("Running on server");
  console.log(formData.get("senderEmail"));
  console.log(formData.get("message"));
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  //as string is used to assert here that senderEmail and message is not null and is string
  let data;
  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "hbhavsar1002@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactForm,{
        message: message as string,
        senderEmail: senderEmail as string
      })
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return{
    data
  }
};
