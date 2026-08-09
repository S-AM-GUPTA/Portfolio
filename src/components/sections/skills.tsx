"use client";

import { useMemo, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { SectionHeading } from "@/components/ui/section-heading";
import * as THREE from "three";

export const skillsList = [
  { name: "React.js", image: "/skills/react.png", color: "bg-[var(--color-card-mint)]" },
  { name: "Next.js", image: "/skills/nextjs.png", color: "bg-white" },
  { name: "TypeScript", image: "/skills/typescript.png", color: "bg-[var(--color-sea-foam)]" },
  { name: "JavaScript", image: "/skills/javascript.png", color: "bg-[var(--color-blush-sand)]" },
  { name: "Node.js", image: "https://cdn.simpleicons.org/nodedotjs/339933", color: "bg-[var(--color-card-mint)]" },
  { name: "Express.js", image: "https://cdn.simpleicons.org/express/000000", color: "bg-white" },
  { name: "MongoDB", image: "https://cdn.simpleicons.org/mongodb/47A248", color: "bg-[var(--color-sea-foam)]" },
  { name: "PostgreSQL", image: "https://cdn.simpleicons.org/postgresql/4169E1", color: "bg-[var(--color-card-mint)]" },
  { name: "Tailwind CSS", image: "https://cdn.simpleicons.org/tailwindcss/06B6D4", color: "bg-[var(--color-blush-sand)]" },
  { name: "Framer Motion", image: "https://cdn.simpleicons.org/framer/0055FF", color: "bg-[var(--color-sea-foam)]" },
  { name: "Python", image: "https://cdn.simpleicons.org/python/3776AB", color: "bg-white" },
  { name: "Git", image: "/skills/git.png", color: "bg-[var(--color-card-mint)]" },
  { name: "Vercel", image: "https://cdn.simpleicons.org/vercel/000000", color: "bg-[var(--color-blush-sand)]" },
];

function SkillCloud() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Distribute points evenly on a sphere using the Fibonacci sphere algorithm
  const points = useMemo(() => {
    const pts = [];
    const numPoints = skillsList.length;
    const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle
    
    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2; // y goes from 1 to -1
      const radius = Math.sqrt(1 - y * y); // radius at y
      
      const theta = phi * i; // golden angle increment
      
      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;
      
      pts.push(new THREE.Vector3(x * 6, y * 6, z * 6)); // Scale the sphere radius to 6
    }
    return pts;
  }, []);

  return (
    <group ref={groupRef}>
      {skillsList.map((skill, i) => (
        <SkillLogo key={skill.name} skill={skill} position={points[i]} />
      ))}
    </group>
  );
}

function SkillLogo({ skill, position }: { skill: typeof skillsList[0], position: THREE.Vector3 }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <Html 
      position={position} 
      center 
      distanceFactor={15} // Makes the HTML elements scale with 3D depth
      zIndexRange={[100, 0]}
    >
      <div 
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative group cursor-pointer transition-transform duration-300"
        style={{ transform: hovered ? 'scale(1.2)' : 'scale(1)' }}
      >
        <div className={`w-16 h-16 rounded-full ${skill.color} shadow-lg flex items-center justify-center overflow-hidden border-2 border-[var(--color-paper-white)] p-3`}>
          <img src={skill.image} alt={skill.name} className="w-full h-full object-contain" />
        </div>
        
        {/* Tooltip */}
        <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-[var(--color-charcoal-navy)] text-white text-[12px] font-[500] rounded-[8px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}>
          {skill.name}
        </div>
      </div>
    </Html>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 bg-transparent flex flex-col items-center justify-center overflow-hidden">
      
      {/* Title placed statically over the 3D canvas */}
      <div className="container mx-auto px-6 md:px-12 relative z-20 pointer-events-none mb-0">
        <SectionHeading 
          title="Technical Arsenal" 
          subtitle="An interactive 3D constellation of my technological proficiency. Grab and spin to explore."
          centered
        />
      </div>

      {/* The 3D Interactive Canvas */}
      <div className="relative w-full h-[450px] lg:h-[600px] z-10 pointer-events-none md:pointer-events-auto md:cursor-grab md:active:cursor-grabbing -mt-12">
        <Canvas camera={{ position: [0, 0, 16], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <SkillCloud />
          <OrbitControls 
            enablePan={false} 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={1.5} // Smooth automatic rotation
          />
        </Canvas>
      </div>
    </section>
  );
}
