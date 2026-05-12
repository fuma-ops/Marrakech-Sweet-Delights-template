import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Phone, MapPin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/40 border-t border-border mt-24">
      <div className="container mx-auto px-4 lg:px-8 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h3 className="font-display text-2xl text-primary mb-4">Délice de Marrakech</h3>
          <p className="text-sm text-muted-foreground max-w-sm">
            Pâtisserie artisanale à Marrakech. Cakes design disponibles uniquement à Marrakech. Macarons & viennoiseries livrés partout au Maroc.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/boutique" className="text-muted-foreground hover:text-primary">Boutique</Link></li>
            <li><Link to="/a-propos" className="text-muted-foreground hover:text-primary">À propos</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary" /><span>Gueliz, Marrakech</span></li>
            <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 text-primary" /><span>+212 6 12 34 56 78</span></li>
            <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 text-primary" /><span>contact@delice-marrakech.ma</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Délice de Marrakech. Tous droits réservés.
      </div>
    </footer>
  );
}
