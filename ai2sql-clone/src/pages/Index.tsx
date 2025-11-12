import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SQLGenerator from "@/components/SQLGenerator";
import Features from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <SQLGenerator />
        <Features />
      </main>
    </div>
  );
};

export default Index;
