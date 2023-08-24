import Head from "next/head";
import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillGithub} from "react-icons/ai";
import Image from "next/image";
import samurai from "../public/samurai.jpeg";
import HTML from "../public/html.svg";
import CSS from "../public/css.svg";
import JS from "../public/JS.svg";
import REACT from "../public/react.svg";
import TAILWIND from "../public/tailwind.svg";
import NEXTJS from "../public/nextjs.svg";
import WORKSETUP from "../public/worksetup.webp"
import GOOGLECLONE from "../public/GoogleClone.png";
import CRYPTO from "../public/Crypto.png";
import LAPTOP from "../public/laptopdisplay.png";
import LAPTOP2 from "../public/laptopdisplay2.png";
import EMAIL from "../public/email.png";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    {/* Nav */}
    <main className="bg-white px-10 md:px-20 lg:px-40">
      <section className="min-h-screen">
      <nav className="py-10 mb-12 flex justify-between">
  <h1 className="text-xl font-burtons text-teal-500">Broseph.dev</h1>
  <ul className="flex items-center space-x-6"> 
   
    <li>
      <BsFillMoonStarsFill className="cursor-pointer text-xl text-teal-500"/>
    </li>
    <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 text-white py-2 rounded-md ml-8"href="#">Resume</a></li>
  </ul>
</nav>
{/* Home */}
<div className="flex flex-col md:flex-row-reverse items-center"> {/* Reversed flex order */}
   <div className="relative flex justify-center items-center text-blue mx-auto mt-20 md:h-96 md:w-96"> {/* Responsive alignment */}
      <Image alt="samurai-logo" src={samurai} className="w-80 h-100 object-cover" />
   </div>
   <div className="flex flex-col justify-center md:ml-8"> {/* Adjusted margin */}
      <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl flex text-center">Front End Developer 👋</h2>
      <p className="text-md py-5 leading-8 text-gray-800 md:text-lg max-w-lg flex text-center">Hi, I'm Jordan Brose. A passionate Front-end React Developer based in Australia. 📍</p>
      <div className="flex justify-center gap-8  md:gap-0 "> {/* Responsive alignment */}
         <a className="text-blue-500 text-3xl" href="#"><AiFillGithub /></a> {/* Increased text size */}
         <a className="text-blue-500 text-3xl" href="#"><AiFillLinkedin /></a> {/* Increased text size */}
      </div>
   </div>
</div>
    </section>
    {/* About me */}
    <section className="flex items-center mt-0  pb-48" id="about">

<div className="ml-8">
  <h3 className="text-md text-teal-600">About Me</h3>
  <p className="flex-1 text-sm py-2 leading-6 text-gray-700">
    As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind and Next.JS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
  </p>
</div>
</section>
      {/* Tech Stack*/}
      <section className=" px-4 text-center flex items-center mt-0">
  <h2 className="text-teal-900 text-xl">Tech Stack </h2>
  <div className="flex ml-1 gap-3 md:px-20 lg:px-40">
    <Image alt="html-logo" src={HTML} className="w-10 h-10"/>
    <Image alt="css-logo" src={CSS} className="w-10 h-10"/>
    <Image alt="js-logo" src={JS} className="w-10 h-10"/>
    <Image alt="react-logo" src={REACT} className="w-10 h-10"/>
    <Image alt="tailwind-logo" src={TAILWIND} className="w-10 h-10"/>
    <Image alt="nextjs-logo" src={NEXTJS} className="w-10 h-10"/>
  </div>
</section>
      
{/* Portfolio */}
<section id="portfolio"  >
  <div className="bg-gradient-to-r from-cyan-500 to-teal-500 ">
  <h3 className="text-3xl text-white py-1 mt-48 flex justify-center">Portfolio</h3>
  <p className="text-md text-gray-800 py-1 mb-20 flex justify-center">Each project is a unique piece of development 🧩</p>
  </div>
  <div className="md:flex lg:flex gap-10">
    <div className="border-spacing-1 shadow-md border-teal-300">
      <h2 className="text-md py-5 leading-8 text-teal-600 p-28 md:text-lg max-w-lg mx-auto flex text-center">Cryptocurrency Webpage</h2>
      <Image src={LAPTOP} className="flex justify-center items-center"/>
      <p className="text-sm text-gray-800 py-1">I built this project with vanilla HTML, CSS and JS. Through this project I gained more experience applying API's and animation effects.</p>
    </div>
    <div className="border-spacing-1 shadow-md border-teal-300">
      <h2 className="text-md py-5 leading-8 text-teal-600  md:text-lg max-w-lg mx-auto flex justify-center text-center">Google Clone</h2>
      <Image src={LAPTOP2} className="flex justify-center items-center "/>
      <p className="text-sm text-gray-800 mt-3 py-1">I built this project with vanilla HTML, CSS and JS. This project allows the user to utilise the search bar to open up the related search query in a new tab</p>
    </div>
  </div>
</section>
{/* Contact Me */}
<section>
  <div className="text-center mt-20">
    <h1 className="text-lg text-teal-500">Contact Me</h1>
    <h2 className="text-lg text-black">Don't be shy! Hit me up! 👇</h2>
  </div>
  <div className="flex flex-col items-center">
    <Image src={EMAIL} className="w-12 h-12 mb-4" />
    <h3 className="text-black">Mail</h3>
    <p className="text-gray-400">email   Placeholder</p>
  </div>
</section>
<footer className="bg-gray-700 py-4 flex items-center justify-between mt-24">
      <div className="ml-4">&copy; 2023 All Rights Reserved</div>
      <div className="flex mr-4">
        <a className="text-white mr-2" href="#">
        <AiFillLinkedin />
        </a>
        <a className="text-white" href="#">
        <AiFillGithub />
        </a>
      </div>
    </footer>
    </main>
    </div>
  );
}
