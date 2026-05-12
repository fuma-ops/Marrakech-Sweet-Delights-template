import { createFileRoute, Link } from "@tanstack/react-router";
import cake from "@/assets/cake-berry.jpg";
import hanan from "@/assets/hanan-founder.jpg";
import { Heart, Sparkles, Quote } from "lucide-react";

export const Route = createFileRoute("/a-propos")({
  head: () => ({ meta: [
    { title: "À propos — Délice de Marrakech" },
    { name: "description", content: "L'histoire de Hanan, fondatrice de Délice de Marrakech, pâtisserie artisanale au cœur du Maroc." },
  ]}),
  component: About,
});

function About() {
  return (
    <div>
      <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Notre histoire</p>
          <h1 className="font-display text-4xl md:text-6xl mb-6">Une passion née à Marrakech</h1>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Depuis ses débuts, Délice de Marrakech crée des pâtisseries d'exception qui mêlent savoir-faire français et raffinement marocain. Chaque cake, chaque macaron est une œuvre unique, préparée avec les meilleurs ingrédients sélectionnés avec soin.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Notre équipe met tout son cœur à transformer vos moments en souvenirs sucrés inoubliables, partout au Maroc.
          </p>
        </div>
        <img src={cake} alt="Cake aux fruits rouges" loading="lazy" className="rounded-3xl shadow-elegant w-full h-auto" />
      </section>

      {/* HANAN STORY */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 relative">
            <div className="absolute -inset-4 bg-gradient-rose blur-3xl opacity-30 rounded-full" />
            <div className="relative">
              <img
                src={hanan}
                alt="Hanan, fondatrice et chef pâtissière de Délice de Marrakech"
                width={1024}
                height={1280}
                loading="lazy"
                className="rounded-3xl shadow-elegant w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 hidden md:flex items-center gap-2 bg-background px-5 py-3 rounded-full shadow-soft">
                <Heart className="w-4 h-4 text-primary fill-primary" />
                <span className="text-sm font-medium">Fait avec amour</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/70 backdrop-blur text-xs font-medium text-primary">
              <Sparkles className="w-3.5 h-3.5" /> Rencontrez la fondatrice
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Hanan, <em className="text-primary not-italic">l'âme</em> de Délice de Marrakech
            </h2>

            <div className="relative pl-6 border-l-2 border-primary/40">
              <Quote className="w-6 h-6 text-primary/40 absolute -left-3 -top-2 bg-background" />
              <p className="font-display text-xl md:text-2xl italic text-foreground/80 leading-relaxed">
                « Pâtisser, pour moi, c'est offrir un instant de douceur. Chaque création raconte une histoire — la mienne, et bientôt la vôtre. »
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Tout a commencé dans la petite cuisine familiale de Hanan, à Marrakech. Jeune fille passionnée par les saveurs et les couleurs de sa ville natale, elle passe ses week-ends à observer sa grand-mère pétrir, parfumer et dresser des douceurs pour les fêtes du quartier. C'est là, entre l'odeur de la fleur d'oranger et la chaleur du four, que naît une vocation.
              </p>
              <p>
                Après plusieurs années d'apprentissage auprès de chefs pâtissiers et une formation aux techniques françaises, Hanan décide de revenir aux sources. Elle imagine une pâtisserie à son image : <span className="text-foreground font-medium">délicate, élégante, profondément marocaine</span>, mais ouverte au monde. Des cakes design dignes des plus belles vitrines parisiennes, sublimés par les épices, les fruits et les fleurs du royaume.
              </p>
              <p>
                Aujourd'hui, Hanan dirige son atelier à Marrakech avec la même exigence qu'au premier jour : des ingrédients soigneusement sélectionnés, des recettes maison, et surtout, beaucoup d'amour dans chaque détail. Son rêve ? Que chacune de ses créations apporte un sourire — du mariage le plus prestigieux au simple goûter en famille — partout au Maroc.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/boutique" className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition shadow-soft">
                Découvrir ses créations
              </Link>
              <Link to="/contact" className="px-7 py-3.5 rounded-full border border-foreground/20 font-medium hover:bg-background/60 transition">
                Écrire à Hanan
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="container mx-auto px-4 lg:px-8 grid sm:grid-cols-3 gap-8 text-center">
          {[
            { n: "10+", l: "Années d'expérience" },
            { n: "5 000+", l: "Clients heureux" },
            { n: "100%", l: "Fait maison" },
          ].map(s => (
            <div key={s.l}>
              <p className="font-display text-5xl text-primary">{s.n}</p>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mt-2">{s.l}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
