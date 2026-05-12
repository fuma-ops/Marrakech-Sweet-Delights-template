import { createFileRoute, Link } from "@tanstack/react-router";
import { useCart } from "@/lib/cart";
import { Trash2, Minus, Plus } from "lucide-react";

export const Route = createFileRoute("/panier")({
  head: () => ({ meta: [{ title: "Panier — Délice de Marrakech" }] }),
  component: Cart,
});

function Cart() {
  const { items, setQty, remove, total, clear } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="font-display text-4xl md:text-5xl mb-4">Votre panier est vide</h1>
        <p className="text-muted-foreground mb-8">Découvrez nos délicieuses créations.</p>
        <Link to="/boutique" className="inline-block px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90">Voir la boutique</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
      <h1 className="font-display text-4xl md:text-5xl mb-10">Mon panier</h1>
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-4">
          {items.map(({ product, qty }) => (
            <div key={product.id} className="flex gap-4 p-4 bg-card rounded-2xl shadow-soft">
              <img src={product.image} alt={product.name} className="w-24 h-24 rounded-xl object-cover" />
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex-1">
                  <h3 className="font-display text-lg">{product.name}</h3>
                  <p className="text-sm text-primary font-medium">{product.price} MAD</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-border rounded-full">
                    <button onClick={() => setQty(product.id, qty - 1)} className="p-2"><Minus className="w-3.5 h-3.5" /></button>
                    <span className="w-8 text-center text-sm font-medium">{qty}</span>
                    <button onClick={() => setQty(product.id, qty + 1)} className="p-2"><Plus className="w-3.5 h-3.5" /></button>
                  </div>
                  <button onClick={() => remove(product.id)} className="p-2 text-muted-foreground hover:text-destructive"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            </div>
          ))}
          <button onClick={clear} className="text-sm text-muted-foreground hover:text-destructive">Vider le panier</button>
        </div>

        <aside className="bg-card rounded-2xl p-6 shadow-soft h-fit space-y-4">
          <h2 className="font-display text-2xl">Récapitulatif</h2>
          <div className="flex justify-between text-sm"><span>Sous-total</span><span>{total} MAD</span></div>
          <div className="flex justify-between text-sm"><span>Livraison</span><span className="text-muted-foreground">Calculée à l'étape suivante</span></div>
          <div className="flex justify-between text-lg font-semibold pt-4 border-t border-border"><span>Total</span><span className="text-primary">{total} MAD</span></div>
          <Link to="/checkout" className="block text-center w-full px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition">Passer commande</Link>
          <Link to="/boutique" className="block text-center text-sm text-muted-foreground hover:text-primary">Continuer vos achats</Link>
        </aside>
      </div>
    </div>
  );
}
