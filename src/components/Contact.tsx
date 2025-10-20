import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background/50 h-screen flex flex-col justify-center">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <div className="mb-16">
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
            聯絡我們
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground">
            GET IN TOUCH
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-left">
          <div className="flex items-start gap-4">
            <Mail className="text-primary h-8 w-8 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-foreground">Email</h3>
              <p className="text-muted-foreground">hello@kevin.tech</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="text-primary h-8 w-8 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-foreground">Phone</h3>
              <p className="text-muted-foreground">(123) 456-7890</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="text-primary h-8 w-8 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-foreground">Location</h3>
              <p className="text-muted-foreground">Taipei, Taiwan</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-lg text-muted-foreground mb-6">Ready to start a project? Let's talk.</p>
          <Button
            variant="primary-outline"
            className="rounded-full px-8 py-6 text-lg"
          >
            Send a Message
          </Button>
        </div>
      </div>
    </section>
  );
};