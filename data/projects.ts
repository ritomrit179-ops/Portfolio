export interface TechSpec {
  label: string;
  value: string;
}

export interface ProductionSection {
  title: string;
  body: string;
}

export interface Project {
  id: string;
  title: string;
  category: "Videography" | "Unreal Engine Filmmaking";
  description: string;
  videoUrl: string;
  thumbnail?: string;
  details: string;
  tools: string[];
  year: string;
  isLocal?: boolean;
  // Extended fields for rich project pages
  subtitle?: string;
  role?: string;
  duration?: string;
  techSpecs?: TechSpec[];
  productionSections?: ProductionSection[];
  pipeline?: string[];
  highlights?: string[];
}

export const projects: Project[] = [
  {
    id: "hellfire",
    title: "HellFire",
    category: "Unreal Engine Filmmaking",
    description:
      "A real-time cinematic music video trailer built in Unreal Engine 5 — two gunslingers, guitars, and a desert landscape set the stage for a confrontation with an unknown enemy.",
    videoUrl: "/videos/Cinematic_video.mp4",
    isLocal: true,
    year: "2024",
    subtitle: "Cinematic Music Video Trailer — Unreal Engine 5",
    role: "Director · UE5 Artist · Animator",
    duration: "~6 months",

    details:
      "HellFire is a fully computer-generated cinematic music video trailer produced entirely inside Unreal Engine 5. Set in a sun-scorched western desert, it follows two gunslingers — guitars in hand, weapons at the ready — as they face down an unknown enemy. The piece is designed as a teaser for a longer narrative, establishing tone and world through atmosphere rather than plot: wide desert vistas, close-up weapon details, and a brooding musical undercurrent. Lighting is driven by Lumen global illumination with Virtual Shadow Maps and Nanite geometry. Five custom MetaHuman characters were created and rigged with Mixamo and DeepMotion motion-capture animations retargeted to the MetaHuman skeleton. The environment is built on the Rural Australia landscape pack, extended with Quixel Megascans surface materials and custom volumetric cloud setups. The full cinematic was assembled across ten Sequencer shots and rendered via Movie Render Queue at 4K.",

    techSpecs: [
      { label: "Engine", value: "Unreal Engine 5" },
      { label: "Rendering API", value: "DirectX 12 — Shader Model 6" },
      { label: "Global Illumination", value: "Lumen (Hardware Ray Tracing)" },
      { label: "Shadows", value: "Virtual Shadow Maps" },
      { label: "Geometry", value: "Nanite Virtualized Geometry" },
      { label: "Characters", value: "5 × MetaHuman" },
      { label: "Sequencer Shots", value: "10 shots" },
      { label: "Output Resolution", value: "4K — Movie Render Queue" },
      { label: "Animation Sources", value: "Mixamo + DeepMotion MoCap" },
      { label: "Environment", value: "Rural Australia + Quixel Megascans" },
      { label: "Reflection Method", value: "Lumen Reflections" },
      { label: "Post Process", value: "Custom tonemapper, lens flare, alpha output" },
    ],

    productionSections: [
      {
        title: "Characters & Animation",
        body: "Five MetaHuman characters were built in MetaHuman Creator and imported via the MetaHuman Plugin. Body animations were sourced from Mixamo and DeepMotion motion-capture sessions, then retargeted to the MetaHuman skeleton using IK Rig and IK Retargeter. Each character received custom clothing, accessories, and prop attachments — including guitars, a Marshall amp rig, firearms, and period-appropriate wardrobe.",
      },
      {
        title: "Environment & Lighting",
        body: "The base landscape uses the Rural Australia pack, dressed with Quixel Megascans foliage, rock, and ground surfaces. Sky and atmosphere are driven by a Sky Atmosphere component combined with a custom Volumetric Cloud material profile for a dramatic overcast look. All scene lighting runs through Lumen with hardware ray tracing enabled, giving accurate indirect bounce light and contact shadows without baked lightmaps.",
      },
    ],

    pipeline: [
      "MetaHuman Creator → MetaHuman Plugin import",
      "Mixamo / DeepMotion MoCap → IK Retargeter",
      "Quixel Bridge → Megascans environment dressing",
      "Level Sequencer → 10 cinematic shots",
      "Cine Camera Actors → custom lens & aperture",
      "Movie Render Queue → 4K final output",
    ],

    highlights: [
      "5 fully rigged MetaHuman characters",
      "Lumen GI with hardware ray tracing — no baked lighting",
      "10 Sequencer shots assembled in a master sequence",
      "Mixamo + DeepMotion MoCap retargeted to MetaHuman",
      "Rural Australia landscape + Megascans environment",
      "DX12 SM6 — Nanite, Virtual Shadow Maps, TSR",
    ],

    productionSections: [
      {
        title: "Characters & Animation",
        body: "Five MetaHuman characters were built in MetaHuman Creator and imported via the MetaHuman Plugin. Body animations were sourced from Mixamo and DeepMotion motion-capture sessions, then retargeted to the MetaHuman skeleton using IK Rig and IK Retargeter. Each character received custom clothing, accessories, and prop attachments — including guitars, a Marshall amp rig, firearms, and period-appropriate wardrobe.",
      },
      {
        title: "Environment & Lighting",
        body: "The base landscape uses the Rural Australia pack, dressed with Quixel Megascans foliage, rock, and ground surfaces. Sky and atmosphere are driven by a Sky Atmosphere component combined with a custom Volumetric Cloud material profile for a dramatic overcast look. All scene lighting runs through Lumen with hardware ray tracing enabled, giving accurate indirect bounce light and contact shadows without baked lightmaps.",
      },
      {
        title: "Cinematography & Sequencer",
        body: "The film is structured across ten Level Sequences — covering the entry shot, performance scenes, action beats, and a closing scene. Camera work uses Cine Camera Actors with custom focal lengths and aperture settings to simulate a shallow depth-of-field film look. Camera shake assets were applied to action sequences for a handheld feel. All sequences are assembled in a master sequence for final render.",
      },
      {
        title: "Rendering & Output",
        body: "Final frames were rendered through Movie Render Queue with anti-aliasing set to Temporal Super Resolution. Post-process volume settings include a custom tonemapper sharpen pass, lens flare, and alpha channel output for compositing flexibility. The project targets DX12 SM6 for full access to Lumen ray-traced features and Nanite tessellation.",
      },
    ],

    tools: [
      "Unreal Engine 5",
      "MetaHuman Creator",
      "Quixel Megascans",
      "Mixamo",
      "DeepMotion",
      "Movie Render Queue",
      "DaVinci Resolve",
    ],
  },
  {
    id: "virtual-environment",
    title: "Virtual Environment",
    category: "Unreal Engine Filmmaking",
    description: "Architectural walkthrough produced in Unreal Engine 5",
    videoUrl: "/videos/Virtual_environment.mp4",
    isLocal: true,
    details:
      "A fully CG environment walkthrough built in UE5, using Lumen global illumination and Nanite geometry to achieve a photorealistic look rendered through Movie Render Queue.",
    tools: ["Unreal Engine 5", "Blender", "Quixel Megascans"],
    year: "2025",
  },
  {
    id: "product-visualisation",
    title: "Product Visualisation",
    category: "Unreal Engine Filmmaking",
    description: "High-end product showcase with dynamic camera movements",
    videoUrl: "/videos/Product_visualisation.MP4",
    isLocal: true,
    details:
      "Commercial product showcase featuring controlled studio lighting, macro-style camera work, and precision color grading.",
    tools: ["DaVinci Resolve", "After Effects"],
    year: "2025",
  },
];
