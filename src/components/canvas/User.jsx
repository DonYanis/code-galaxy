import React, { Suspense, useRef, useState  } from "react";
import { Canvas, useFrame  } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const User = () => {
  const user = useGLTF("./user/scene.gltf");
  const userRef = useRef();
  const [rotation, setRotation] = useState(0);

  // Update rotation
  useFrame(() => {
    if (userRef.current) {
      setRotation(rotation+0.01 );
    }
  });
  return (
    <mesh >
      <directionalLight intensity={0.5} position={[5, 10, 5]} />
      <pointLight intensity={0.3} position={[-5, 5, 5]} />
      <spotLight intensity={0.8} position={[0, 10, 0]} angle={Math.PI / 6} penumbra={0.2} />
      <ambientLight intensity={0.5} />
    <primitive object={user.scene}  ref={userRef} scale={2.3} position-y={0} rotation-y={rotation} />  

  
  </mesh>
  );
};

const UserCanvas = () => {
  return (
    <Canvas
    style={{ height: "100px" }}
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
        <User />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default UserCanvas;