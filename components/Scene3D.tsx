'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float, SpotLight } from '@react-three/drei'
import * as THREE from 'three'

function GoldenSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.4}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.8}>
        <MeshDistortMaterial
          color="#D4AF37"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
          emissive="#D4AF37"
          emissiveIntensity={0.3}
        />
      </Sphere>
    </Float>
  )
}

function CinematicParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  
  const particlesCount = 500
  const positions = new Float32Array(particlesCount * 3)
  
  for (let i = 0; i < particlesCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 15
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.03
      particlesRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#F4E4B0"
        sizeAttenuation
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <color attach="background" args={['#050505']} />
        <fog attach="fog" args={['#050505', 5, 15]} />
        
        <ambientLight intensity={0.2} />
        <SpotLight
          position={[5, 5, 5]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          color="#D4AF37"
        />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#D4AF37" />
        <pointLight position={[0, 3, 0]} intensity={0.8} color="#F4E4B0" />
        
        <GoldenSphere />
        <CinematicParticles />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  )
}
