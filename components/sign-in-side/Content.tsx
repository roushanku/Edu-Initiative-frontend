// components/Content.tsx

import React from "react";
import { SitemarkIcon } from "./CustomIcons";

const items = [
  {
    icon: "🛠️", // Placeholder icon, you can replace it with an actual SVG or image if needed
    title: "Adaptable performance",
    description:
      "Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.",
  },
  {
    icon: "🔨", // Placeholder icon
    title: "Built to last",
    description:
      "Experience unmatched durability that goes above and beyond with lasting investment.",
  },
  {
    icon: "👍", // Placeholder icon
    title: "Great user experience",
    description:
      "Integrate our product into your routine with an intuitive and easy-to-use interface.",
  },
  {
    icon: "✨", // Placeholder icon
    title: "Innovative functionality",
    description:
      "Stay ahead with features that set new standards, addressing your evolving needs better than the rest.",
  },
];

export default function Content() {
  return (
    <div className="flex flex-col items-center gap-4 max-w-xs mx-auto">
      <div className="hidden md:flex">
        <SitemarkIcon />
      </div>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-2 p-4 border rounded shadow-md"
        >
          <span className="text-2xl">{item.icon}</span>
          <div>
            <h3 className="font-medium">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
