import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/50 h-screen flex flex-col justify-center">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
              關於我們
            </p>
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              ABOUT US
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              We are a team of passionate designers and developers dedicated to creating beautiful and functional web experiences. Our mission is to help businesses grow by leveraging the power of modern web technologies.
            </p>
            <p className="text-muted-foreground text-lg mb-6">
              With years of experience in the industry, we have a proven track record of delivering high-quality products that meet and exceed our clients' expectations.
            </p>
            <Button 
              variant="primary-outline" 
              className="group rounded-full px-8 py-6 text-lg"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop" 
              alt="Team working"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};