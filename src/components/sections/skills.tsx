"use client";

import { useMemo, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { SectionHeading } from "@/components/ui/section-heading";
import * as THREE from "three";

export const skillsList = [
  { name: "React.js", image: "/skills/react.png" },
  { name: "Next.js", image: "/skills/nextjs.png" },
  { name: "TypeScript", image: "/skills/typescript.png" },
  { name: "JavaScript", image: "/skills/javascript.png" },
  { name: "Node.js", image: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Express.js", image: "https://cdn.simpleicons.org/express/000000" },
  { name: "MongoDB", image: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "PostgreSQL", image: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "Tailwind CSS", image: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Framer Motion", image: "https://cdn.simpleicons.org/framer/0055FF" },
  { name: "Python", image: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Git", image: "/skills/git.png" },
  { name: "GitHub", image: "https://cdn.simpleicons.org/github/181717" },
  { name: "Vercel", image: "https://cdn.simpleicons.org/vercel/000000" },
  { name: "HTML5", image: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS3", image: "https://cdn.simpleicons.org/css3/1572B6" },
  { name: "Java", image: "https://cdn.simpleicons.org/openjdk/437291" },
  { name: "C++", image: "https://cdn.simpleicons.org/cplusplus/00599C" },
  { name: "C", image: "https://cdn.simpleicons.org/c/A8B9CC" },
  { name: "Docker", image: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Linux", image: "https://cdn.simpleicons.org/linux/FCC624" },
  { name: "Firebase", image: "https://cdn.simpleicons.org/firebase/FFCA28" },
  { name: "Figma", image: "https://cdn.simpleicons.org/figma/F24E1E" },
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
      
      // Radius of the sphere is reduced to 4.5 for a tighter cluster
      pts.push(new THREE.Vector3(x * 4.5, y * 4.5, z * 4.5)); 
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
      distanceFactor={22} // Increased dramatically so the logos appear much larger in 3D space
      zIndexRange={[100, 0]}
    >
      <div 
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative group cursor-pointer transition-transform duration-300"
        style={{ transform: hovered ? 'scale(1.2)' : 'scale(1)' }}
      >
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-[var(--color-card-mint)] p-0">
          <img src={skill.image} alt={skill.name} className="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-sm" />
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
