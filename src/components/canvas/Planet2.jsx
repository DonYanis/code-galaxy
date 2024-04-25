import React, { Suspense, useRef, useState  } from "react";
import { Canvas, useFrame  } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


import CanvasLoader from "../Loader";

const Planet2 = () => {
  const planet = useGLTF("./sun_and_solar_flares/scene.gltf");

  const planetRef = useRef();
  const [rotation, setRotation] = useState(0);

  // Update rotation
  useFrame(() => {
    if (planetRef.current) {
      setRotation(rotation+0.001 );
    }
  });
  return (
    <group>
    <primitive object={planet.scene}  ref={planetRef} scale={1.3} position-y={0} rotation-y={rotation} />

  </group>
  );
};

const PLanet2Canvas = () => {
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
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Planet2 />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default PLanet2Canvas;