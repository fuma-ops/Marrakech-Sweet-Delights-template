import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { ShoppingBag } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1">
      <Link to="/produit/$id" params={{ id: product.id }} className="block aspect-square overflow-hidden bg-muted">
        <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </Link>
      {product.badge && (
        <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">{product.badge}</span>
      )}
      <div className="p-5">
        <Link to="/produit/$id" params={{ id: product.id }}>
          <h3 className="font-display text-lg text-foreground mb-1 hover:text-primary transition-colors">{product.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-display text-xl text-primary">{product.price} <span className="text-xs text-muted-foreground">MAD</span></span>
          <button onClick={() => add(product)} className="p-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors" aria-label="Ajouter au panier">
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
