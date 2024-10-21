import { DoubleSide } from 'three'
import { Image } from "@react-three/drei"
import { useRef } from "react"

const ImageCard = ({url, ...props}) => {

    const cardRef = useRef(null);

  return (
    <Image ref={cardRef} url={'/demo_image.png'} transparent side={DoubleSide} {...props}>
        < args={[0.1, 1, 1, 20, 20]} />
    </Image>
  )
}

export default ImageCard