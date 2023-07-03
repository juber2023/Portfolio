import React from "react";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const Contact = () => {
  
  const contact_info = [
    { logo: "mail", text: "juber.eco@gmail.com" },
    { logo: "logo-whatsapp", text: "+8801748427227" },
    {
      logo: "location",
      text: "Rajshahi, Bangladesh",
    },
  ];
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${import.meta.env.VITE_serviceKey}`, `${import.meta.env.VITE_templateKey}` , form.current, `${import.meta.env.VITE_emailKey}`)
      .then((result) => {
          // console.log(result.text);
          e.target.reset()
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Message sent',
            showConfirmButton: false,
            timer: 1500
          })
      }, (error) => {
          // console.log(error.text);
          alert ('Error: Message not sent')
      });
  };
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-violet-600">Me</span>
        </h3>

        <div
          className="mt-10 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-zinc-900 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form ref={form} onSubmit={sendEmail} className="flex flex-col flex-1 gap-5">
            <input
              type="text"
              placeholder="Your Name"
              name="from_name"
              required
            />
            <input
              type="Email"
              placeholder="Your Email Address"
              name="from_email"
              required
            />
            <textarea
              placeholder="Your Message"
              name="message"
              rows={10}
              required
            ></textarea>
            <input
              type="submit"
              value="Send Message"
              className="bg-violet-500 rounded-xl p-3 mx-2 hover:bg-violet-900 w-fit cursor-pointer"
            />
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-violet-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
