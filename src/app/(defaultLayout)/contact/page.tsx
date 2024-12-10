"use client";
import React from "react";
import { motion } from "framer-motion";
import { transition1 } from "@/app/transition";
import SendEmailPhoto from "@/images/send-email2.png";
import { useForm } from "react-hook-form";

type Props = {};

export default function Contact({}: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = React.useState("");

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Email sent successfully");
        reset(); // Reset form fields
        // Thực hiện các thao tác sau khi gửi email thành công
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error ?? "Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage("Failed to send email");
    }
  };
  return (
    <motion.section
      className="section bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
    >
      {/* text and image wrapper */}
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row items-center justify-start gap-x-8 text-center lg:text-left overflow-y-scroll md:overflow-hidden absolute lg:relative top-[100px] lg:top-0 h-full w-full">
          <div className="hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-80 -z-10"></div>
          {/* text & form */}
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition1}
            className="lg:flex-1 lg:pt-32 px-4"
          >
            <h1 className="h1">Contact me</h1>
            <p className="mb-12">I would love to get suggestions from you</p>
            <form
              className="flex flex-col gap-y-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex gap-x-10">
                <div>
                  <input
                    {...register("name", { required: true })}
                    className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                    type="text"
                    placeholder="Yourname"
                  />
                  {errors.name && (
                    <p className="text-red-500">Name is required</p>
                  )}
                </div>
                <div>
                  <input
                    {...register("email", { required: true })}
                    className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                    type="text"
                    placeholder="Your email address"
                  />
                  {errors.email && (
                    <p className="text-red-500">Email is required</p>
                  )}
                </div>
              </div>
              <input
                {...register("message", { required: true })}
                className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                type="text"
                placeholder="Your Message"
              />
              {errors.message && (
                <p className="text-red-500">Message is required</p>
              )}
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              <button className="btn mb-[30px] mx-auto lg:mx-0 seft-start">
                Send it
              </button>
            </form>
          </motion.div>
          <motion.div
            className="lg:flex-1 lg:pt-32"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={transition1}
          >
            <img
              src={SendEmailPhoto.src}
              alt="send email"
              className="min-h-[350px] lg:min-h-max"
            />
          </motion.div>
          {/* text */}
        </div>
      </div>
    </motion.section>
  );
}
