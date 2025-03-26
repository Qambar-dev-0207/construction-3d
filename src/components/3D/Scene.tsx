
import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, Html, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Loading component shown while 3D scene loads
const Loader = () => (
  <Html center>
    <div className="flex flex-col items-center justify-center">
      <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
      <p className="mt-4 text-sm text-primary/70">Loading 3D Scene...</p>
    </div>
  </Html>
);

// Interactive Room model
const Room = (props: any) => {
  const { scene } = useGLTF('/room.glb');
  const roomRef = useRef<THREE.Group>();
  
  // Simple rotation animation
  useFrame((state) => {
    if (roomRef.current) {
      roomRef.current.rotation.y = THREE.MathUtils.lerp(
        roomRef.current.rotation.y,
        (state.mouse.x * Math.PI) / 20,
        0.05
      );
      roomRef.current.position.y = THREE.MathUtils.lerp(
        roomRef.current.position.y,
        Math.sin(state.clock.getElapsedTime() / 2) * 0.1 - 1.5,
        0.05
      );
    }
  });
  
  // Clone scene to avoid issues
  const model = scene.clone();
  
  return (
    <group ref={roomRef} {...props} dispose={null}>
      <primitive object={model} scale={0.8} />
    </group>
  );
};

// Fallback room model if GLTF fails to load
const FallbackRoom = () => {
  const roomRef = useRef<THREE.Group>();
  
  useFrame((state) => {
    if (roomRef.current) {
      roomRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() / 2) * 0.3;
    }
  });
  
  return (
    <group ref={roomRef}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[4, 0.2, 4]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
      {/* Walls */}
      <mesh position={[-2, 1.5, 0]}>
        <boxGeometry args={[0.2, 3, 4]} />
        <meshStandardMaterial color="#e8e8e8" />
      </mesh>
      <mesh position={[0, 1.5, -2]}>
        <boxGeometry args={[4, 3, 0.2]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>
      {/* Furniture */}
      <mesh position={[0, 0.4, 0]}>
        <boxGeometry args={[1.5, 0.8, 1]} />
        <meshStandardMaterial color="#d0d0d0" />
      </mesh>
      <mesh position={[1, 1.2, -1.5]}>
        <boxGeometry args={[1, 2, 0.1]} />
        <meshStandardMaterial color="#c0c0c0" />
      </mesh>
    </group>
  );
};

// Scene camera controls
const CameraController = () => {
  const { camera, gl } = useThree();
  
  useEffect(() => {
    camera.position.set(5, 2, 5);
    camera.lookAt(0, 0, 0);
  }, [camera]);
  
  return <OrbitControls enableZoom={false} enablePan={false} target={[0, 0, 0]} args={[camera, gl.domElement]} />;
};

// Main Scene component
interface SceneProps {
  className?: string;
  height?: string;
}

const Scene = ({ className = "h-[500px]", height = "500px" }: SceneProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  // Simulate loading state and handle potential errors
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={`${className} canvas-container overflow-hidden rounded-lg`} style={{ height }}>
      <Canvas shadows camera={{ position: [5, 2, 5], fov: 50 }}>
        <color attach="background" args={['#f8f8f8']} />
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={0.8} 
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024}
        />
        <Suspense fallback={<Loader />}>
          <Environment preset="apartment" />
          {error ? <FallbackRoom /> : <Room />}
          <CameraController />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
