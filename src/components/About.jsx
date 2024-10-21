import React, { useState, useEffect } from "react";
import profilePicture1 from "../assets/mimojis/1.png";
import profilePicture2 from "../assets/mimojis/2.png";
import profilePicture3 from "../assets/mimojis/4.png";
import profilePicture4 from "../assets/mimojis/5.png";
import profilePicture5 from "../assets/mimojis/6.png";
import profilePicture6 from "../assets/mimojis/7.png";
import profilePicture7 from "../assets/mimojis/8.png";
import profilePicture8 from "../assets/mimojis/9.png";
//import facebook from "../assets/socials/icons8-facebook-480.png";
import github from "../assets/socials/icons8-github-480.png";
import instagram from "../assets/socials/icons8-instagram-480.png";
import linkedIn from "../assets/socials/icons8-linkedin-480.png";
import reddit from "../assets/socials/icons8-reddit-480.png";
import stackOverflow from "../assets/socials/icons8-stack-overflow-480.png";
import telegram from "../assets/socials/icons8-telegram-app-480.png";
import twitter from "../assets/socials/icons8-twitterx-480-2.png";
import discord from "../assets/socials/icons8-discord-480.png";
// import socialLinks from "../data/socialLinks.json";

const profilePictures = [
  profilePicture1,
  profilePicture2,
  profilePicture3,
  profilePicture4,
  profilePicture5,
  profilePicture6,
  profilePicture7,
  profilePicture8,
];

// const socialIcons = {
//   facebook,
//   linkedIn,
//   github,
//   instagram,
//   reddit,
//   stackOverflow,
//   telegram,
//   twitter,
//   discord,
// };

const socialLinks = {
 /* facebook: {
    icon: facebook,
    url: "https://www.facebook.com/sarvagnakadiya",
  },*/
  linkedIn: {
    icon: linkedIn,
    url: "https://www.linkedin.com/in/dhruv-j-patel1205/",
  },
  github: {
    icon: github,
    url: "https://github.com/dhruvpatel1205",
  },
  instagram: {
    icon: instagram,
    url: "https://www.instagram.com/dhruv.__.patel/",
  },
  reddit: {
    icon: reddit,
    url: "https://www.reddit.com/user/dhruvolt/",
  },
  stackOverflow: {
    icon: stackOverflow,
    url: "https://stackoverflow.com/users/23941287/dhruv-patel",
  },
  telegram: {
    icon: telegram,
    url: "https://t.me/+15513449034",
  },
  twitter: {
    icon: twitter,
    url: "https://twitter.com/DHRUVJ12P",
  },
  discord: {
    icon: discord,
    url: "https://discordapp.com/users/volt_012",
  },
};

const AboutPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  //   console.log(socialLinks);

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };
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
      className="bg-black text-white flex items-center min-h-screen py-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8 w-full">
        {/* Left side with image */}
        <div className="mb-4">
          <img
            src={profilePictures[currentImageIndex]}
            alt="Profile"
            className="h-44 w-44 mr-4 transition-opacity duration-1000 hover:opacity-100"
          />
        </div>

        {/* Right side with text */}
        <div className="text-left mb-4 px-auto">
          <p className="text-lg mb-2 pl-4">I'm Dhruv Patel</p>
          <p className="text-blue-200 pl-4">
            Hi, I am a Graduate computer science student with 1+ years of professional 
            experience developing Salesforce application. 
            Expertise in database management, Back-end & Front-end technologies and web development (HTML 5, CSS, JavaScript). 
            Experience building software solutions in a collaborative environment with version control(Github).

          </p>
        </div>

        {/* Social icons */}
        <div className="flex justify-center sm:justify-start items-center mt-4 pl-3">
          {Object.entries(socialLinks).map(([platform, { icon, url }]) => (
            <button
              key={platform}
              className="w-7 h-7 bg-center bg-cover mr-2 transform transition-transform hover:rotate-custom9"
              style={{ backgroundImage: `url(${icon})` }}
              onClick={() => handleRedirect(url)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
