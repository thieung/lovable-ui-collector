import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-primary-glow/10">
        <img 
          src={heroBg} 
          alt="Tech background" 
          className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay"
        />
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-card rounded-full">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">Trusted by 50,000+ users worldwide</span>
        </div>
        
        <h1 className="mb-6 text-5xl md:text-7xl font-heading font-bold leading-tight">
          Generate Complex SQL in
          <br />
          <span className="gradient-text">10 Seconds</span>
        </h1>
        
        <p className="mb-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Transform natural language into powerful SQL queries instantly. 
          No coding required, just describe what you need.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="xl" variant="gradient" className="group">
            Try for Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="xl" variant="glass">
            Watch Demo
          </Button>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { value: "50,000+", label: "Active Users" },
            { value: "75,000+", label: "Queries Generated" },
            { value: "25,000h+", label: "Hours Saved" },
          ].map((stat, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl">
              <div className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
