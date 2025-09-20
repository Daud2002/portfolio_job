"use client";
import { motion } from "framer-motion";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Vue.js", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML/CSS", level: 95 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "SQL", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 80 },
        { name: "REST APIs", level: 92 }
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
        { name: "React Query", level: 90 },
        { name: "Git", level: 90 },
        { name: "Docker", level: 85 },
        { name: "AWS", level: 70 },
        { name: "Figma", level: 85 },
        { name: "Beekeeper", level: 100 }
      ]
    }
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl text-[#0ff]">Skills & Expertise</h1>
        <p className="text-foreground-light mb-8 sm:mb-12 text-base sm:text-lg text-[#0ff]/20">
          I have experience working with a variety of technologies and tools. Here&apos;s a breakdown of my skill levels:
        </p>

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-[#0ff]/0.5 border border-border rounded-lg p-6">
              <h2 className="text-xl mb-6 text-[#0ff]">{category.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#0ff]">{skill.name}</span>
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