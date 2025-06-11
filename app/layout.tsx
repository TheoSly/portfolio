import "./main.css";
import "./globals.css";
import type { Metadata } from "next";
import { Oswald } from "next/font/google";



const metadata: Metadata = {
   title: "use-shader-fx | ⚡️ More FXs, Less GLSL",
   description: "⚡️ More FXs, Less GLSL",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="fr" className="overflow-x-hidden bg-darkgray touch-none select-none">
         <body>
            {children}
         </body>
      </html>
   );
}

export { metadata };
