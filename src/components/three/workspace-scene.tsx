"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Environment } from "@react-three/drei";
import * as THREE from "three";

function FloatingWindow({
  position,
  color
}: {
  position: [number, number, number];
  color: string;
}) {
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
      <group position={position}>
        <RoundedBox args={[1.35, 0.82, 0.08]} radius={0.08} smoothness={4}>
          <meshStandardMaterial color="#111827" metalness={0.35} roughness={0.4} />
        </RoundedBox>
        <mesh position={[0, 0, 0.05]}>
          <planeGeometry args={[1.15, 0.65]} />
          <meshBasicMaterial color={color} transparent opacity={0.33} />
        </mesh>
      </group>
    </Float>
  );
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const array = new Float32Array(300 * 3);
    for (let i = 0; i < 300; i += 1) {
      array[i * 3] = (Math.random() - 0.5) * 9;
      array[i * 3 + 1] = (Math.random() - 0.5) * 5;
      array[i * 3 + 2] = (Math.random() - 0.5) * 7;
    }
    return array;
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) {
      return;
    }
    pointsRef.current.rotation.y = clock.elapsedTime * 0.04;
    pointsRef.current.position.y = Math.sin(clock.elapsedTime * 0.35) * 0.08;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#8fd1ff" size={0.02} sizeAttenuation transparent opacity={0.6} />
    </points>
  );
}

function SceneCore() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock, pointer, camera }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = pointer.x * 0.2;
      groupRef.current.rotation.x = pointer.y * 0.08;
      groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.5) * 0.08;
    }

    const targetX = pointer.x * 0.45;
    const targetY = pointer.y * 0.25;
    camera.position.x += (targetX - camera.position.x) * 0.04;
    camera.position.y += (targetY - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[2, 2, 3]} intensity={1.1} color="#95bcff" />
      <pointLight position={[-2, 0.6, 1.5]} intensity={1.1} color="#b58aff" />
      <pointLight position={[2, -0.7, 1]} intensity={0.8} color="#5de8ff" />
      <group ref={groupRef}>
        <FloatingWindow position={[-1.7, 0.4, -0.5]} color="#6e8dff" />
        <FloatingWindow position={[0, -0.1, 0]} color="#58dcff" />
        <FloatingWindow position={[1.7, 0.35, -0.6]} color="#c188ff" />
        <Float speed={1} rotationIntensity={0.9} floatIntensity={1.2}>
          <mesh position={[0.2, -1.05, -0.5]}>
            <icosahedronGeometry args={[0.33, 0]} />
            <meshStandardMaterial color="#7ea8ff" metalness={0.7} roughness={0.2} />
          </mesh>
        </Float>
      </group>
      <ParticleField />
      <Environment preset="night" />
      <fog attach="fog" args={["#05070e", 3, 10]} />
    </>
  );
}

export function WorkspaceScene() {
  return (
    <div className="h-[320px] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/25 md:h-[420px]">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 4.2], fov: 48 }}>
        <SceneCore />
      </Canvas>
    </div>
  );
}
