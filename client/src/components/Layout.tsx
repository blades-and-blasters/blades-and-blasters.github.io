// =============================================================================
// Layout.tsx — Holonet Terminal sidebar layout
// Fixed left sidebar + scrollable main content area
// =============================================================================

import { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  Swords,
  Zap,
  Wrench,
  BookOpen,
  Home,
  ChevronLeft,
  ChevronRight,
  Shield,
  Star,
  Menu,
  Package,
  Sword,
  ScrollText,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/", icon: <Home size={18} /> },
  { label: "Classes", href: "/classes", icon: <Swords size={18} /> },
  { label: "Stances", href: "/stances", icon: <Shield size={18} /> },
  { label: "Force Abilities", href: "/force-abilities", icon: <Zap size={18} /> },
  { label: "Weapons", href: "/weapons", icon: <Sword size={18} /> },
  { label: "Armor", href: "/armor", icon: <Shield size={18} /> },
  { label: "Items", href: "/items", icon: <Package size={18} /> },
  { label: "Gadgets", href: "/gadgets", icon: <Wrench size={18} /> },
  { label: "Skills", href: "/skills", icon: <Star size={18} /> },
  { label: "Rules", href: "/rules", icon: <BookOpen size={18} /> },
  { label: "Changelog", href: "/changelog", icon: <ScrollText size={18} /> },
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full flex flex-col transition-all duration-200",
          "bg-sidebar border-r border-sidebar-border",
          collapsed ? "w-16" : "w-56",
          "lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Logo / Title */}
        <div className="flex items-center gap-3 px-4 py-5 border-b border-sidebar-border min-h-[64px]">
          <div className="w-8 h-8 rounded flex items-center justify-center bg-primary/20 border border-primary/40 shrink-0">
            <Swords size={16} className="text-primary" />
          </div>
          {!collapsed && (
            <div className="overflow-hidden">
              <div className="text-sm font-bold text-foreground leading-tight font-[Rajdhani] tracking-wide uppercase">
                Blades &amp; Blasters
              </div>
              <div className="text-xs text-muted-foreground">Holonet Terminal</div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 overflow-y-auto">
          <ul className="space-y-1 px-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <span
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-all duration-150 cursor-pointer select-none",
                      isActive(item.href)
                        ? "bg-primary/15 text-primary border border-primary/30"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground border border-transparent"
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="shrink-0">{item.icon}</span>
                    {!collapsed && (
                      <span className="font-medium truncate">{item.label}</span>
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Collapse toggle (desktop only) */}
        <div className="hidden lg:flex border-t border-sidebar-border p-2">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-sidebar-accent transition-colors"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div
        className={cn(
          "flex-1 flex flex-col min-h-screen transition-all duration-200",
          collapsed ? "lg:ml-16" : "lg:ml-56"
        )}
      >
        {/* Mobile top bar */}
        <header className="lg:hidden flex items-center gap-3 px-4 py-3 border-b border-border bg-card sticky top-0 z-30">
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
          <span className="font-bold text-foreground font-[Rajdhani] tracking-wide uppercase text-sm">
            Blades &amp; Blasters
          </span>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
