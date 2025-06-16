"use client";
import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Attendre la fin de l'animation SVG (2s) avant de lancer le fadeOut
    const timer = setTimeout(() => {
      // Forcer un repaint avant le fadeOut
      requestAnimationFrame(() => {
        setFadeOut(true);
      });

      // Supprimer le loader après la transition (400ms)
      setTimeout(() => {
        setVisible(false);
      }, 400);
    }, 0);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="loader"
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.4s ease",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 883 883" fill="none">
        <path
          className="logo-path"
          d="M272.895 365.629V417.396L116.85 472.504L272.895 527.797V579.379L54.3203 496.254V448.754L272.895 365.629ZM499.633 299.574V348.002H417.807V573.07H360.287V348.002H278.09V299.574H499.633ZM483.49 573.07L589.438 291.225H633.412L527.094 573.07H483.49ZM770.531 472.504L614.301 417.396V365.629L832.875 449.125V496.254L614.301 579.379V527.797L770.531 472.504Z"
          stroke="black"
          fill="none"
          strokeWidth="5"
        />
      </svg>
    </div>
  );
}