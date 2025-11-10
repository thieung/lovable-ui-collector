import { Button } from "@/components/ui/button";
import logo from "@/assets/ai2sql-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src={logo} alt="AI2SQL Logo" className="w-10 h-10" />
            <span className="text-xl font-heading font-bold">
              AI<span className="gradient-text">2SQL</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#docs" className="text-sm font-medium hover:text-primary transition-colors">
              Docs
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="gradient" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
