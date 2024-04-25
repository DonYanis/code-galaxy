import React, { Suspense, useRef, useState  } from "react";
import { useNavigate } from 'react-router-dom'
import { Canvas, useFrame  } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const PlanetB = () => {
  const planet = useGLTF("./purple_planet/scene.gltf");

  const planetRef = useRef();
  const [rotation, setRotation] = useState(0);

  // Update rotation
  useFrame(() => {
    if (planetRef.current) {
      setRotation(rotation+0.001 );
    }
  });
  return (
    <>
    <primitive object={planet.scene}  ref={planetRef} scale={2.3} position-y={0} rotation-y={rotation} />
  </>
  );
};

const PLanetBCanvas = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/quiz-css');
  }
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      onClick={handleClick}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <PlanetB />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default PLanetBCanvas;