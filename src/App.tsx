import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Three from "./components/three";

function App() {
  return (
    <>
      <div className="w-[100vw] h-[100vh]">
        <Canvas>
          <Suspense fallback={null}>
            <Three />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

export default App;
