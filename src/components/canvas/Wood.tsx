import { useGLTF } from '@react-three/drei'

export function Wood() {
  const model = useGLTF('/models/wood.glb')
  model.scene.position.y = -0.5

  return (
    <primitive object={model.scene} scale={1.5} position={[1.5, -0.2, 1.2]}>
      <meshPhongMaterial color="white" />
    </primitive>
  )
}
