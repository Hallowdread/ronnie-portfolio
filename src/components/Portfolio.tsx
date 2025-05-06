import React, { useState } from "react";
import eventVideoOne from "../assets/Events/event-one-vid.mp4";
import eventVideoTwo from "../assets/Events/event-two-vid.mp4";
import fashionImgOne from "../assets/Fashion/fashion-img-one.jpg";
import fashionImgTwo from "../assets/Fashion/fashion-img-two.jpg";
import fashionVidOne from "../assets/Fashion/fashion-video-one.mp4";
import fashionVidTwo from "../assets/Fashion/fashion-video-two.mp4";
import fashionVidThree from "../assets/Fashion/fashion-video-three.mp4";
import fashionVidFour from "../assets/Fashion/fashion-video-four.mp4";
import foodImgOne from "../assets/Food & Resturants/food-img-one.jpg";
import foodImgTwo from "../assets/Food & Resturants/food-img-two.jpg";
import foodImgThree from "../assets/Food & Resturants/food-img-three.jpg";
import foodImgFour from "../assets/Food & Resturants/food-img-four.jpg";
import foodImgFive from "../assets/Food & Resturants/food-img-five.jpg";
import foodVidOne from "../assets/Food & Resturants/food-video-one.mp4";
import foodVidTwo from "../assets/Food & Resturants/food-video-two.mp4";

const categories = ["All", "Fashion", "Events", "Food & Resturants"];

const projects = [
  {
    id: 1,
    title: "Delicious Cuisine Showcase",
    category: "Food & Resturants",
    image: foodImgThree,
  },
  {
    id: 2,
    title: "Fashion Highlights",
    category: "Fashion",
    video: fashionVidOne,
  },
  {
    id: 3,
    title: "Gourmet Dish Presentation",
    category: "Food & Resturants",
    image: foodImgOne,
  },
  {
    id: 4,
    title: "Elegant Fashion Trends",
    category: "Fashion",
    video: fashionVidFour,
  },
  {
    id: 5,
    title: "Tasty Treats Display",
    category: "Food & Resturants",
    image: foodImgTwo,
  },
  {
    id: 6,
    title: "Restaurant Ambiance",
    category: "Food & Resturants",
    image: foodImgFour,
  },
  {
    id: 7,
    title: "Modern Fashion Styles",
    category: "Fashion",
    video: fashionVidThree,
  },
  {
    id: 8,
    title: "Classic Fashion Looks",
    category: "Fashion",
    image: fashionImgOne,
  },
  {
    id: 9,
    title: "Exquisite Dining Experience",
    category: "Food & Resturants",
    image: foodImgFive,
  },
  {
    id: 10,
    title: "Chic Fashion Showcase",
    category: "Fashion",
    video: fashionVidTwo,
  },
  {
    id: 11,
    title: "Event Highlights Reel",
    category: "Events",
    video: eventVideoOne,
  },
  {
    id: 12,
    title: "Memorable Event Moments",
    category: "Events",
    video: eventVideoTwo,
  },
  {
    id: 13,
    title: "Stylish Fashion Portraits",
    category: "Fashion",
    image: fashionImgTwo,
  },
  {
    id: 14,
    title: "Culinary Creations",
    category: "Food & Resturants",
    video: foodVidOne,
  },
  {
    id: 15,
    title: "Delightful Food Journey",
    category: "Food & Resturants",
    video: foodVidTwo,
  },
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            My Portfolio
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore a selection of my recent projects that showcase my skills in
            social media management, content creation, and graphic design.
          </p>
        </div>

        {/* Portfolio Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden rounded-lg shadow-md group"
              onMouseEnter={() => setHoveredItem(project.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : project.video ? (
                <video
                  src={project.video}
                  controls
                  className="w-full h-64 object-cover "
                />
              ) : null}

              {/* Render gradient overlay only for images */}
              {project.image && (
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-orange-900/90 to-orange-500/70 flex flex-col justify-end p-6 transition-opacity duration-300 ${
                    hoveredItem === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-orange-100">{project.category}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
