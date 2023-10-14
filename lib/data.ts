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
    name: "Projects",
    hash: "#projects",
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
    title: "Freelance Front-End Developer",
    location: "Montreal, Canada",
    description:
      "I'm now a front-end developer. My stack includes React, Next.js, TypeScript, Tailwind, and I'm learning MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "PokeMon Team Builder app",
    description:
      "Honed my basic React skills by creating an app which uses the PokeAPI.",
    tags: ["React", "Tailwind", "Framer Motion"],
    imageUrl: pokemonteambuilder,
  },
  {
    title: "Short Story Submission Tracker",
    description:
      "An App I designed for writers to track their work, integrated with Firebase for authentication and storage.",
    tags: ["React", "Tailwind", "Firebase", "Framer Motion"],
    imageUrl: storyTracker,
  },
  {
    title: "TTIOT - The Truth Is Out There",
    description:
      "A news and discussion website for extraterrestrial enthusiasts. Registered and annoymous users can post and comment on articles.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer Motion"],
    imageUrl: TTIOT,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Framer Motion",
] as const;