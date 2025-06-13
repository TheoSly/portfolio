import "./css/main.css";
import "./css/map.css";
import "./css/git.css";
import "./css/slider.css";


import "./globals.css";
import type { Metadata } from "next";

const metadata: Metadata = {
   title: "use-shader-fx | ⚡️ More FXs, Less GLSL",
   description: "⚡️ More FXs, Less GLSL",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="fr" className="bg-darkgray touch-none select-none">
         <body className="scroll-smooth">
            {children}
         </body>
      </html>
   );
}

export { metadata };
