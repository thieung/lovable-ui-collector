import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Copy, Check } from "lucide-react";
import { toast } from "sonner";

const SQLGenerator = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) {
      toast.error("Please enter a description");
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      const sampleSQL = `SELECT u.name, u.email, COUNT(o.id) as total_orders, SUM(o.amount) as total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE o.created_at >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)
GROUP BY u.id, u.name, u.email
HAVING total_spent > 100
ORDER BY total_spent DESC
LIMIT 10;`;
      
      setOutput(sampleSQL);
      setIsGenerating(false);
      toast.success("SQL query generated successfully!");
    }, 1500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Try It <span className="gradient-text">Live</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Describe your query in plain English and watch the magic happen
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="glass-card p-6 rounded-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-semibold text-lg">Natural Language Input</h3>
              <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                English
              </span>
            </div>
            
            <Textarea
              placeholder="Example: Get the top 10 customers who spent more than $100 in the last 30 days..."
              className="min-h-[250px] resize-none bg-background/50 border-border/50"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            
            <Button 
              onClick={handleGenerate}
              disabled={isGenerating}
              variant="gradient"
              className="w-full"
              size="lg"
            >
              {isGenerating ? (
                <>
                  <Sparkles className="w-5 h-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate SQL
                </>
              )}
            </Button>
          </div>

          {/* Output Section */}
          <div className="glass-card p-6 rounded-2xl space-y-4 animate-glow">
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-semibold text-lg">Generated SQL</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">
                  PostgreSQL
                </span>
                {output && (
                  <Button
                    onClick={handleCopy}
                    variant="ghost"
                    size="sm"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-accent" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                )}
              </div>
            </div>
            
            <div className="min-h-[250px] p-4 bg-muted/50 rounded-lg border border-border/50 overflow-x-auto">
              {output ? (
                <pre className="text-sm font-mono text-foreground whitespace-pre-wrap break-words">
                  {output}
                </pre>
              ) : (
                <div className="flex items-center justify-center h-[250px] text-muted-foreground">
                  Your SQL query will appear here...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SQLGenerator;
