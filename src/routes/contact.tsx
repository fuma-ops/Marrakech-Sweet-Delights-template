import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact — Délice de Marrakech" },
    { name: "description", content: "Contactez-nous pour vos commandes sur mesure et événements." },
  ]}),
  component: Contact,
});

function Contact() {
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé ! Nous vous répondrons rapidement.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
      <div className="text-center mb-14">
        <p className="text-sm uppercase tracking-[0.2em] text-primary mb-2">Contactez-nous</p>
        <h1 className="font-display text-4xl md:text-6xl">Parlons de votre projet</h1>
      </div>

      <div className="grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-5">
          {[
            { icon: MapPin, t: "Adresse", d: "Avenue Mohammed VI, Gueliz, Marrakech" },
            { icon: Phone, t: "Téléphone", d: "+212 6 12 34 56 78" },
            { icon: Mail, t: "Email", d: "contact@delice-marrakech.ma" },
            { icon: Clock, t: "Horaires", d: "Lun – Sam : 9h – 21h" },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex gap-4 p-5 bg-card rounded-2xl shadow-soft">
              <div className="p-3 rounded-xl bg-primary/10 text-primary h-fit"><Icon className="w-5 h-5" /></div>
              <div><h3 className="font-semibold">{t}</h3><p className="text-sm text-muted-foreground mt-1">{d}</p></div>
            </div>
          ))}
        </div>

        <form onSubmit={submit} className="lg:col-span-3 bg-card rounded-2xl p-6 lg:p-8 shadow-soft space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Nom complet" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <Field label="Téléphone" name="phone" type="tel" />
          <Field label="Sujet" name="subject" placeholder="Mariage, anniversaire, devis..." />
          <div>
            <label className="text-sm font-medium mb-1 block">Votre message</label>
            <textarea name="msg" rows={6} required className="w-full px-4 py-2.5 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <button className="w-full px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition">Envoyer le message</button>
        </form>
      </div>
    </div>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-sm font-medium mb-1 block">{label}</label>
      <input {...props} className="w-full px-4 py-2.5 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}
