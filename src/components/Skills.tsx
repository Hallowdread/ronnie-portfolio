import React from 'react';

// Skill categories with their respective skills and proficiency percentages
const skillCategories = [
  {
    category: "Social Media",
    skills: [
      { name: "Strategy Development", percentage: 95 },
      { name: "Community Management", percentage: 90 },
      { name: "Platform Optimization", percentage: 85 },
      { name: "Analytics & Insights", percentage: 90 }
    ]
  },
  {
    category: "Content Creation",
    skills: [
      { name: "Copywriting", percentage: 85 },
      { name: "Video Production", percentage: 80 },
      { name: "Photography", percentage: 75 },
      { name: "Storytelling", percentage: 90 }
    ]
  },
  {
    category: "Graphic Design",
    skills: [
      { name: "Adobe Photoshop", percentage: 85 },
      { name: "Adobe Illustrator", percentage: 80 },
      { name: "Canva", percentage: 95 },
      { name: "Brand Identity", percentage: 90 }
    ]
  }
];

// Circular progress component
const CircularProgress: React.FC<{ percentage: number, name: string }> = ({ percentage, name }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full" viewBox="0 0 120 120">
          {/* Background circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#f0f0f0"
            strokeWidth="10"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#f97316"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform="rotate(-90 60 60)"
          />
          {/* Percentage text */}
          <text
            x="60"
            y="65"
            textAnchor="middle"
            fontSize="20"
            fontWeight="bold"
            fill="#333"
          >
            {percentage}%
          </text>
        </svg>
      </div>
      <p className="mt-2 font-medium text-gray-700">{name}</p>
    </div>
  );
};

// Linear progress component
const LinearProgress: React.FC<{ percentage: number, name: string }> = ({ percentage, name }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-700">{name}</span>
        <span className="text-sm text-gray-500">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-orange-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here's an overview of my professional skills and expertise across different areas.
          </p>
        </div>

        {/* Skills Display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-6 bg-orange-50 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <LinearProgress 
                    key={skillIndex} 
                    percentage={skill.percentage} 
                    name={skill.name} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Platforms */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Tools & Platforms I Specialize In
          </h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {["Instagram", "TikTok", "Facebook", "LinkedIn", "Twitter", "YouTube", 
              "Canva", "Adobe Creative Suite", "Hootsuite", "Buffer", "Sprout Social", "Later"].map((tool, index) => (
              <div 
                key={index} 
                className="px-6 py-3 bg-white border border-orange-200 rounded-full text-gray-700 shadow-sm hover:bg-orange-100 transition-colors"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;