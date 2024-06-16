"use client";
import emailjs from '@emailjs/browser';
import React,{useRef,useState } from 'react';
import Title from '../Title/Title';
import { FaPaperPlane } from "react-icons/fa";
import { motion } from 'framer-motion';

const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xr9u01m', 'template_fe0so5c', form.current, {
        publicKey: 'c4v7_k45d6HLTK-eM',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setEmailSent(true);
          setTimeout(() => {
            setEmailSent(false);
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <motion.section
      id="contact"
      className='mb-20 sm:mb-28 flex flex-col pt-9 items-center justify-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className='w-[min(100%,30rem)] text-center'>
        <Title title={"Contact Me"} />
        <p className="text-gray-700 text-lg font-titleFont ">
          Want to know more ? Shoot me a DM or send a mail to  <a className='underline' href='mailto:kishore22705@gmail.com'>Kishore22705@gmail.com</a>{" "}
          or send your message to this form 
        </p>
        {emailSent && <p>Email sent successfully!</p>}
        <form ref={form} onSubmit={sendEmail} className='mt-2 flex flex-col gap-2'>
          <p className='mr-[25rem] text-black font-titlefont my-2'>Your Name</p>
        <input name="name" type="text" required={'true'} maxLength={"500"} className='h-12 rounded-lg  text-black font-bold px-4 border-b-200 border' placeholder='name' />
        <p className='mr-[25rem] text-black my-2'>Your Name</p>
          <input name="email" type="email" required={'true'} maxLength={"500"} className='h-12 text-black font-semibold mt-2 rounded-lg px-4 border-b-200 border' placeholder='youremail@xyz.xyz' />
          <p className='mr-[24rem] text-black my-2'>Your Message</p>
          <textarea  name="message" required={'true'} maxLength={"500"} className='h-52  text-black font-semibold my-2 rounded-lg border-b-200 border p-4' placeholder='Message' />
          <button type="submit" value="Send" className='h-[3rem] group w-[8rem] focus:scale-110 hover:scale-110 hover:bg-gray-950 text-white bg-gray-900 flex items-center justify-center gap-3 rounded-full outline-none transition-all mt-2'>
            Submit <FaPaperPlane className='text-xs opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all' />
          </button>
        </form>
      </div>
    </motion.section>
  )
}

export default Contact;
