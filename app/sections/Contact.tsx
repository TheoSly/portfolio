import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setStatus("Message envoyé !");
        form.reset();
      } else {
        setStatus("Erreur lors de l'envoi.");
      }
    } catch (err) {
      setStatus("Une erreur est survenue.");
    }
  };

  return (
    <section className="flex flex-col justify-between bg-mediumgray bg-opacity-60 backdrop-blur-md p-4 rounded-2xl border-1 border-border m-[2vw] md:m-[1.5vw] xl:m-[1vw]">
      <h2 className="text-xl mb-2 nohemi font-medium">Contact</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input type="text" name="name" placeholder="Votre nom*" className="rounded-md px-2 py-1 bg-darkgray text-white border border-border pointer-events-auto" required />
        
        <input type="email" name="email" placeholder="Votre email*" className="rounded-md px-2 py-1 bg-darkgray text-white border border-border pointer-events-auto" required />
        <textarea name="message" placeholder="Votre message*" className="rounded-md px-2 py-1 bg-darkgray text-white border border-border pointer-events-auto" rows={6} required />
        
        <button type="submit" className="nohemi font-medium w-25 bg-white text-darkgray rounded-md px-3 py-1 mt-2 hover:scale-105 transition duration-300 cursor-pointer pointer-events-auto">
          Envoyer
        </button>
        {status && <p className="text-sm mt-2">{status}</p>}
      </form>
    </section>
  );
}