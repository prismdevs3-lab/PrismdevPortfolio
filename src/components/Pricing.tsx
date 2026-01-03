import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$2,500",
    period: "one-time",
    description: "Perfect for small businesses and landing pages",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO setup",
      "Contact form",
      "2 revision rounds",
      "1 month support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$7,500",
    period: "one-time",
    description: "Ideal for growing companies with custom needs",
    features: [
      "Up to 15 pages",
      "Custom UI/UX design",
      "Advanced SEO",
      "CMS integration",
      "API integrations",
      "5 revision rounds",
      "3 months support",
      "Analytics setup",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "project-based",
    description: "Full-scale solutions for large organizations",
    features: [
      "Unlimited pages",
      "Custom web application",
      "E-commerce features",
      "Advanced security",
      "Database design",
      "Unlimited revisions",
      "12 months support",
      "Dedicated team",
      "Priority response",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Clear, honest pricing with no hidden fees. Choose the plan that fits your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "card-gradient border-2 border-primary shadow-glow"
                  : "bg-card border border-border"
              } hover-lift`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                {plan.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="font-heading text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground ml-2">/{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full"
                size="lg"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
