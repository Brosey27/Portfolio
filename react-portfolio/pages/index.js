import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import PROFILE from "../public/cartoonme.svg";
import design from "../public/design.jpeg";
import code from "../public/code.svg";
import consulting from "../public/consulting.png";
import LAPTOP1 from "../public/laptopdisplay.png";
import LAPTOP2 from "../public/laptopdisplay2.png";
import HTML from "../public/html.svg";
import CSS from "../public/css.svg";
import JS from "../public/JS.svg";
import REACT from "../public/react.svg";
import TAILWIND from "../public/tailwind.svg";
import NEXTJS from "../public/nextjs.svg";
import CRYPTO from "../public/Cryptowebpage.png";
import Google from "../public/GoogleClone.png";
import contact from "../public/contact.svg";
import navigate from "../public/navigate.svg";
import canva from "../public/canva.svg";
import chatgpt from "../public/chatgpt.webp";
import figma from "../public/Figma2.png";
import miro from "../public/miro.webp";
import adobeillustrator from "../public/AdobeIllustrator.svg";
import bash from "../public/bash.png";
import photoshop from "../public/photoshop.png";
import datafinance from "../public/datafinance.png";
import financetracker from "../public/FinanceTracker.png";
import cryptowebpage from "../public/Cryptocurrency.png";
import FIREBASE from "../public/firebase.png";
import NODE from "../public/nodejs.svg";
import EXPRESS from "../public/express.png";
import Project4 from "../public/Project4.png";


import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillMail,
  AiFillGithub,
  AiFillCaretRight
  
} from "react-icons/ai";

import React, { useState } from "react";

