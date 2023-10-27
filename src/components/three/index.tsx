import {
  OrbitControls,
  OrbitControlsProps,
  PerspectiveCamera,
} from "@react-three/drei";
import { angletoRadians } from "../../utils";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

const Three = () => {
  const orbitalRef = useRef<any>(null);
  useFrame((state) => {
    if (!!orbitalRef.current) {
      const { x, y } = state.pointer;

      orbitalRef.current.setAzimuthalAngle?.(-x * angletoRadians(90));
      orbitalRef.current.setPolarAngle?.(y + 1 * angletoRadians(90 - 30));
      orbitalRef.current.update();
    }

    // console.log(state.pointer);
  });
  useEffect(() => {
    console.log(orbitalRef);
  }, []);
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 3, 7]} />
      <OrbitControls
        ref={orbitalRef}
        minPolarAngle={angletoRadians(40)}
        maxPolarAngle={angletoRadians(80)}
      />
      {/* Sphere */}
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        {/* <meshBasicMaterial color="#ff0000" /> */}
        <meshStandardMaterial color={"#fff"} />
      </mesh>
      {/* Plane */}
      <mesh rotation={[-angletoRadians(90), 0, 0]}>
        <planeGeometry args={[3, 3]} />
        <meshBasicMaterial color={"#1048ff"} />
      </mesh>
      <ambientLight args={["#ffffff", 1]} />
    </>
  );
};

export default Three;
