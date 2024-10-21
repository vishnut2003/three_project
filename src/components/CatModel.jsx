'use client';

import { OrbitControls, useGLTF } from "@react-three/drei";

const CatModel = () => {

    const { scene } = useGLTF('/cat_model/cat.glb')

  return (
    <>
    <OrbitControls />
    <mesh>
        <primitive object={scene}/>
    </mesh>
    </>
  )
}

export default CatModel