import Image from "next/image";
import React from "react";
import Container from "./Container";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
const teamMembers = [
  {
    name: "Bonnie Green",
    role: "Senior Front-end Developer",
    image: "/about/team1.svg",
    socials: {
      facebook: "/about/facebook.svg",
      twitter: "/about/twitter.svg",
      linkedin: "/about/linkin.svg",
      instagram: "/about/instagram.svg",
    },
  },
  {
    name: "Bonnie Green",
    role: "Senior Front-end Developer",
    image: "/about/team2.svg",
    socials: {
      facebook: "/about/facebook.svg",
      twitter: "/about/twitter.svg",
      linkedin: "/about/linkin.svg",
      instagram: "/about/instagram.svg",
    },
  },
  {
    name: "Bonnie Green",
    role: "Senior Front-end Developer",
    image: "/about/team3.svg",
    socials: {
      facebook: "/about/facebook.svg",
      twitter: "/about/twitter.svg",
      linkedin: "/about/linkin.svg",
      instagram: "/about/instagram.svg",
    },
  },
  {
    name: "Bonnie Green",
    role: "Senior Front-end Developer",
    image: "/about/team4.svg",
    socials: {
      facebook: "/about/facebook.svg",
      twitter: "/about/twitter.svg",
      linkedin: "/about/linkin.svg",
      instagram: "/about/instagram.svg",
    },
  },
];

const Team = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold mb-8 text-center">Our team</h2>
        <div className="w-full flex items-center justify-ceter">
          <p className="text-gray-500 text-center mb-12">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <Image
                src={member.image}
                alt={member.name}
                width={144}
                height={144}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-500 mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="w-6 h-6">
                  <Image
                    src={member.socials.facebook}
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                </a>
                <a href="#" className="w-6 h-6">
                  <Image
                    src={member.socials.twitter}
                    alt="Twitter"
                    width={24}
                    height={24}
                  />
                </a>
                <a href="#" className="w-6 h-6">
                  <Image
                    src={member.socials.linkedin}
                    alt="LinkedIn"
                    width={24}
                    height={24}
                  />
                </a>
                <a href="#" className="w-6 h-6">
                  <Image
                    src={member.socials.instagram}
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
