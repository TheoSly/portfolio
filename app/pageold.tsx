import { ShaderFx } from "./background/ShaderFx";
import { Playground } from "./background/Playground";

export default function Page() {
   return (
      <div
         style={{
            position: "fixed",
            width: "100%",
            height: "100svh",
            pointerEvents: "none",
         }}>
         <ShaderFx>
            <Playground />
         </ShaderFx>
      </div>
   );
}
