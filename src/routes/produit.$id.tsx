import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getProduct, products } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { ProductCard } from "@/components/ProductCard";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/produit/$id")({
  head: ({ params }) => {
    const p = getProduct(params.id);
    return { meta: [
      { title: p ? `${p.name} — Délice de Marrakech` : "Produit" },
      { name: "description", content: p?.description ?? "" },
    ]};
  },
  component: ProductPage,
  notFoundComponent: () => (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="font-display text-4xl mb-4">Produit introuvable</h1>
      <Link to="/boutique" className="text-primary hover:underline">← Retour à la boutique</Link>
    </div>
  ),
});

function ProductPage() {
  const { id } = Route.useParams();
  const product = getProduct(id);
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  if (!product) throw notFound();

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div>
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16 grid lg:grid-cols-2 gap-12">
        <div className="aspect-square rounded-3xl overflow-hidden bg-muted shadow-elegant">
          <img src={product.image} alt={product.name} width={1024} height={1024} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <Link to="/boutique" className="text-sm text-muted-foreground hover:text-primary mb-4">← Boutique</Link>
          {product.badge && <span className="self-start mb-3 bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">{product.badge}</span>}
          <h1 className="font-display text-4xl md:text-5xl mb-4">{product.name}</h1>
          <p className="text-3xl font-display text-primary mb-6">{product.price} <span className="text-base text-muted-foreground">MAD</span></p>
          <p className="text-muted-foreground mb-8 leading-relaxed">{product.description}</p>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-border rounded-full">
              <button onClick={() => setQty(q => Math.max(1, q - 1))} className="p-3 hover:text-primary"><Minus className="w-4 h-4" /></button>
              <span className="w-10 text-center font-medium">{qty}</span>
              <button onClick={() => setQty(q => q + 1)} className="p-3 hover:text-primary"><Plus className="w-4 h-4" /></button>
            </div>
            <button
              onClick={() => { add(product, qty); toast.success(`${product.name} ajouté au panier`); }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition shadow-soft"
            >
              <ShoppingBag className="w-4 h-4" /> Ajouter au panier
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm pt-6 border-t border-border">
            <div><p className="font-semibold">Frais</p><p className="text-muted-foreground">Préparé du jour</p></div>
            <div><p className="font-semibold">Livraison</p><p className="text-muted-foreground">{product.category === "cakes" ? "Marrakech uniquement" : "Partout au Maroc"}</p></div>
            <div><p className="font-semibold">Sur mesure</p><p className="text-muted-foreground">Personnalisable</p></div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="container mx-auto px-4 lg:px-8 py-16">
          <h2 className="font-display text-3xl mb-8">Vous aimerez aussi</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
}
