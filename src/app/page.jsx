'use client';

import BoxModel from "@/components/BoxModel";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CatModel from "@/components/CatModel";
import ImageCard from "@/components/ImageCard/ImageCard";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Canvas camera={{position: [0, 0, 2]}}>
        <ambientLight position={[0, 0, 10]}/>
        <fog args={['black', 10, 70]} />

        <CatModel/>
        <ImageCard/>

        <Environment 
        files="/environment_bg.hdr"
        background backgroundBlurriness={0.5}/>
      </Canvas>
    </div>
  );
}
