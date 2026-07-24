"use client";

import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { SectionHeading } from "@/components/ui/section-heading";
import * as THREE from "three";

const ALL_SKILLS = [
  "JavaScript", "TypeScript", "Python", "C", "React.js", "HTML5", "CSS3",
  "Tailwind CSS", "Redux", "Node.js", "Express.js", "REST APIs", "JWT", "Socket.io",
  "MongoDB", "MySQL", "Firebase", "Git", "GitHub", "Docker", "Postman", "VS Code",
  "Render", "Vercel", "Data Structures", "Algorithms", "OOP", "DBMS", "Networks", "Auth"
];

function SkillCloud() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Distribute points evenly on a sphere using the Fibonacci sphere algorithm
  const points = useMemo(() => {
    const pts = [];
    const numPoints = ALL_SKILLS.length;
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
      {ALL_SKILLS.map((skill, i) => (
        <SkillNode key={skill} skill={skill} position={points[i]} />
      ))}
    </group>
  );
}

function SkillNode({ skill, position }: { skill: string, position: THREE.Vector3 }) {
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
        className={`px-4 py-2 rounded-full backdrop-blur-md border font-bold whitespace-nowrap shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 cursor-grab active:cursor-grabbing
          ${hovered 
            ? 'bg-white text-black border-white scale-125 shadow-[0_0_30px_rgba(255,255,255,0.5)] z-50' 
            : 'bg-black/40 text-white/80 border-white/20 hover:text-white'}
        `}
      >
        {skill}
      </div>
    </Html>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-8 relative z-10 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Title placed statically over the 3D canvas */}
      <div className="container mx-auto px-6 md:px-12 relative z-20 pointer-events-none mb-0">
        <SectionHeading 
          title="Technical Arsenal" 
          subtitle="An interactive 3D constellation of my technological proficiency. Grab and spin to explore."
        />
      </div>

      {/* The 3D Interactive Canvas */}
      <div className="relative w-full h-[400px] lg:h-[500px] z-10 pointer-events-none md:pointer-events-auto md:cursor-grab md:active:cursor-grabbing -mt-4">
        <Canvas camera={{ position: [0, 0, 16], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <SkillCloud />
          <OrbitControls 
            enablePan={false} 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={2.0} // Smooth automatic rotation
          />
        </Canvas>
      </div>
    </section>
  );
}
