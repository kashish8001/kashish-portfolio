"use client";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Environment } from "@react-three/drei";
function Orb() {
  return (
  <Float speed={1.8} rotationIntensity={1.1} floatIntensity={1.2}> 
  <Sphere args={[1.2, 96, 96]} position={[0, 0, 0]}> 
    <MeshDistortMaterial color="#7ea8ff" roughness={0.08} metalness={0.4} distort={0.38} speed={1.6} opacity={0.76} transparent /> 
    </Sphere> </Float>
    );
} export function HeroScene() { 
  return (
  <div className="pointer-events-none absolute inset-0 -z-10 opacity-90"> 
  <Canvas camera={{ position: [0, 0, 5], fov: 55 }}> 
    <ambientLight intensity={0.8} /> 
    <directionalLight position={[4, 4, 5]} intensity={1.4} /> 
    <Orb /> <Environment preset="city" /> </Canvas> </div>); }