import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { products, categories, type Category } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

const search = z.object({ cat: z.enum(["cakes", "macarons", "viennoiserie", "cupcakes", "chocolats"]).optional() });

export const Route = createFileRoute("/boutique")({
  validateSearch: (s) => search.parse(s),
  head: () => ({ meta: [
    { title: "Boutique — Délice de Marrakech" },
    { name: "description", content: "Découvrez tous nos cakes design, macarons, viennoiseries et chocolats." },
  ]}),
  component: Boutique,
});

function Boutique() {
  const { cat } = Route.useSearch();
  const nav = useNavigate({ from: "/boutique" });
  const list = cat ? products.filter(p => p.category === cat) : products;

  const setCat = (c?: Category) => nav({ search: c ? { cat: c } : {} });

  return (
    <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-[0.2em] text-primary mb-2">Notre boutique</p>
        <h1 className="font-display text-4xl md:text-6xl">Toutes nos douceurs</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <button onClick={() => setCat()} className={`px-5 py-2 rounded-full text-sm font-medium transition ${!cat ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/70"}`}>Tout</button>
        {categories.map(c => (
          <button key={c.id} onClick={() => setCat(c.id)} className={`px-5 py-2 rounded-full text-sm font-medium transition ${cat === c.id ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/70"}`}>{c.name}</button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {list.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
