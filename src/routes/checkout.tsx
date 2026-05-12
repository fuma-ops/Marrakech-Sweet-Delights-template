import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Commande — Délice de Marrakech" }] }),
  component: Checkout,
});

function Checkout() {
  const { items, total, clear } = useCart();
  const nav = useNavigate();
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="container mx-auto px-4 py-24 text-center max-w-lg">
        <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
        <h1 className="font-display text-4xl mb-4">Merci pour votre commande !</h1>
        <p className="text-muted-foreground mb-8">Nous vous contacterons rapidement pour confirmer la livraison.</p>
        <button onClick={() => nav({ to: "/" })} className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium">Retour à l'accueil</button>
      </div>
    );
  }

  if (items.length === 0) {
    return <div className="container mx-auto px-4 py-24 text-center"><p>Votre panier est vide.</p></div>;
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Commande envoyée !");
    clear();
    setDone(true);
  };

  return (
    <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
      <h1 className="font-display text-4xl md:text-5xl mb-10">Finaliser la commande</h1>
      <form onSubmit={submit} className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-card rounded-2xl p-6 shadow-soft space-y-4">
            <h2 className="font-display text-2xl">Vos coordonnées</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Prénom" name="firstName" required />
              <Field label="Nom" name="lastName" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Téléphone" name="phone" type="tel" required />
            </div>
          </section>
          <section className="bg-card rounded-2xl p-6 shadow-soft space-y-4">
            <h2 className="font-display text-2xl">Livraison</h2>
            <Field label="Adresse" name="address" required />
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Ville" name="city" required defaultValue="Marrakech" />
              <Field label="Code postal" name="zip" required />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Notes (optionnel)</label>
              <textarea name="notes" rows={3} className="w-full px-4 py-2.5 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
          </section>
          <section className="bg-card rounded-2xl p-6 shadow-soft space-y-3">
            <h2 className="font-display text-2xl">Paiement</h2>
            <label className="flex items-center gap-3 p-4 rounded-xl border border-border cursor-pointer hover:bg-muted/50">
              <input type="radio" name="pay" defaultChecked className="accent-primary" />
              <div>
                <p className="font-medium">Paiement à la livraison</p>
                <p className="text-sm text-muted-foreground">Espèces ou TPE chez vous</p>
              </div>
            </label>
            <label className="flex items-center gap-3 p-4 rounded-xl border border-border cursor-pointer hover:bg-muted/50">
              <input type="radio" name="pay" className="accent-primary" />
              <div>
                <p className="font-medium">Virement bancaire</p>
                <p className="text-sm text-muted-foreground">Coordonnées envoyées par email</p>
              </div>
            </label>
          </section>
        </div>

        <aside className="bg-card rounded-2xl p-6 shadow-soft h-fit space-y-4">
          <h2 className="font-display text-2xl">Votre commande</h2>
          <ul className="space-y-3">
            {items.map(i => (
              <li key={i.product.id} className="flex justify-between text-sm">
                <span className="flex-1">{i.product.name} × {i.qty}</span>
                <span className="font-medium">{i.product.price * i.qty} MAD</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between text-lg font-semibold pt-4 border-t border-border">
            <span>Total</span><span className="text-primary">{total} MAD</span>
          </div>
          <button type="submit" className="w-full px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition">Confirmer la commande</button>
        </aside>
      </form>
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
