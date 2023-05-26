import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, OrbitControls, Html } from "@react-three/drei";
import Model from "../components/Pokemon/Model";
import GifProgress from "../components/UI/GifProgress";
import pikachuGif from "../assets/pikachu-progress.gif";

const StyledMain = styled.main`
  position : absolute;
  width : 100vw;
  height: 100vh;
  z-index : 900;
`;

const HomePage = () => {
  return (
    <StyledMain className="main">
      <Canvas>
        <Suspense
          fallback={
            <Html center>
                <GifProgress
                  width="15rem"
                  src={pikachuGif}
                  text="Loading..."
                  fontSize="1.5rem"
                />
            </Html>
          }
        >
          <Model />
          <OrbitControls />
          <Environment files="/pokemon-center.hdr" background />
        </Suspense>
      </Canvas>
    </StyledMain>
  );
};

export default HomePage;
