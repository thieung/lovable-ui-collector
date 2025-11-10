import { Database, Zap, Shield, Code2, Layers, Sparkles } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Multi-Database Support",
    description: "Works with PostgreSQL, MySQL, MongoDB, SQL Server, and more. One tool for all your databases.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Generate complex queries in seconds, not hours. Save time and boost productivity instantly.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data never leaves your browser. Enterprise-grade security with zero data retention.",
  },
  {
    icon: Code2,
    title: "Query Optimization",
    description: "Get optimized queries with best practices built-in. Improve performance automatically.",
  },
  {
    icon: Layers,
    title: "SQL Explain",
    description: "Understand complex queries with AI-powered explanations in plain English.",
  },
  {
    icon: Sparkles,
    title: "Smart Suggestions",
    description: "Intelligent autocomplete and query suggestions based on your database schema.",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to work with SQL queries efficiently
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
