import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroShape from "@/assets/hero-shape.png";

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen overflow-y-auto overflow-x-hidden flex items-center">
      {/* Orange diagonal accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary origin-top-right transform rotate-12 translate-x-1/2 -translate-y-1/4 md:w-1/3 md:translate-x-1/4"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center text-left">
          <div className="space-y-6 flex flex-col items-start">
            <p className="text-muted-foreground text-sm uppercase tracking-wider ">
              與其追逐潮流，不如創造趨勢
            </p>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-foreground">Doing things over and over again, </span>
              <span className="text-foreground lg:block">and Expecting different results </span>
              <span className="text-primary">— Insanity</span>
            </h1>
            
            <Button 
              variant="primary-outline" 
              className="group rounded-full px-8 py-6 text-lg"
            >
              Read More
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative flex items-center justify-center mt-8 lg:mt-0">
            <img 
              src={heroShape} 
              alt="3D Geometric Shape" 
              className="w-full max-w-lg animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
