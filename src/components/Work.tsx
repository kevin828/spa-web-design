import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
  },
  {
    title: "Brand Identity",
    category: "Design & Strategy",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=600&fit=crop"
  },
  {
    title: "AI Integration",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop"
  },
  {
    title: "Finance and Insurance",
    category: "Fintech",
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?w=800&h=600&fit=crop"
  },
  {
    title: "Fashion and Beauty",
    category: "E-commerce & Lifestyle",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop"
  },
  {
    title: "Education and Charity",
    category: "Non-profit",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop"
  }
];

export const Work = () => {
  return (
    <section id="work" className="py-24 bg-background/50 h-screen overflow-y-auto">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
            精選案例
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground">
            WORK
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer animate-in zoom-in-90 duration-500"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-primary text-sm font-medium mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-foreground text-2xl font-bold">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="group bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 py-6 text-lg"
          >
            View All Work
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
