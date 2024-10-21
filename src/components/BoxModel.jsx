import { OrbitControls } from "@react-three/drei"

const BoxModel = () => {
  return (
    <>
    <OrbitControls/>
    <mesh>
        <boxGeometry/>
        <meshStandardMaterial color={'red'}/>
    </mesh>
    </>
  )
}

export default BoxModel