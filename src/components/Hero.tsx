import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroShape from "@/assets/hero-shape.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Orange diagonal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary origin-top-right transform rotate-12 translate-x-1/4 -translate-y-1/4"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-muted-foreground text-sm uppercase tracking-wider">
            與其追逐潮流，不如創造趨勢
          </p>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            <span className="text-foreground">Don't just</span>
            <br />
            <span className="text-foreground">Follow Trends</span>
            <br />
            <span className="text-primary">— Set Them</span>
          </h1>
          
          <Button 
            variant="outline" 
            className="group bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 py-6 text-lg"
          >
            Read More
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div className="relative flex items-center justify-center">
          <img 
            src={heroShape} 
            alt="3D Geometric Shape" 
            className="w-full max-w-lg animate-float"
          />
        </div>
      </div>
    </section>
  );
};
