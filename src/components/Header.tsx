import { Link } from "@tanstack/react-router";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/boutique", label: "Boutique" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-2xl lg:text-3xl text-primary tracking-tight">Délice de Marrakech</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <Link key={l.to} to={l.to} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/panier" className="relative p-2 rounded-full hover:bg-muted transition-colors">
            <ShoppingBag className="w-5 h-5" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">{count}</span>
            )}
          </Link>
          <button className="md:hidden p-2" onClick={() => setOpen(o => !o)} aria-label="Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {links.map(l => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-2 text-foreground/80 hover:text-primary">
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