export default function ContactSignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here, e.g., sending data to a server
    // For demonstration purposes, we'll just set the submitted state to true
    setSubmitted(true);
  };


    const [darkMode, setDarkMode] = useState(true);
 

  return (
    <div className={` ${darkMode ? 'dark' : ''}`}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Nav */}
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl text-black dark:text-white">Broseph.dev</h1>
            <ul className="flex items-center">
            <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl text-black dark:text-white"
                />
                </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Home */}
          <div className="text-center p-10 py-10">
          <h2 className="text-5xl py-2 text-teal-600  dark:text-teal-400 md:text-6xl waving font-bold">
             Hi, I'm <span className="text-gray-600 dark:text-white">Jordan</span>
        
            </h2>
            <h2 className="text-5xl py-2 text-teal-600 font-bold dark:text-teal-400 md:text-6xl waving">
             A <span className="text-gray-600 dark:text-white">Front End</span> Web <span className="text-gray-600 dark:text-white">Developer</span> <span role="img" aria-label="Wave" className="wave-emoji inline-block animate-wave">👋</span>
        
            </h2>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            I specialise in building and designing exceptional digital experiences. 
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/Brosey27"><AiFillGithub /></a>
              <a href="https://www.linkedin.com/in/jordan-brose-ab0a47186/"><AiFillLinkedin /></a>
              <a href="#"><AiFillMail /></a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image alt="home-logo" src={PROFILE} className="fill object-cover" priority={true} />
            </div>
          </div>
        </section>

        {/* About */}
        <section>
          <div>
            <h3 className="text-3xl py-1 text-teal-500 font-bold">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 font-medium">
            As a self taught Web Developer, I possess an impressive 
              <span className="text-teal-500"> arsenal </span>
              of <span className="text-teal-500">skills </span>
              in HTML, CSS, JavaScript, React, Tailwind and Next.JS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
            </p>
          </div>

          {/* Coding Technologies */}
          <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image alt="code-logo"
              src={code} className="w-20 h-20"/>
              <h3 className="text-lg font-medium pt-8 pb-2 text-black">
                Always improving and adapting
              </h3>
              <p className="py-2 text-black">
                I understand the importance of being flexible in the tech industry. This is why I am continuously learning and implementing new technologies in order to maintain peak efficiency.
              </p>
               {/* Front-end Tech Stack */}
          <div className="flex ml-1 gap-3 items-center md:px-20 lg:px-40 flex-col"> {/* Add 'flex-col' class to center items vertically */}
          <h2 className="text-teal-600 py-4 text-xl font-bold">Front-End Tech Stack</h2>
            <div className="flex gap-3 items-center">
              <Image alt="html-logo" src={HTML} className="w-10 h-10" />
              <Image alt="css-logo" src={CSS} className="w-10 h-10" />
              <Image alt="js-logo" src={JS} className="w-10 h-10" />
              <Image alt="react-logo" src={REACT} className="w-10 h-10" onError={(e) => console.log("Image failed to load:", e)} />
              <Image alt="tailwind-logo" src={TAILWIND} className="w-10 h-10" />
              <Image alt="nextjs-logo" src={NEXTJS} className="w-10 h-10" />
            </div>
          </div>

            {/* Back-end Tech Stack */}
            <div className="flex ml-1 gap-3 items-center md:px-20 lg:px-40 flex-col"> {/* Add 'flex-col' class to center items vertically */}
          <h2 className="text-teal-600 py-4 text-xl font-bold">Back-End Tech Stack</h2>
            <div className="flex gap-3 items-center">
              <Image alt="html-logo" src={FIREBASE} className="w-10 h-10" />
              <Image alt="css-logo" src={NODE} className="w-10 h-10" />
              <Image alt="js-logo" src={EXPRESS} className="w-10 h-10" />
             
            </div>
          </div>

              {/* Design Stack */}
              <div className="flex ml-1 gap-3 items-center md:px-20 lg:px-40 flex-col"> {/* Add 'flex-col' class to center items vertically */}
                <h2 className="text-teal-600 py-6 text-xl font-bold">Design Stack</h2>
                <div className="flex gap-3 items-center">
                  <Image alt="canva-logo" src={canva} className="w-10 h-10" />
                  <Image alt="chatgpt-logo" src={chatgpt} className="w-10 h-10" />
                  <Image alt="figma-logo" src={figma} className="w-10 h-10" />
                  <Image alt="adobeillustrator-logo" src={adobeillustrator} className="w-10 h-10" />
                  <Image alt="miro-logo" src={miro} className="w-10 h-10" />
                  <Image alt="photoshop-logo" src={photoshop} className="w-10 h-10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-10">
          <div>
            <h4 className="text-3xl py-1 text-teal-500 dark:text-teal-500 font-bold">Each project is a unique piece of development 🧩</h4>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 font-medium">
              Since the beginning of my journey as a self-taught
              developer, I have always tried  to 
              <span className="text-teal-500"> challenge </span>
              myself to create <span className="text-teal-500">useful </span>
              digital products for consumer use. Here are a handful of projects that outline my development.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap ">
            {/* Project 1 */}
          <div className="basis-1/3 flex-1 shadow-md border-2 overflow-hidden dark:border-gray-700">
              <a href="https://finance-tracker-v2-pi.vercel.app/#stats"><Image
               alt="finance-tracker"  src={financetracker}
               className="rounded-lg object-cover w-100 h-100 responsive"
              /></a>
              <h2 className="text-teal-500 text-2xl text-center pt-3 font-bold">Finance Tracker</h2>
              <p className="text-sm py-2 leading-8 text-gray-800 dark:text-gray-200 flex text-center font-medium">This is a minimalistic production-ready Finance Tracker app built with Next.js 13, Tailwind CSS and Firebase. The app includes security using user authentication, protected routes, data storage using Firebase Firestore and the ability to login via google or a demo user account.</p>
              <div className="text-lg flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/Brosey27/finance-tracker-v2"><AiFillGithub /></a>
              <a href="https://finance-tracker-v2-pi.vercel.app/#stats"><AiFillCaretRight /></a>
            </div>
            </div>
            {/* Project 2 */}
            <div className="basis-1/3 flex-1 shadow-md border-2 overflow-hidden dark:border-gray-700">
              <a href="https://data-finance-2-rdfy10oht-brosey27.vercel.app/"><Image
               alt="google-project"  src={datafinance}
               className="rounded-lg object-cover w-100 h-100 responsive"
              /></a>
               <h2 className="text-teal-500 text-2xl text-center pt-3 font-bold">Data Finance</h2>
              <p className="text-sm py-2 leading-8 text-gray-800 dark:text-gray-200 flex text-center font-medium">This fully responsive project was built by employing React, Next.js and Tailwind. It also uses heavy js coding to create a typewriter effect for some text animation in the Hero section. UseState hook to toggle the mobile side drawer menu. Import “React-Icons” dependency for social icons. Incorporates both flexbox and grid layouts.</p>
              <div className="text-lg flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/Brosey27/Data-Finance"><AiFillGithub /></a>
              <a href="https://data-finance-2-rdfy10oht-brosey27.vercel.app/"><AiFillCaretRight /></a>
            </div>
            </div>
            {/* Project 3 */}
            <div className="basis-1/3 flex-1 shadow-md border-2 overflow-hidden dark:border-gray-700">
              <a href="https://crypto-webpage.vercel.app/"><Image
              alt="crypto-project" src={cryptowebpage}
                className="rounded-lg object-cover responsive w-100 h-100"
              /></a>
               <h2 className="text-teal-500 text-2xl text-center pt-3 font-bold">Crypto Webpage</h2>
              <p className="text-sm py-2 leading-8 text-gray-800 dark:text-gray-200 flex text-center font-medium">Refi is a crypto app that allows users to search for information about various cryptocurrencies in real-time. This project allowed me to become more efficient in incorporating API's into my web design by utilising React.</p>
              <div className="text-lg flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/Brosey27/Crypto-Webpage"><AiFillGithub /></a>
              <a href="https://crypto-webpage.vercel.app/"><AiFillCaretRight /></a>
            </div>
            </div>
            {/* Project 4*/}
            <div className="basis-1/3 flex-1 shadow-md border-2 overflow-hidden dark:border-gray-700">
              <a href="https://codeducation.vercel.app/"><Image
               alt="google-project"  src={Project4}
               className="rounded-lg object-cover w-100 h-100 responsive"
              /></a>
              <h2 className="text-teal-500 text-2xl text-center pt-3 font-bold">Code Education</h2>
              <p className="text-sm py-2 leading-8 text-gray-800 dark:text-gray-200 flex text-center font-medium">By utilising Next.JS and Tailwind CSS I built this simple website that outlines the road-map for front-end development. Users can systematically go through each section in order to learn the key aspects of front-end development.</p>
              <div className="text-lg flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/Brosey27/codeducation"><AiFillGithub /></a>
              <a href="https://codeducation.vercel.app/"><AiFillCaretRight /></a>
            </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-10 dark:bg-gray-900">
  <div className="signup-container flex flex-col md:flex-row rounded-lg shadow-md dark:bg-gray-900 overflow-hidden">

     {/* Contact Image */}
     <div className="md:w-1/2 lg:w-1/3">
      <Image
        src={contact}
        alt="Contact Image"
        className="w-full h-full md:w-64 lg:w-80 object-cover"
      />
    </div>

    {/* Contact Form */}
    <div className="form-container p-4 md:w-1/2 lg:w-2/3 flex flex-col justify-center items-center">
      <h1 className="sign-up-h1 text-center mb-4 text-3xl text-black dark:text-white font-bold">Contact Me</h1>
      {submitted ? (
        <p className="text-green-500">Message sent successfully!</p>
      ) : (
        <form
          id="contact-form"
          className="w-full flex flex-col"
          onSubmit={handleSubmit}
        >
              <input
                type="text"
                name="fullName"
                placeholder="Your Name"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="mb-2 p-2 border rounded-md outline-none text-black"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mb-2 p-2 border rounded-md outline-none text-black"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="mb-2 p-2 border rounded-md outline-none text-black"
              ></textarea>
              <button
                className="sign-up-btn bg-teal-600 text-white border-none py-2 px-4 rounded-md cursor-pointer mt-2"
                type="submit"
                disabled={submitted}
              >
                {submitted ? "Message Sent" : "Send Message"}
              </button>
            </form>
          )}
         
        </div>
      </div>
    </section>

      </main>
    </div>
  );
  }
