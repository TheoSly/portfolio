import "./css/main.css";
import "./css/map.css";
import "./css/git.css";
import "./css/slider.css";


import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="fr" className="bg-darkgray touch-none select-none">
         <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Bienvenue sur mon portfolio interactif. Découvrez mes projets web, mes compétences, mes expériences et les technologies que j'utilise." />
            <meta name="author" content="Théo Saly" />
            <meta name="keywords" content="theo saly portfolio bento" />
            <title>Théo Saly | Portfolio</title>
            <link rel="icon" href="/favicon.ico" />
         </head>
         <body className="scroll-smooth">
            <main>
               {children}
            </main>
         </body>
      </html>
   );
}
