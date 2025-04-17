
import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, Html, PerspectiveCamera, Text } from '@react-three/drei';
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
  const sofaRef = useRef<THREE.Mesh>(null);
  const bookshelfRef = useRef<THREE.Mesh>(null);
  const plantRef = useRef<THREE.Mesh>(null);
  const laptopRef = useRef<THREE.Group>(null);
  const lampRef = useRef<THREE.Group>(null);
  const artworkRef = useRef<THREE.Mesh>(null);
  const rugRef = useRef<THREE.Mesh>(null);
  
  // Track scroll position and mouse position
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredObject, setHoveredObject] = useState<string | null>(null);
  const [isLampOn, setIsLampOn] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse position between -1 and 1
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Simple rotation animation
  useFrame((state) => {
    if (roomRef.current) {
      // Room follows mouse with subtle movement
      roomRef.current.rotation.y = THREE.MathUtils.lerp(
        roomRef.current.rotation.y,
        mousePosition.x * Math.PI / 10,
        0.05
      );
      
      // Add subtle breathing animation
      roomRef.current.position.y = THREE.MathUtils.lerp(
        roomRef.current.position.y,
        Math.sin(state.clock.getElapsedTime() / 2) * 0.1 - 1.5,
        0.05
      );
    }
    
    // Make table react to scroll and mouse
    if (tableRef.current) {
      // Rotate table based on scroll position
      tableRef.current.rotation.z = scrollY * 0.001;
      
      // Make table float higher when scrolled down
      tableRef.current.position.y = -0.8 + scrollY * 0.0008;
      
      // Add subtle mouse-based movement
      if (hoveredObject === 'table') {
        tableRef.current.scale.setScalar(1.05);
        tableRef.current.rotation.x = mousePosition.y * 0.1;
      } else {
        tableRef.current.scale.setScalar(1);
      }
    }
    
    // Animate chair legs when scrolling
    chairLegsRefs.current.forEach((leg, index) => {
      if (leg) {
        // Enhanced chair leg animation based on scroll and time
        const baseScale = 1.0;
        const timeEffect = Math.sin(state.clock.getElapsedTime() * 2 + index) * 0.05;
        const scrollEffect = Math.sin(scrollY * 0.01 + index * 0.5) * 0.2;
        leg.scale.y = baseScale + scrollEffect + timeEffect;
        
        // More dynamic rotations
        leg.rotation.x = scrollY * 0.002 * (index % 2 ? 1 : -1);
        leg.rotation.z = scrollY * 0.001 * (index % 2 ? -1 : 1);
        
        // Add subtle wiggle effect
        leg.position.x += Math.sin(state.clock.getElapsedTime() * 5 + index) * 0.0008;
        leg.position.z += Math.cos(state.clock.getElapsedTime() * 4 + index) * 0.0008;
      }
    });
    
    // Animate sofa with breathing effect and mouse response
    if (sofaRef.current) {
      // Add subtle breathing animation
      sofaRef.current.position.y = -1 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.03;
      
      // React to scroll
      sofaRef.current.rotation.y = scrollY * 0.0003;
      
      // React to hover - Fix the TS error by explicitly casting to MeshStandardMaterial
      if (hoveredObject === 'sofa' && sofaRef.current.material) {
        sofaRef.current.scale.y = THREE.MathUtils.lerp(sofaRef.current.scale.y, 1.1, 0.1);
        
        // Use type assertion to access color property
        const material = sofaRef.current.material as THREE.MeshStandardMaterial;
        material.color.setRGB(
          0.5 + Math.sin(state.clock.getElapsedTime() * 2) * 0.1,
          0.5 + Math.sin(state.clock.getElapsedTime() * 2 + 1) * 0.1,
          0.6 + Math.sin(state.clock.getElapsedTime() * 2 + 2) * 0.1
        );
      } else if (sofaRef.current.material) {
        sofaRef.current.scale.y = THREE.MathUtils.lerp(sofaRef.current.scale.y, 1, 0.1);
        
        // Use type assertion to access color property
        const material = sofaRef.current.material as THREE.MeshStandardMaterial;
        material.color.setStyle('#708090');
      }
    }
    
    // Bookshelf reacts to scroll
    if (bookshelfRef.current) {
      bookshelfRef.current.rotation.y = scrollY * 0.001;
      bookshelfRef.current.position.x = 2.5 + Math.sin(scrollY * 0.005) * 0.2;
    }
    
    // Plant grows and rotates when scrolling
    if (plantRef.current) {
      // Plant grows taller with scroll
      const baseScale = 1.0;
      const growFactor = Math.min(scrollY * 0.001, 0.5); // Cap growth at 50%
      plantRef.current.scale.setScalar(baseScale + growFactor);
      
      // Plant sways with time
      plantRef.current.rotation.z = Math.sin(state.clock.getElapsedTime()) * 0.05;
      plantRef.current.rotation.x = Math.cos(state.clock.getElapsedTime() * 0.7) * 0.05;
    }
    
    // Laptop screen animation
    if (laptopRef.current) {
      laptopRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() / 2) * 0.03 - 0.2;
      laptopRef.current.rotation.y = mousePosition.x * 0.2;
      
      if (hoveredObject === 'laptop') {
        laptopRef.current.scale.setScalar(1.05);
      } else {
        laptopRef.current.scale.setScalar(1);
      }
    }
    
    // Lamp animation
    if (lampRef.current) {
      // Lamp sways gently
      lampRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() / 2) * 0.02;
      
      // Light flickers slightly when on
      if (isLampOn && lampRef.current.children[1]) {
        const intensity = 1 + Math.sin(state.clock.getElapsedTime() * 10) * 0.1;
        (lampRef.current.children[1] as THREE.PointLight).intensity = intensity;
      }
    }
    
    // Artwork frame animation
    if (artworkRef.current) {
      artworkRef.current.rotation.y = Math.sin(scrollY * 0.001) * 0.1;
      
      if (hoveredObject === 'artwork') {
        artworkRef.current.scale.setScalar(1.1);
      } else {
        artworkRef.current.scale.setScalar(1);
      }
    }
    
    // Rug wave animation
    if (rugRef.current) {
      // Create subtle wave effect on the rug
      if (rugRef.current.geometry.type === 'PlaneGeometry') {
        const position = (rugRef.current.geometry as THREE.PlaneGeometry).attributes.position;
        const time = state.clock.getElapsedTime();
        
        for (let i = 0; i < position.count; i++) {
          const x = position.getX(i);
          const y = position.getY(i);
          
          // Create wave pattern based on distance from center
          const distance = Math.sqrt(x * x + y * y);
          const wave = Math.sin(distance * 3 + time) * 0.02;
          
          position.setZ(i, wave);
        }
        
        position.needsUpdate = true;
      }
    }
  });
  
  // Handle mouse interactions
  const handlePointerOver = (objectName: string) => () => setHoveredObject(objectName);
  const handlePointerOut = () => setHoveredObject(null);
  
  // Toggle lamp on/off
  const handleLampClick = () => {
    setIsLampOn(!isLampOn);
  };
  
  return (
    <group ref={roomRef} dispose={null}>
      {/* Floor */}
      <mesh 
        receiveShadow 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -1.5, 0]}
        onPointerOver={handlePointerOver('floor')}
        onPointerOut={handlePointerOut}
      >
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
      
      {/* Rug */}
      <mesh 
        ref={rugRef}
        receiveShadow 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -1.48, 0]}
        onPointerOver={handlePointerOver('rug')}
        onPointerOut={handlePointerOut}
      >
        <planeGeometry args={[4, 3, 32, 32]} />
        <meshStandardMaterial color={hoveredObject === 'rug' ? '#c99b7a' : '#b38b6d'} side={THREE.DoubleSide} />
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
      <mesh 
        ref={tableRef} 
        position={[0, -0.8, 0]} 
        receiveShadow 
        castShadow
        onPointerOver={handlePointerOver('table')}
        onPointerOut={handlePointerOut}
      >
        <boxGeometry args={[2, 0.1, 1.2]} />
        <meshStandardMaterial color="#d2b48c" />
      </mesh>
      
      {/* Chair Legs */}
      <mesh 
        ref={(el) => { if (el) chairLegsRefs.current[0] = el; }} 
        position={[-0.8, -1.2, -0.4]} 
        receiveShadow 
        castShadow
        onPointerOver={handlePointerOver('chairLeg')}
        onPointerOut={handlePointerOut}
      >
        <cylinderGeometry args={[0.1, 0.1, 0.8]} />
        <meshStandardMaterial color="#a0522d" />
      </mesh>
      <mesh 
        ref={(el) => { if (el) chairLegsRefs.current[1] = el; }} 
        position={[0.8, -1.2, -0.4]} 
        receiveShadow 
        castShadow
        onPointerOver={handlePointerOver('chairLeg')}
        onPointerOut={handlePointerOut}
      >
        <cylinderGeometry args={[0.1, 0.1, 0.8]} />
        <meshStandardMaterial color="#a0522d" />
      </mesh>
      <mesh 
        ref={(el) => { if (el) chairLegsRefs.current[2] = el; }} 
        position={[-0.8, -1.2, 0.4]} 
        receiveShadow 
        castShadow
        onPointerOver={handlePointerOver('chairLeg')}
        onPointerOut={handlePointerOut}
      >
        <cylinderGeometry args={[0.1, 0.1, 0.8]} />
        <meshStandardMaterial color="#a0522d" />
      </mesh>
      <mesh 
        ref={(el) => { if (el) chairLegsRefs.current[3] = el; }} 
        position={[0.8, -1.2, 0.4]} 
        receiveShadow 
        castShadow
        onPointerOver={handlePointerOver('chairLeg')}
        onPointerOut={handlePointerOut}
      >
        <cylinderGeometry args={[0.1, 0.1, 0.8]} />
        <meshStandardMaterial color="#a0522d" />
      </mesh>
      
      {/* Chair Seat */}
      <mesh position={[0, -0.7, 0]} receiveShadow castShadow>
        <boxGeometry args={[1.8, 0.1, 1]} />
        <meshStandardMaterial color="#a0522d" />
      </mesh>
      
      {/* Sofa */}
      <mesh 
        ref={sofaRef}
        position={[-2, -1, 0]} 
        receiveShadow 
        castShadow
        onPointerOver={handlePointerOver('sofa')}
        onPointerOut={handlePointerOut}
      >
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
      
      {/* Throw Pillows */}
      <mesh position={[-1.6, -0.6, 0.8]} rotation={[0, 0.3, 0.2]} receiveShadow castShadow>
        <boxGeometry args={[0.4, 0.3, 0.4]} />
        <meshStandardMaterial color="#546e7a" />
      </mesh>
      <mesh position={[-1.7, -0.6, -0.7]} rotation={[0, -0.2, 0.1]} receiveShadow castShadow>
        <boxGeometry args={[0.4, 0.3, 0.4]} />
        <meshStandardMaterial color="#455a64" />
      </mesh>
      
      {/* Bookshelf */}
      <mesh 
        ref={bookshelfRef}
        position={[2.5, 0, -3]} 
        receiveShadow 
        castShadow
        onPointerOver={handlePointerOver('bookshelf')}
        onPointerOut={handlePointerOut}
      >
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
      
      {/* Books on shelf */}
      <group position={[2.5, -0.8, -2.5]}>
        {[...Array(6)].map((_, i) => (
          <mesh 
            key={i} 
            position={[Math.random() * 0.8 - 0.4, 0, Math.random() * 0.6 - 0.3]} 
            rotation={[0, Math.random() * 0.2 - 0.1, Math.random() * 0.1]}
            receiveShadow 
            castShadow
          >
            <boxGeometry args={[0.1, 0.25, 0.15]} />
            <meshStandardMaterial color={['#8b0000', '#006400', '#00008b', '#8b008b', '#a0522d'][Math.floor(Math.random() * 5)]} />
          </mesh>
        ))}
      </group>
      
      {/* More books on different shelves */}
      <group position={[2.5, 0, -2.5]}>
        {[...Array(5)].map((_, i) => (
          <mesh 
            key={i} 
            position={[Math.random() * 0.8 - 0.4, 0, Math.random() * 0.6 - 0.3]} 
            rotation={[0, Math.random() * 0.2 - 0.1, Math.random() * 0.1]}
            receiveShadow 
            castShadow
          >
            <boxGeometry args={[0.1, 0.25, 0.15]} />
            <meshStandardMaterial color={['#8b0000', '#006400', '#00008b', '#8b008b', '#a0522d'][Math.floor(Math.random() * 5)]} />
          </mesh>
        ))}
      </group>
      
      {/* Window */}
      <mesh 
        position={[0, 0.5, -3.9]} 
        receiveShadow
        onPointerOver={handlePointerOver('window')}
        onPointerOut={handlePointerOut}
      >
        <planeGeometry args={[2, 1.5]} />
        <meshStandardMaterial 
          color="#add8e6" 
          opacity={hoveredObject === 'window' ? 0.9 : 0.7} 
          transparent 
        />
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
      <mesh 
        ref={plantRef}
        position={[3, -0.5, 2]} 
        receiveShadow 
        castShadow
        onPointerOver={handlePointerOver('plant')}
        onPointerOut={handlePointerOut}
      >
        <sphereGeometry args={[0.5, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial 
          color={hoveredObject === 'plant' ? '#32CD32' : '#228b22'} 
          emissive={hoveredObject === 'plant' ? '#004400' : '#000000'}
          emissiveIntensity={hoveredObject === 'plant' ? 0.2 : 0}
        />
      </mesh>
      
      {/* New elements */}
      
      {/* Laptop on table */}
      <group 
        ref={laptopRef} 
        position={[0.3, -0.7, 0]} 
        onPointerOver={handlePointerOver('laptop')}
        onPointerOut={handlePointerOut}
      >
        {/* Laptop base */}
        <mesh receiveShadow castShadow>
          <boxGeometry args={[0.6, 0.05, 0.4]} />
          <meshStandardMaterial color="#303030" />
        </mesh>
        
        {/* Laptop screen */}
        <mesh position={[0, 0.25, -0.2]} rotation={[Math.PI / 6, 0, 0]} receiveShadow castShadow>
          <boxGeometry args={[0.6, 0.4, 0.02]} />
          <meshStandardMaterial color="#303030" />
        </mesh>
        
        {/* Screen display */}
        <mesh position={[0, 0.25, -0.19]} rotation={[Math.PI / 6, 0, 0]} receiveShadow>
          <planeGeometry args={[0.55, 0.35]} />
          <meshStandardMaterial 
            color="#4fc3f7" 
            emissive="#4fc3f7"
            emissiveIntensity={0.2} 
          />
        </mesh>
      </group>
      
      {/* Table Lamp */}
      <group 
        ref={lampRef} 
        position={[-0.7, -0.7, 0.2]} 
        onClick={handleLampClick}
        onPointerOver={handlePointerOver('lamp')}
        onPointerOut={handlePointerOut}
      >
        {/* Lamp base */}
        <mesh receiveShadow castShadow>
          <cylinderGeometry args={[0.1, 0.15, 0.1]} />
          <meshStandardMaterial color="#5d4037" />
        </mesh>
        
        {/* Lamp stem */}
        <mesh position={[0, 0.2, 0]} receiveShadow castShadow>
          <cylinderGeometry args={[0.02, 0.02, 0.4]} />
          <meshStandardMaterial color="#8d6e63" />
        </mesh>
        
        {/* Lamp shade */}
        <mesh position={[0, 0.4, 0]} receiveShadow castShadow>
          <coneGeometry args={[0.15, 0.2, 16, 1, true]} />
          <meshStandardMaterial 
            color="#f5f5f5" 
            side={THREE.DoubleSide}
            emissive="#f5f5dc"
            emissiveIntensity={isLampOn ? 0.3 : 0} 
          />
        </mesh>
        
        {/* Point light for lamp */}
        {isLampOn && (
          <pointLight 
            position={[0, 0.4, 0]} 
            color="#fff5e6" 
            intensity={1} 
            distance={3} 
            decay={2} 
            castShadow
          />
        )}
      </group>
      
      {/* Wall Artwork */}
      <mesh 
        ref={artworkRef}
        position={[-3.9, 0.5, 1.5]} 
        rotation={[0, Math.PI / 2, 0]}
        receiveShadow 
        castShadow
        onPointerOver={handlePointerOver('artwork')}
        onPointerOut={handlePointerOut}
      >
        {/* Frame */}
        <boxGeometry args={[1.0, 0.8, 0.05]} />
        <meshStandardMaterial color="#8d6e63" />
        
        {/* Artwork - replacing gradientTexture with a simple gradient material */}
        <mesh position={[0, 0, 0.03]}>
          <planeGeometry args={[0.9, 0.7]} />
          <meshStandardMaterial 
            color="#f5f5f5" 
            emissive="#4fc3f7"
            emissiveIntensity={0.2}
          />
        </mesh>
      </mesh>
      
      {/* Floating label for artwork when hovered */}
      {hoveredObject === 'artwork' && (
        <Text
          position={[-3.9, 0.8, 1.5]}
          rotation={[0, Math.PI / 2, 0]}
          fontSize={0.1}
          color="#ffffff"
          anchorX="center"
          anchorY="bottom"
          outlineWidth={0.005}
          outlineColor="#000000"
        >
          "Abstract Horizon"
        </Text>
      )}
      
      {/* Coffee cup on table */}
      <mesh position={[-0.3, -0.7, 0.2]} receiveShadow castShadow>
        <cylinderGeometry args={[0.05, 0.04, 0.1]} />
        <meshStandardMaterial color="white" />
      </mesh>
      
      {/* Coffee in cup */}
      <mesh position={[-0.3, -0.66, 0.2]} receiveShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.01]} />
        <meshStandardMaterial color="#3e2723" />
      </mesh>
      
      {/* Handle for cup */}
      <mesh position={[-0.35, -0.7, 0.2]} rotation={[0, Math.PI / 2, 0]} receiveShadow castShadow>
        <torusGeometry args={[0.03, 0.01, 8, 16, Math.PI]} />
        <meshStandardMaterial color="white" />
      </mesh>
      
      {/* Small decorative items on bookshelf */}
      <mesh position={[2.5, 0.8, -2.5]} receiveShadow castShadow>
        <sphereGeometry args={[0.1]} />
        <meshStandardMaterial color="#b39ddb" />
      </mesh>
      
      <mesh position={[2.2, 0.8, -2.5]} rotation={[0, Math.PI / 4, 0]} receiveShadow castShadow>
        <boxGeometry args={[0.1, 0.1, 0.1]} />
        <meshStandardMaterial color="#4dd0e1" />
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
