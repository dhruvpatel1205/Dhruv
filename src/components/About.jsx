import React, { useState, useEffect } from "react";
import profilePicture1 from "../assets/mimojis/1.png";
import profilePicture2 from "../assets/mimojis/2.png";
// import profilePicture3 from "../assets/mimojis/3.png";
import profilePicture4 from "../assets/mimojis/4.png";
import profilePicture5 from "../assets/mimojis/5.png";
import profilePicture6 from "../assets/mimojis/6.png";
import profilePicture7 from "../assets/mimojis/7.png";
import profilePicture8 from "../assets/mimojis/8.png";
import profilePicture9 from "../assets/mimojis/9.png";
import facebook from "../assets/socials/icons8-facebook-480.png";
import github from "../assets/socials/icons8-github-480.png";
import instagram from "../assets/socials/icons8-instagram-480.png";
import linkedIn from "../assets/socials/icons8-linkedin-480.png";
import reddit from "../assets/socials/icons8-reddit-480.png";
import stackOverflow from "../assets/socials/icons8-stack-overflow-480.png";
import telegram from "../assets/socials/icons8-telegram-app-480.png";
import twitter from "../assets/socials/icons8-twitterx-480-2.png";
import whatsapp from "../assets/socials/icons8-whatsapp-480.png";
import discord from "../assets/socials/icons8-discord-480.png";

const profilePictures = [
  profilePicture1,
  profilePicture2,
  profilePicture4,
  profilePicture5,
  profilePicture6,
  profilePicture7,
  profilePicture8,
  profilePicture9,
];

const socialIcons = {
  facebook,
  github,
  instagram,
  linkedIn,
  reddit,
  stackOverflow,
  telegram,
  twitter,
  whatsapp,
  discord,
};

const AboutPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the image index in a cyclic manner
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % profilePictures.length
      );
    }, 5000); // Change the interval to 5000ms (5 seconds)

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div
      id="about"
      className="bg-black text-white flex items-center min-h-[calc(100vh-64px)] mt-16"
    >
      <div className="max-w-5xl mx-auto px-8">
        {/* Left side with image */}
        <div className="text-left mb-4">
          <img
            src={profilePictures[currentImageIndex]}
            alt="Profile"
            className="h-44 w-44 mr-4 transition-opacity duration-1000 hover:opacity-100 rounded-full"
          />
        </div>

        {/* Right side with text */}
        <div className="text-left mb-4">
          <p className="text-lg mb-2">I'm Sarvagna Kadiya</p>
          <p className="text-gray-400">
            Hello, I'm Sarvagna Kadiya, a passionate full stack blockchain
            developer. I specialize in creating decentralized applications and
            smart contracts. With expertise in both front-end and back-end
            technologies, I bring innovative solutions to the world of
            blockchain development.
          </p>
        </div>

        {/* Social icons */}
        <div className="flex items-center">
          <button
            className="w-7 h-7 bg-center bg-cover rounded-full mr-2"
            style={{ backgroundImage: `url(${socialIcons.twitter})` }}
          ></button>
          <button
            className="w-7 h-7 bg-center bg-cover rounded-full mr-2"
            style={{ backgroundImage: `url(${socialIcons.linkedIn})` }}
          ></button>
          <button
            className="w-7 h-7 bg-center  bg-cover mr-2"
            style={{ backgroundImage: `url(${socialIcons.github})` }}
          ></button>
          <button
            className="w-7 h-7 bg-center  bg-cover mr-2"
            style={{ backgroundImage: `url(${socialIcons.discord})` }}
          ></button>
          <button
            className="w-7 h-7 bg-center  bg-cover mr-2"
            style={{ backgroundImage: `url(${socialIcons.facebook})` }}
          ></button>
          <button
            className="w-7 h-7 bg-center  bg-cover mr-2"
            style={{ backgroundImage: `url(${socialIcons.reddit})` }}
          ></button>
          <button
            className="w-7 h-7 bg-center  bg-cover mr-2"
            style={{ backgroundImage: `url(${socialIcons.stackOverflow})` }}
          ></button>
          <button
            className="w-7 h-7 bg-center  bg-cover mr-2"
            style={{ backgroundImage: `url(${socialIcons.whatsapp})` }}
          ></button>
          <button
            className="w-7 h-7 bg-center  bg-cover mr-2"
            style={{ backgroundImage: `url(${socialIcons.telegram})` }}
          ></button>
          <button
            className="w-7 h-7 bg-center  bg-cover mr-2"
            style={{ backgroundImage: `url(${socialIcons.instagram})` }}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
