import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

interface ParticulasProps {
  position?: [number, number, number];
}


const generateRandomSpherePoints = (count: number, radius: number) => {
  const points = [];
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    points.push(x, y, z);

 
  }
  return new Float32Array(points); 
};

const Particulas: React.FC<ParticulasProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  const ref = useRef() as React.MutableRefObject<any>;
  const sphere = generateRandomSpherePoints(1500, 1);

  useFrame((state, delta) => {
    ref.current.rotation.x += delta / 10;
    ref.current.rotation.y -= delta / 15;

    return state;

  });

  return (
    <group rotation={[0, 0, Math.PI / 4]} position={props.position}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#1b82aa'
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          style={{}}
        />
      </Points>
    </group>
  );
};

const ParticulasCanva = () => {
  return (
    <div style={{ position: "absolute", width: "60rem", height: "40rem" }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Particulas position={[0, 0, 0]} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default ParticulasCanva;
