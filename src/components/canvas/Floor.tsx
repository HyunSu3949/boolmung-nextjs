import React, { useMemo } from 'react'
import { TextureLoader, RepeatWrapping } from 'three'

import floorTexture from '@/assets/img/floortex.jpg'

export function Floor() {
  const ImgTexture = useMemo(() => {
    const loader = new TextureLoader()
    return loader.load(floorTexture.src, (texture) => {
      // eslint-disable-next-line no-multi-assign
      texture.wrapS = texture.wrapT = RepeatWrapping
      texture.offset.set(0, 0)
      texture.repeat.set(8, 8)
    })
  }, [])

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.6, 0]}>
      <circleGeometry args={[30, 30]} />
      <meshStandardMaterial color="#654321" map={ImgTexture} />
    </mesh>
  )
}
