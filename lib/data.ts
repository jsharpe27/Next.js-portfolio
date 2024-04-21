import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import pokemonteambuilder from "@/public/pokemonteambuilder.png";
import TTIOT from "@/public/TTIOT.png";
import storyTracker from "@/public/storyTracker.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "QA and Technical Support Analyst",
    location: "Montreal, Canada",
    description:
      "I worked as a front-line tech support and later in a part-time QA role, learning about software dev and testing and Agile methodologies.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2023",
  },
  {
    title: "Scrimba Bootcamp",
    location: "Online",
    description:
      "I completed the Scrimba Front-End Developer Career Path.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "QA web tester",
    location: "Montréal, Canada",
    description:
      "I'm a QA web tester. My skillset includes: Cypress, Postman, and manual testing. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Cypress",
  "Postman",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Framer Motion",
] as const;