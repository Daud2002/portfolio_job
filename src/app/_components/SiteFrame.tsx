'use client'

import { useState } from 'react'
import { NavbarState, type TabKey } from './NavbarState'
import { AnimatePresence, motion } from 'framer-motion'
import { Modal } from './Modal'
import { Carousel } from './Carousel'
import { Mail, Phone, MapPin, Send, ExternalLink } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Card } from '../../components/ui/card';
import agh1 from "../../assets/agh/agh_1.png"
import agh2 from "../../assets/agh/agh_2.png"
import agh3 from "../../assets/agh/agh_3.png"
import agh_db_1 from "../../assets/agh/db_1.png"
import agh_db_2 from "../../assets/agh/db_2.png"
import agh_db_3 from "../../assets/agh/db_3.png"
import main from "../../assets/agh/main.png"
import sms_1 from "../../assets/sms/sms_1.png"
import sms_2 from "../../assets/sms/sms_2.png"
import sms_3 from "../../assets/sms/sms_3.png"
import sms_4 from "../../assets/sms/sms_4.png"
import sms_5 from "../../assets/sms/sms_5.png"
import sms_6 from "../../assets/sms/sms_6.png"
import sms_7 from "../../assets/sms/sms_7.png"
import sms_8 from "../../assets/sms/sms_8.png"
import sms_9 from "../../assets/sms/sms_9.png"
import sms_10 from "../../assets/sms/sms_10.png"
import sms_11 from "../../assets/sms/sms_11.png"
import link_bot from "../../assets/bot/bot.png"
import sai_1 from "../../assets/sanoteai/Sanote_ai_1.png"
import sai_2 from "../../assets/sanoteai/sanote_ai_2.png"
import sai_3 from "../../assets/sanoteai/sanote_ai_3.png"
import baby_1 from "../../assets/baby/baby-1.png"
import baby_2 from "../../assets/baby/baby-2.png"
import tnt_1 from "../../assets/tapntrade/tapntrade-1.png"
import tnt_2 from "../../assets/tapntrade/tapntrade-2.png"
import tnt_3 from "../../assets/tapntrade/tapntrade-3.png"
import tnt_4 from "../../assets/tapntrade/tapntrade-4.png"
import tnt_5 from "../../assets/tapntrade/tapntrade-5.png"
import tnt_6 from "../../assets/tapntrade/tapntrade-6.png"


