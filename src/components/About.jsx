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
import salesforce from "../assets/socials/icon8-salesforce-480.png"
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
  salesforce: {
    icon: salesforce,
    url: "https://www.salesforce.com/trailblazer/dhruvpatel012",
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
  }
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
    <>
      {/* Fixed background elements */}
      <div className="fixed inset-0 bg-black -z-20" />
      <div className="fixed inset-0 bg-gradient-to-br from-black-900/20 via-black to-blue-900/20 -z-10" />

      {/* Animated gradient orbs */}
      <div className="fixed top-1/3 -right-48 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="fixed bottom-1/4 -left-24 w-72 h-72 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse -z-10" />
      <div id="about" className="relative min-h-screen py-16 flex items-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 w-full">
          {/* Profile Image animation */}
          <div className="mb-8 relative group">
            <img
              src={profilePictures[currentImageIndex]}
              alt="Profile"
              className="relative h-44 w-44 rounded-full transition-all duration-700 group-hover:scale-105"
            />
          </div>

          {/* About text Content */}
          <div className="text-left mb-8">
            <h1 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-100 to-blue-400 bg-clip-text text-transparent">
              I'm Dhruv Patel
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              A Graduate computer science student with 1+ years of professional
              experience developing application.
              Expertise in database management, Back-end & Front-end technologies and web development (HTML 5, CSS, JavaScript).
              Experience building software solutions in a collaborative environment with version control(Github).

            </p>
          </div>

          {/* Social icons */}
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2">
            {Object.entries(socialLinks).map(([platform, { icon, url }]) => (
              <button
                key={platform}
                onClick={() => handleRedirect(url)}
                className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300" />
                <div
                  className="relative w-8 h-8 bg-center bg-cover transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{ backgroundImage: `url(${icon})` }}

                /></button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
