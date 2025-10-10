import { useEffect, useRef, Suspense, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

import * as THREE from "three";
import WebGLManager from "../WebGLManager";

const Stars = (props) => {
  const ref = useRef();
  const sceneRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Optimize particle count based on device
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Memoize sphere generation to prevent recreation on every render
  const sphere = useMemo(() => {
    const count = isMobile ? 1500 : 3000; // Reduce particles on mobile
    return random.inSphere(new Float32Array(count), { radius: 1.2 });
  }, [isMobile]);

  useEffect(() => {
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    WebGLManager.addScene(sceneRef.current);

    return () => {
      WebGLManager.removeScene(sceneRef.current);
      // Cleanup geometry and materials
      if (ref.current?.geometry) {
        ref.current.geometry.dispose();
      }
      if (ref.current?.material) {
        ref.current.material.dispose();
      }
    };
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={isMobile ? 0.003 : 0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        gl={{ 
          antialias: false, // Disable antialiasing for better performance
          powerPreference: "high-performance"
        }}
        dpr={[1, 1.5]} // Limit pixel ratio for performance
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
