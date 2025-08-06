"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import React, { useRef } from "react";


function Model() {
  const gltf = useGLTF("/models/luna_robot.glb");
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
     
      modelRef.current.rotation.y += 0.01; // rotate Y-axis
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={0.01}
      position={[0, -2, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

export default function ModelViewer() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas camera={{ position: [0, 1, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Model />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
