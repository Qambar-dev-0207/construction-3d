
import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, Html, PerspectiveCamera } from '@react-three/drei';
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

// Custom Room model
const Room = () => {
  const roomRef = useRef<THREE.Group>(null);
  const tableRef = useRef<THREE.Mesh>(null);
  const chairLegsRefs = useRef<THREE.Mesh[]>([]);
  
  // Track scroll position
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
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
    
    // Make table react to scroll
    if (tableRef.current) {
      // Rotate table slightly based on scroll position
      tableRef.current.rotation.z = scrollY * 0.001;
      // Elevate table slightly when scrolling down
      tableRef.current.position.y = -0.8 + scrollY * 0.0005;
    }
    
    // Animate chair legs when scrolling
    chairLegsRefs.current.forEach((leg, index) => {
      if (leg) {
        // Make legs stretch and compress based on scroll
        const baseScale = 1.0;
        const scrollEffect = Math.sin(scrollY * 0.01 + index * 0.5) * 0.2;
        leg.scale.y = baseScale + scrollEffect;
        
        // Also slight rotation for dynamic feel
        leg.rotation.x = scrollY * 0.001 * (index % 2 ? 1 : -1);
        leg.rotation.z = scrollY * 0.0005 * (index % 2 ? -1 : 1);
      }
    });
  });
  
  return (
    <group ref={roomRef} dispose={null}>
      {/* Floor */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
      
      {/* Walls */}
      <mesh position={[-4, 0, 0]} receiveShadow castShadow>
        <boxGeometry args={[0.2, 3, 8]} />
        <meshStandardMaterial color="#e8e8e8" />
      </mesh>
      <mesh position={[0, 0, -4]} receiveShadow castShadow>
        <boxGeometry args={[8, 3, 0.2]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>
      
      {/* Furniture */}
      {/* Table */}
      <mesh ref={tableRef} position={[0, -0.8, 0]} receiveShadow castShadow>
        <boxGeometry args={[2, 0.1, 1.2]} />
        <meshStandardMaterial color="#d2b48c" />
      </mesh>
      
      {/* Chair Legs */}
      <mesh 
        ref={(el) => { if (el) chairLegsRefs.current[0] = el; }} 
        position={[-0.8, -1.2, -0.4]} 
        receiveShadow 
        castShadow
      >
        <cylinderGeometry args={[0.1, 0.1, 0.8]} />
        <meshStandardMaterial color="#a0522d" />
      </mesh>
      <mesh 
        ref={(el) => { if (el) chairLegsRefs.current[1] = el; }} 
        position={[0.8, -1.2, -0.4]} 
        receiveShadow 
        castShadow
      >
        <cylinderGeometry args={[0.1, 0.1, 0.8]} />
        <meshStandardMaterial color="#a0522d" />
      </mesh>
      <mesh 
        ref={(el) => { if (el) chairLegsRefs.current[2] = el; }} 
        position={[-0.8, -1.2, 0.4]} 
        receiveShadow 
        castShadow
      >
        <cylinderGeometry args={[0.1, 0.1, 0.8]} />
        <meshStandardMaterial color="#a0522d" />
      </mesh>
      <mesh 
        ref={(el) => { if (el) chairLegsRefs.current[3] = el; }} 
        position={[0.8, -1.2, 0.4]} 
        receiveShadow 
        castShadow
      >
        <cylinderGeometry args={[0.1, 0.1, 0.8]} />
        <meshStandardMaterial color="#a0522d" />
      </mesh>
      
      {/* Sofa */}
      <mesh position={[-2, -1, 0]} receiveShadow castShadow>
        <boxGeometry args={[1.5, 0.5, 3]} />
        <meshStandardMaterial color="#708090" />
      </mesh>
      <mesh position={[-2, -0.5, 0]} receiveShadow castShadow>
        <boxGeometry args={[0.5, 0.5, 3]} />
        <meshStandardMaterial color="#778899" />
      </mesh>
      <mesh position={[-2, -0.7, 1.6]} receiveShadow castShadow>
        <boxGeometry args={[1.2, 0.8, 0.3]} />
        <meshStandardMaterial color="#778899" />
      </mesh>
      <mesh position={[-2, -0.7, -1.6]} receiveShadow castShadow>
        <boxGeometry args={[1.2, 0.8, 0.3]} />
        <meshStandardMaterial color="#778899" />
      </mesh>
      
      {/* Bookshelf */}
      <mesh position={[2.5, 0, -3]} receiveShadow castShadow>
        <boxGeometry args={[1.5, 3, 0.3]} />
        <meshStandardMaterial color="#8b4513" />
      </mesh>
      <mesh position={[2.5, -1.2, -2.5]} receiveShadow castShadow>
        <boxGeometry args={[1.5, 0.1, 1]} />
        <meshStandardMaterial color="#8b4513" />
      </mesh>
      <mesh position={[2.5, -0.4, -2.5]} receiveShadow castShadow>
        <boxGeometry args={[1.5, 0.1, 1]} />
        <meshStandardMaterial color="#8b4513" />
      </mesh>
      <mesh position={[2.5, 0.4, -2.5]} receiveShadow castShadow>
        <boxGeometry args={[1.5, 0.1, 1]} />
        <meshStandardMaterial color="#8b4513" />
      </mesh>
      <mesh position={[2.5, 1.2, -2.5]} receiveShadow castShadow>
        <boxGeometry args={[1.5, 0.1, 1]} />
        <meshStandardMaterial color="#8b4513" />
      </mesh>
      
      {/* Window */}
      <mesh position={[0, 0.5, -3.9]} receiveShadow>
        <planeGeometry args={[2, 1.5]} />
        <meshStandardMaterial color="#add8e6" opacity={0.7} transparent />
      </mesh>
      <mesh position={[0, 0.5, -3.9]} receiveShadow>
        <boxGeometry args={[2.2, 1.7, 0.05]} />
        <meshStandardMaterial color="white" />
      </mesh>
      
      {/* Plant */}
      <mesh position={[3, -1, 2]} receiveShadow castShadow>
        <cylinderGeometry args={[0.3, 0.4, 0.5]} />
        <meshStandardMaterial color="#cd853f" />
      </mesh>
      <mesh position={[3, -0.5, 2]} receiveShadow castShadow>
        <sphereGeometry args={[0.5, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#228b22" />
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
  
  // Simulate loading state
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
          <Room />
          <CameraController />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
