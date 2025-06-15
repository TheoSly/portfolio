"use client";

import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";

const Loading = () => {
   return (
      <div
         style={{
            fontSize: "18px",
            color: "white",
            position: "fixed",
            bottom: "16px",
            left: "16px",
         }}>
         Loading...
      </div>
   );
};

export const ShaderFx = ({
   children,
   preserveDrawingBuffer = false,
   shadows = false,
   isDprUpdate = true,
   eventSource,
}: {
   children: React.ReactNode;
   preserveDrawingBuffer?: boolean;
   shadows?: boolean;
   isDprUpdate?: boolean;
   eventSource?: HTMLElement | React.MutableRefObject<HTMLElement> | undefined;
}) => {
   const [dpr, setDpr] = useState(1.5);
   return (
      <Suspense fallback={<Loading />}>
         <Canvas
            eventSource={eventSource}
            eventPrefix={eventSource ? "client" : "offset"}
            dpr={dpr}
            gl={{ preserveDrawingBuffer: preserveDrawingBuffer }}
            shadows={shadows}>
            {children}
         </Canvas>
      </Suspense>
   );
};
