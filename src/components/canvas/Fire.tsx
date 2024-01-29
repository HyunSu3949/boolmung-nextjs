/* eslint-disable no-multi-assign */
// @ts-nocheck
import * as THREE from 'three'
import { useLayoutEffect, useRef } from 'react'
import { extend, useFrame, useLoader } from '@react-three/fiber'

import vertexShaderSource from '@/components/canvas/shader/vertexShader.glsl'
import fragmentShaderSource from '@/components/canvas/shader/fragmentShader.glsl'

class FireMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      defines: { ITERATIONS: '10', OCTIVES: '3' },
      uniforms: {
        fireTex: { type: 't', value: null },
        color: { type: 'c', value: null },
        time: { type: 'f', value: 0.0 },
        seed: { type: 'f', value: 0.0 },
        invModelMatrix: { type: 'm4', value: null },
        scale: { type: 'v3', value: null },
        noiseScale: { type: 'v4', value: new THREE.Vector4(1, 2, 1, 0.3) },
        magnitude: { type: 'f', value: 1.8 },
        lacunarity: { type: 'f', value: 1.8 },
        gain: { type: 'f', value: 0.5 },
      },
      vertexShader: vertexShaderSource,
      fragmentShader: fragmentShaderSource,
    })
  }
}

extend({ FireMaterial })

export function Fire({ ...props }: any) {
  const ref = useRef()
  const texture = useLoader(THREE.TextureLoader, '/img/fire.png')
  useFrame((state) => {
    const invModelMatrix = ref.current.material.uniforms.invModelMatrix.value
    ref.current.updateMatrixWorld()
    invModelMatrix.copy(ref.current.matrixWorld).invert()
    ref.current.material.uniforms.time.value = state.clock.elapsedTime
    ref.current.material.uniforms.invModelMatrix.value = invModelMatrix
    ref.current.material.uniforms.scale.value = ref.current.scale
  })
  useLayoutEffect(() => {
    texture.magFilter = texture.minFilter = THREE.LinearFilter
    texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping
    ref.current.material.uniforms.fireTex.value = texture
    ref.current.material.uniforms.color.value = new THREE.Color(0xff0000)
    ref.current.material.uniforms.invModelMatrix.value = new THREE.Matrix4()
    ref.current.material.uniforms.scale.value = new THREE.Vector3(1, 1, 1)
    ref.current.material.uniforms.seed.value = Math.random() * 19.19
  }, [texture])
  return (
    <mesh ref={ref} {...props}>
      <boxGeometry />
      <fireMaterial transparent depthWrite depthTest />
    </mesh>
  )
}
