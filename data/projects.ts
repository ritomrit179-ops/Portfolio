export interface Project {
  id: string;
  title: string;
  category: "Videography" | "Unreal Rendering";
  description: string;
  videoUrl: string;
  thumbnail?: string;
  details: string;
  tools: string[];
  year: string;
  isLocal?: boolean;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Cinematic Short Video",
    category: "Videography",
    description: "A narrative-driven short film exploring urban landscapes",
    videoUrl: "/videos/Cinematic_video.mp4",
    isLocal: true,
    details: "This project showcases advanced cinematography techniques including drone footage, gimbal work, and color grading.",
    tools: ["Sony A7S III", "DJI Ronin", "DaVinci Resolve"],
    year: "2026"
  },
  {
    id: "project-2",
    title: "Virtual Environment",
    category: "Unreal Rendering",
    description: "Real-time architectural walkthrough in Unreal Engine 5",
    videoUrl: "/videos/Virtual_environment.mp4",
    isLocal: true,
    details: "Photorealistic rendering using Lumen and Nanite technology for real-time visualization.",
    tools: ["Unreal Engine 5", "Blender", "Quixel Megascans"],
    year: "2026"
  },
  {
    id: "project-3",
    title: "Product Showcase",
    category: "Videography",
    description: "High-end product showcase with dynamic camera movements",
    videoUrl: "/videos/Product_visualisation.MP4",
    isLocal: true,
    details: "Commercial work featuring macro photography and studio lighting setups.",
    tools: ["Canon R5", "Slider", "Premiere Pro"],
    year: "2025"
  }
];
