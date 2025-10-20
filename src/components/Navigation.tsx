import { Button, buttonVariants } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Navigation = ({ activeSection, onNavigate }) => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 lg:px-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
            <span className="text-background font-bold text-xl">KH</span>
          </div>
          <span className="text-foreground font-semibold text-lg">Kevin Tech</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item.href.substring(1));
              }}
              className={cn(
                "text-foreground hover:text-primary transition-colors font-medium",
                activeSection === item.href.substring(1) && "text-primary"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden lg:flex rounded-full px-6">
            <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>
            Contact Us
            </a>
          </Button>

          {/* Mobile Navigation Trigger */}
          <div className="lg:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-foreground hover:bg-primary hover:text-primary-foreground"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-background border-l border-border">
                <SheetHeader>
                  <SheetTitle className="text-foreground text-left">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(item.href.substring(1));
                        setSheetOpen(false);
                      }}
                      className={cn("text-2xl font-semibold text-foreground hover:text-primary transition-colors",
                        activeSection === item.href.substring(1) && "text-primary"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
