'use client'

import React, { useRef } from 'react'

export function Lights() {
  const lightRef = useRef<any>()

  return (
    <>
      <ambientLight intensity={1} />
      <pointLight
        ref={lightRef}
        position={[0, 0, 0]}
        intensity={0.8}
        color="#ffffff"
        castShadow
      />
    </>
  )
}
