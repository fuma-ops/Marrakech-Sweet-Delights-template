import { createFileRoute, Link } from "@tanstack/react-router";
import heroCake from "@/assets/hero-cake.jpg";
import { categories, products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { Truck, Cake, Heart, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Délice de Marrakech — Pâtisserie de Luxe" },
      { name: "description", content: "Cakes design à Marrakech. Macarons et viennoiseries livrés partout au Maroc." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = products.slice(0, 4);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:space-y-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/70 backdrop-blur text-xs font-medium text-primary">
              <Sparkles className="w-3.5 h-3.5" /> Pâtisserie artisanale à Marrakech
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-foreground">
              Délice <em className="text-primary not-italic">en chaque</em><br />
              bouchée.
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Cakes design sur mesure à Marrakech. Macarons délicats et viennoiseries dorées livrés partout au Maroc.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/boutique" className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition shadow-soft">
                Découvrir la boutique
              </Link>
              <Link to="/contact" className="px-7 py-3.5 rounded-full border border-foreground/20 font-medium hover:bg-background/60 transition">
                Commande sur mesure
              </Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-rose blur-3xl opacity-30 rounded-full" />
            <img src={heroCake} alt="Cake red velvet aux framboises" width={1536} height={1024} className="relative rounded-3xl shadow-elegant w-full h-auto object-cover" />
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container mx-auto px-4 lg:px-8 py-16 grid sm:grid-cols-3 gap-6">
        {[
          { icon: Cake, t: "100% Artisanal", d: "Préparé chaque jour à Marrakech" },
          { icon: Truck, t: "Livraison Maroc", d: "Macarons & viennoiseries partout — cakes design à Marrakech" },
          { icon: Heart, t: "Sur mesure", d: "Cakes design pour vos événements" },
        ].map(({ icon: Icon, t, d }, i) => (
          <motion.div 
            key={t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="flex items-start gap-4 p-6 rounded-2xl bg-card shadow-soft hover:shadow-elegant transition-shadow duration-300"
          >
            <motion.div 
              animate={{ 
                y: [0, -4, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
              whileHover={{ rotate: 12, scale: 1.1 }}
              className="p-3 rounded-xl bg-primary/10 text-primary"
            >
              <Icon className="w-6 h-6" />
            </motion.div>
            <div>
              <h3 className="font-semibold text-foreground">{t}</h3>
              <p className="text-sm text-muted-foreground mt-1">{d}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CATEGORIES */}
      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-2">Nos collections</p>
          <h2 className="font-display text-4xl md:text-5xl">L'art de la pâtisserie</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {categories.map(c => (
            <Link key={c.id} to="/boutique" search={{ cat: c.id }} className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-soft">
              <img src={c.image} alt={c.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <span className="absolute bottom-4 left-4 right-4 font-display text-xl text-background">{c.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-2">Best-sellers</p>
            <h2 className="font-display text-4xl md:text-5xl">Nos créations signature</h2>
          </div>
          <Link to="/boutique" className="hidden sm:inline text-sm font-medium text-primary hover:underline">Voir tout →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-rose p-10 md:p-16 text-center text-primary-foreground shadow-elegant">
          <h2 className="font-display text-4xl md:text-5xl mb-4">Un événement à célébrer ?</h2>
          <p className="max-w-xl mx-auto mb-8 opacity-90">Mariage, anniversaire, baby shower — créons ensemble votre cake design unique.</p>
          <Link to="/contact" className="inline-block px-8 py-3.5 rounded-full bg-background text-primary font-semibold hover:bg-background/90 transition">
            Demander un devis
          </Link>
        </div>
      </section>
    </div>
  );
}