function PortfolioSection() {
  const projects: Array<{ name: string; description: string; stacks: string[]; images: string[] }> = [
    // {
    //   name: 'Sanote AI',
    //   description: `Sanote AI is build to assist the medical student for helping in their exams, Major focus of this deliverable is to save the student's time, Focus on what actually matters and Learn the smart way, not the hard way.`,
    //   stacks: ['Next.js', 'Express.js', 'PostgreSQL', 'OpenAi'],
    //   images: [
    //     sai_1.src,
    //     sai_2.src,
    //     sai_3.src,
    //   ],
    // },
    {
      name: 'Agh Labs',
      description: 'A healthcare platform built with strict HIPAA compliance, ensuring secure handling of sensitive medical data. I developed both the frontend in React and the backend with Express, integrating OpenAI to provide prompt, intelligent responses. The system delivers a secure, reliable, and user-friendly experience tailored for medical professionals in the US.',
      stacks: ['React.js', 'Express.js', 'MongoDb', 'OpenAi', 'HIPAA compliance'],
      images: [
        agh1.src,
        agh2.src,
        agh3.src,
        agh_db_1.src,
        agh_db_2.src,
        agh_db_3.src,
        main.src,
      ],
    },
    {
      name: 'TapNtrade',
      description: '',
      stacks: ['React.js', 'Next.js', 'Postgresql', 'AWS EC2'],
      images: [
        tnt_1.src,
        tnt_2.src,
        tnt_3.src,
        tnt_4.src,
        tnt_5.src,
        tnt_6.src
      ],
    },
    {
      name: 'Society Management System',
      description: 'A complete society management platform for handling residents, houses, expenses, fees, and servants. I built the system with automated arrear and payment generation using cron jobs and implemented role-based access for admins and residents, ensuring transparent and secure financial tracking.',
      stacks: ['Next.js', 'Nest.js', 'React Query', 'Cron jobs', 'PostgreSQL'],
      images: [
        sms_1.src,
        sms_2.src,
        sms_3.src,
        sms_4.src,
        sms_5.src,
        sms_6.src,
        sms_7.src,
        sms_8.src,
        sms_9.src,
        sms_10.src,
        sms_11.src
      ],
    },
    {
      name: 'Kinder Cart',
      description: 'KinderCart is a smart price comparison web app that helps parents find the best deals on baby products across major retailers like Amazon, Walmart, and Target. It uses real-time data via SERP API and a Supabase-powered backend to deliver fast, accurate comparisons in a clean, user-friendly interface, enabling users to quickly explore options, compare prices, and make informed buying decisions with a focus on performance and scalability.',
      stacks: ['React.js', 'Supabase', 'Serp Api'],
      images: [
        baby_1.src,
        baby_2.src,
      ],
    },
    {
      name: 'Link & voice message detector bot',
      description: 'An intelligent moderation bot for large communities that automatically detects and removes voice messages and links. It issues two warnings immediately to violators and removes them on the third offense. The bot is currently managing 6 groups with 1000+ members each, ensuring a safe, spam-free, and well-organized chat environment.',
      stacks: ['Whatsapp-web', 'Puppeteer', 'node.js'],
      images: [
        link_bot.src
      ],
    }
  ]

  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {projects.map((p, i) => (
          <button
            key={p.name}
            onClick={() => setOpenIdx(i)}
            className="group relative overflow-hidden rounded-xl border border-[#0ff]/50 bg-[#001414] p-4 cursor-pointer transition-colors hover:border-[#0ff]/60 text-left"
          >
            <div className="cursor-pointer absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(0,255,255,0.08), transparent 40%)' }} />
            <div className="aspect-[16/10] w-full overflow-hidden rounded-lg ring-1 ring-inset ring-[#0ff]/60 bg-black/30 relative">
              <img src={p.images[0]} alt={p.name} className="h-full w-full object-fit opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/75 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm uppercase tracking-wider text-[#0ff] font-bold flex flex-row items-center gap-3">View images <ExternalLink /></span>
              </div>
            </div>
            <div className="mt-4 flex items-start justify-between gap-2">
              <h3 className="font-semibold text-[15px] leading-tight text-[#0ff]">{p.name}</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stacks.map((s) => (
                <span key={s} className="px-2 py-1 rounded-full text-[12px] bg-[#0ff]/10 text-[#0ff] border border-[#0ff]/20 transition-colors group-hover:bg-[#0ff]/20">
                  {s}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>

      <Modal open={openIdx !== null} onClose={() => setOpenIdx(null)} ariaLabel={openIdx !== null ? projects[openIdx].name : 'Project gallery'}>
        {openIdx !== null && (
          <div className="p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-[#0ff]">{projects[openIdx].name}</h3>
            <p className="mt-1 text-xs text-[#0ff]/50">{projects[openIdx].stacks.join(' · ')}</p>
            <div className="mt-4">
              <Carousel images={projects[openIdx].images} />
            </div>
            <p className="my-5 text-sm text-neutral-400">{projects[openIdx].description}</p>
          </div>
        )}
      </Modal>
    </section>
  )
}

function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "1ce65669-805d-4ca9-aa9c-4cc1a03eab19", // replace with your real key
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-10">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-4 sm:p-6 bg-[#0ff]/5 border border-[#0ff]/80">
              <h2 className="text-lg sm:text-xl mb-2 sm:mb-4 text-[#0ff]">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="bg-[#0ff]/10 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#0ff]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#0ff]/40">Email</p>
                    <p className="text-[#0ff]">dev.daudmir@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="bg-[#0ff]/10 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#0ff]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#0ff]/40">Phone</p>
                    <p className="text-[#0ff]">+92309 7119974</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="bg-[#0ff]/10 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#0ff]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#0ff]/40">Location</p>
                    <p className="text-[#0ff]">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 bg-[#0ff]/5 border border-[#0ff]/80">
              <h3 className="text-[#0ff] sm:text-lg mb-2">Why Choose Me?</h3>
              <div className="space-y-3">
                {[
                  "1.5+ years of professional experience",
                  "Full-stack development expertise",
                  "Agile development methodologies",
                  "Strong communication skills",
                  "Problem-solving mindset",
                ].map((item) => (
                  <div className="flex items-center gap-3" key={item}>
                    <div className="w-2 h-2 bg-[#0ff] rounded-full"></div>
                    <span className="text-sm text-[#0ff]/70">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-4 sm:p-6 bg-[#0ff]/5 border border-[#0ff]/80">
            <h2 className="text-lg sm:text-xl mb-2 sm:mb-4 text-[#0ff]">
              Send a Message
            </h2>
            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm mb-2 text-[#0ff]/80"
                  >
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm mb-2 text-[#0ff]/80"
                  >
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm mb-2 text-[#0ff]/80"
                >
                  Email
                </label>
                <Input
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  type="email"
                  placeholder="john@example.com"
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm mb-2 text-[#0ff]/80"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project Inquiry"
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm mb-2 text-[#0ff]/80"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[#0ff]/30 text-[#0ff] hover:bg-[#0ff]/40 cursor-pointer"
              >
                <Send className="w-4 h-4 mr-2" />
                {status === "loading"
                  ? "Sending..."
                  : status === "success"
                    ? "Sent!"
                    : "Send Message"}
              </Button>

              {status === "error" && (
                <p className="text-red-500 text-sm mt-2">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}

function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "ShadCN UI", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Supabase", level: 90 },
        { name: "Express.js", level: 90 },
        { name: "Nest.js", level: 85 },
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 80 },
      ]
    },
        {
      title: "Cloud Technologies",
      skills: [
        { name: "AWS EC2", level: 90 },
        { name: "AWS S3", level: 90 },
        { name: "AWS Bedrock", level: 80 }
      ]
    },
    {
      title: "State Management",
      skills: [
        { name: "Redux", level: 90 },
        { name: "Zustand", level: 80 },
        { name: "Context", level: 95 },
        { name: "React Hooks", level: 95 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Stripe", level: 85 },
        { name: "React Query", level: 90 },
        { name: "Git", level: 90 },
      ]
    }
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">

        <div className="space-y-12 mt-10">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-[#0ff]/5 border-[1px] border-[#0ff] rounded-lg p-6">
              <h2 className="text-xl mb-6 text-[#0ff]">{category.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#0ff]/70">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#0ff]/20 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="bg-[#0ff] h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExperienceSection() {
  const experiences = [
    {
      company: "SeveStacks",
      location: "Lahore, Pakistan",
      roles: [
        {
          role: "Associate Software Engineer",
          duration: "Dec 2024 - Present",
          description: [
            "Developed an AI-powered medical education application for students, delivering structured topic results including Overview, Key Points, Causes, Signs & Symptoms, and Diagnosis.",
            "Designed and developed a fully functional AI-powered chat test window for the admin panel of a mobile application.",
            "Developed an AI-powered smart search feature enabling users to query in natural language and receive dynamic, filter-based search results, improving search accuracy by ~80%.",
            "Delivered a HIPAA-compliant doctor's portal and admin dashboard for secure patient record management.",
            "Implemented end-to-end encryption and decryption of API responses using Supabase as the backend, reducing data breach risk by ~90% which ensures protection of sensitive user information.",
            "Integrated TanStack Query to replace manual data fetching, reducing duplicate API calls by ~80% and improving Ul responsiveness by ~30%",
            "Managed AWS EC2 deployment and maintain production server environments.",
            "Built a baby product price comparison application using SerpAPI and Supabase with real-time data retrieval",
            "Implemented end-to-end Stripe payment flow with 3 paid plans, Stripe webhooks, and a custom user credits purchase system.",
            "Maintained Git workflows including feature branching, pull requests, code reviews, and conflict resolution."
          ]
        }
      ]
    },
    {
      company: "Ahmasoft",
      location: "Lahore, Pakistan",
      roles: [
        {
          role: "Frontend Developer",
          duration: "Sep 2024 - Dec 2024",
          description: [
            "Developed and delivered 2+ production-ready web applications using React.js and NextJS within a 3-month tenure",
            "Integrated Stripe payment gateway, implementing end-to-end payment flows based on client requirements",
            "Consistently met project deadlines, contributing to on-time delivery across all assigned projects"
          ]
        },
      ]
    }
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">

        <div className="mt-10 space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-[#0ff]/5 border border-[#0ff]/20 rounded-lg p-6 transition-all duration-300 hover:border-[#0ff]/40 hover:bg-[#0ff]/10">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6">
                <h2 className="text-xl font-semibold text-[#0ff]">{exp.company}</h2>
                <p className="text-sm text-[#0ff]/60 mt-1 sm:mt-0">{exp.location}</p>
              </div>

              <div className="space-y-8">
                {exp.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="relative pl-8">
                    <div className="absolute top-1.5 -left-1.5 w-3 h-3 rounded-full bg-[#0ff] shadow-[0_0_10px_rgba(0,255,255,0.6)]"></div>
                    {roleIndex < exp.roles.length - 1 && (
                      <div className="absolute top-4 -left-0 w-px h-[165%] bg-[#0ff]/30"></div>
                    )}
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                      <h3 className="text-lg text-[#0ff]/90 font-medium">{role.role}</h3>
                      <p className="text-xs text-[#0ff]/50 mt-1 sm:mt-0">{role.duration}</p>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-[#0ff]/70">
                      {role.description.map((desc, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#0ff] mr-2 mt-1">&#8227;</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteFrame() {
  const [tab, setTab] = useState<TabKey>('portfolio')

  return (
    <div className="flex-1 w-full">
      <div className="sticky top-0 z-40 bg-[#1616166f] backdrop-blur-sm border-b border-b-gray-800">
        <div className="max-w-5xl mx-auto h-14 flex items-center px-4 sm:px-6 lg:px-8">
          <NavbarState active={tab} onChange={setTab} />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 [perspective:1200px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={tab}
            className="[transform-style:preserve-3d] will-change-transform"
            initial={{ rotateY: -90, opacity: 0, x: 30, filter: 'blur(2px)' }}
            animate={{ rotateY: 0, opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ rotateY: 90, opacity: 0, x: -30, filter: 'blur(2px)' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {tab === 'portfolio' && <PortfolioSection />}
            {tab === 'skills' && <SkillsSection />}
            {tab === 'experience' && <ExperienceSection />}
            {tab === 'contactus' && <ContactSection />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}