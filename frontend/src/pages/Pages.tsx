import React from "react";
import { motion } from "framer-motion";
import { FeatureCard } from "../components/FeatureCard";
import {
  FileText,
  Brain,
  Bot,
  Timer,
  LineChart,
  Folder,
  Map,
  Target,
  Microscope
} from "lucide-react";

const ALL_FEATURES = [
  { icon: FileText, title: "Multi-Level Notes", description: "ELI10 for beginners, Grade Level for standard study, Advanced for deeper understanding." },
  { icon: Brain, title: "AI Quiz Generator", description: "AI generates MCQs, short answers and challenge problems." },
  { icon: Bot, title: "Instant AI Feedback", description: "Get score, mistake analysis and corrections instantly." },
  { icon: Timer, title: "Response Time Tracking", description: "Track how long you spend solving questions." },
  { icon: LineChart, title: "Accuracy Trends", description: "Visualize your learning improvement." },
  { icon: Folder, title: "Session History", description: "Every learning session is logged." },
  { icon: Map, title: "Topic Mastery Map", description: "Know which topics you mastered." },
  { icon: Target, title: "Career Hint Generator", description: "Discover careers matching your strengths." },
  { icon: Microscope, title: "Advanced Tutor Mode", description: "Personalized explanations and study plans." }
];

export function FeaturesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-12">
          <h1 className="text-4xl mb-3">Features</h1>
          <p className="text-gray-500">AI powered learning tools.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ALL_FEATURES.map((f, i) => (
            <FeatureCard
              key={i}
              icon={f.icon}
              title={f.title}
              description={f.description}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export function HowItWorksPage() {
  const steps = [
    { title: "Enter Topic", desc: "Type the topic you want to study." },
    { title: "Choose Level", desc: "ELI10, Grade Level or Advanced." },
    { title: "Generate Notes", desc: "AI creates structured notes." },
    { title: "Take Quiz", desc: "AI generated questions." },
    { title: "Get Feedback", desc: "Instant analysis of mistakes." },
    { title: "Track Progress", desc: "Your learning gets recorded." }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl mb-3">How It Works</h1>
        </div>

        <div className="space-y-4">
          {steps.map((step, i) => (
            <div key={i} className="p-6 border rounded-xl">
              <h3 className="font-semibold">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export function AboutPage() {
  const team = [
    { name: "Abhigya Chand Singh", role: "Full Stack Developer" },
    { name: "Abhay Chaudhary", role: "AI/ML Engineer" },
    { name: "Aryan Sharma", role: "UI/UX Designer" },
    { name: "Abhinav Pratap Singh", role: "Backend Engineer" }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl mb-3">About</h1>
          <p className="text-gray-500">Student AI learning project.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {team.map((member, i) => (
            <div key={i} className="p-6 border rounded-xl">
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export function ContactPage() {
  const members = [
    "Abhigya Chand Singh",
    "Abhay Chaudhary",
    "Aryan Sharma",
    "Abhinav Pratap Singh"
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-2xl mx-auto">

        <div className="text-center mb-10">
          <h1 className="text-4xl mb-3">Contact</h1>
        </div>

        <div className="space-y-3">
          {members.map((name, i) => (
            <div key={i} className="flex justify-between border p-3 rounded-lg">
              <span>{name}</span>
              <span className="text-sm text-gray-500">GitHub / LinkedIn</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}