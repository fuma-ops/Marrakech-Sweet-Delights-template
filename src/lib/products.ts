import heroCake from "@/assets/hero-cake.jpg";
import macarons from "@/assets/macarons.jpg";
import cakeWedding from "@/assets/cake-wedding.jpg";
import cakeChocolate from "@/assets/cake-chocolate.jpg";
import viennoiserie from "@/assets/viennoiserie.jpg";
import cupcakes from "@/assets/cupcakes.jpg";
import cakeBerry from "@/assets/cake-berry.jpg";
import chocolats from "@/assets/chocolats.jpg";

export type Category = "cakes" | "macarons" | "viennoiserie" | "cupcakes" | "chocolats";

export type Product = {
  id: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  description: string;
  badge?: string;
};

export const categories: { id: Category; name: string; image: string }[] = [
  { id: "cakes", name: "Cakes Design", image: cakeWedding },
  { id: "macarons", name: "Macarons", image: macarons },
  { id: "viennoiserie", name: "Viennoiseries", image: viennoiserie },
  { id: "cupcakes", name: "Cupcakes", image: cupcakes },
  { id: "chocolats", name: "Chocolats", image: chocolats },
];

export const products: Product[] = [
  { id: "p1", name: "Red Velvet Framboise", category: "cakes", price: 380, image: heroCake, description: "Génoise red velvet moelleuse, crème mascarpone et framboises fraîches.", badge: "Best-seller" },
  { id: "p2", name: "Cake Royal Roses", category: "cakes", price: 950, image: cakeWedding, description: "Pièce d'exception 3 étages, roses en sucre et feuille d'or 24k." },
  { id: "p3", name: "Fondant Chocolat Noir", category: "cakes", price: 290, image: cakeChocolate, description: "Cœur fondant chocolat 70%, ganache miroir, framboises." },
  { id: "p4", name: "Naked Cake Fruits Rouges", category: "cakes", price: 420, image: cakeBerry, description: "Génoise vanille, crème chantilly, baies de saison, fleurs comestibles." },
  { id: "p5", name: "Boîte 12 Macarons", category: "macarons", price: 180, image: macarons, description: "Assortiment des saveurs signature : rose, pistache, chocolat, framboise.", badge: "Nouveau" },
  { id: "p6", name: "Croissants Pur Beurre (x6)", category: "viennoiserie", price: 90, image: viennoiserie, description: "Feuilletage artisanal, beurre AOP, dorés à la perfection." },
  { id: "p7", name: "Cupcakes Fraise (x6)", category: "cupcakes", price: 150, image: cupcakes, description: "Génoise vanille, glaçage chantilly fraise, paillettes d'or." },
  { id: "p8", name: "Coffret Chocolats Pralinés", category: "chocolats", price: 240, image: chocolats, description: "Sélection de 9 chocolats fins, pralinés et ganaches maison." },
];

export const getProduct = (id: string) => products.find(p => p.id === id);
