import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";

declare global {
   namespace JSX {
      interface IntrinsicElements {
         fxMaterial: any;
      }
   }
}

export type FxMaterialProps = {
   u_fx: THREE.Texture;
   u_color?: THREE.Color | [number, number, number];
};

export const FxMaterial = shaderMaterial(
   {
      u_fx: new THREE.Texture(),
      u_color: new THREE.Color(0x00aaff), // Couleur par défaut (bleu clair)
   },

   `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
        }
    `,
   `
        precision highp float;
        varying vec2 vUv;
        uniform sampler2D u_fx;
        uniform vec3 u_color;

        void main() {
            vec2 uv = vUv;
            vec4 color = texture2D(u_fx, uv);
            color.rgb *= u_color; // Applique la teinte
            gl_FragColor = color;
        }
    `
);
