'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { Floor } from '@/components/canvas/Floor'
import { Fire } from '@/components/canvas/Fire'
import { Wood } from '@/components/canvas/Wood'

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 1, 10], fov: 90 }}>
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        position={[0, 5, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-100}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
      />
      <Wood />
      <Fire scale={7} position={[0, 3, 0]} />
      <Floor />
      <OrbitControls />
      {/* <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} /> */}
    </Canvas>
  )
}
