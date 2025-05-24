import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductCard = ({
  title,
  description,
  image,
  url,
  delay = 0,
}: {
  title: string;
  description: string;
  image: string;
  url: string;
  delay?: number;
}) => {
  return (
    <Card
      className="overflow-hidden flex flex-col h-full border-border/40 opacity-0 animate-fade-in card-hover shadow-lg shadow-azynctra-accent/10 hover:shadow-azynctra-accent/30"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-foreground/70 mb-6 flex-grow">{description}</p>
        <Button asChild className="mt-auto w-full group">
          <a href={url} target="_blank" rel="noopener noreferrer">
            Visit {title}
            <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </Button>
      </div>
    </Card>
  );
};

const ProductsSection = () => {
  const products = [
    {
      title: "Mahasen AI",
      description:
        "Manage customer conversations across WhatsApp, Facebook, and Instagram in one unified platform. Streamline your customer communications and boost engagement.",
      image: "/images/mahasen-preview.jpg",
      url: "http://Mahasen47.azynctra.com",
    },
    {
      title: "Gyma",
      description:
        "A trending fitness app for guided workouts and progress tracking. Personalized workout plans, real-time analytics, and expert guidance to achieve your fitness goals.",
      image: "/images/gyma-preview.jpg",
      url: "http://Gyma.azynctra.com",
    },
  ];

  return (
    <section id="products" className="section-with-bg py-16 dark:bg-azynctra-muted/30 bg-gradient-light dark:bg-gradient-dark">
      {/* Tech-inspired background with subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.03] dark:opacity-[0.07] pointer-events-none"></div>
      
      {/* Animated technical elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Circuit-like paths */}
        <div className="absolute top-1/4 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute top-2/3 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-secondary/20 to-transparent"></div>
        <div className="absolute right-[10%] top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent"></div>
        <div className="absolute left-[25%] top-1/2 bottom-0 w-px bg-gradient-to-b from-primary/20 to-transparent"></div>
        
        {/* Animated node points */}
        <div className="absolute top-1/4 left-0 w-2 h-2 rounded-full bg-primary/30 animate-pulse-gentle"></div>
        <div className="absolute top-2/3 right-0 w-2 h-2 rounded-full bg-secondary/30 animate-pulse-gentle delay-1"></div>
        <div className="absolute top-10 right-[10%] w-2 h-2 rounded-full bg-accent/30 animate-pulse-gentle delay-2"></div>
        <div className="absolute top-1/2 left-[25%] w-2 h-2 rounded-full bg-primary/30 animate-pulse-gentle delay-3"></div>
        
        {/* Remove glowing blobs */}
      </div>

      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Products</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Discover our innovative AI-powered products designed to transform
            businesses and enhance customer experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              image={product.image}
              url={product.url}
              delay={0.3 + index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>

    {/* Mahasen AI Spotlight Section */}
    <section id="mahasen-ai-spotlight" className="section-with-bg py-16 bg-gradient-to-br from-azynctra-muted/40 to-background dark:from-azynctra-muted/60 dark:to-background relative">
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/mahasen-preview.jpg"
              alt="Mahasen AI Preview"
              className="rounded-2xl shadow-xl w-full max-w-md border border-border/30"
            />
          </div>
          {/* Content */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Mahasen AI: Product Spotlight</h3>
              <p className="text-lg text-foreground/80 mb-4">
                Mahasen AI is your intelligent digital shield, designed to manage your communications and protect your attention. It creates a personal AI clone that learns your response style, autonomously handles routine messages, and only notifies you about what truly matters.
              </p>
            </div>
            {/* Key Features */}
            <div>
              <h4 className="text-xl font-semibold mb-2">Key Features</h4>
              <ul className="space-y-2 pl-4 list-disc text-foreground/70">
                <li><b>Personalized AI Clone:</b> Learns how you respond and adapts to your communication style.</li>
                <li><b>Intelligent Filtering:</b> Only forwards important messages, reducing digital overwhelm.</li>
                <li><b>Autonomous Handling:</b> Manages routine communications without your input.</li>
                <li><b>Smart Forwarding:</b> Brings only critical matters to your attention.</li>
                <li><b>Privacy First:</b> Shields your digital life, letting you focus on what matters most.</li>
              </ul>
            </div>
            {/* How It Works */}
            <div>
              <h4 className="text-xl font-semibold mb-2">How Mahasen AI Works</h4>
              <ol className="list-decimal pl-6 space-y-1 text-foreground/70">
                <li><b>Learns Your Style:</b> Adapts to your unique way of communicating.</li>
                <li><b>Filters Noise:</b> Uses advanced AI to determine what's important.</li>
                <li><b>Handles Routine Tasks:</b> Replies and manages messages automatically.</li>
                <li><b>Notifies You Only When Needed:</b> Ensures you're only disturbed for critical matters.</li>
              </ol>
            </div>
            {/* Roadmap */}
            <div>
              <h4 className="text-xl font-semibold mb-2">Mahasen AI Roadmap</h4>
              <ul className="space-y-1 pl-4 list-disc text-foreground/70">
                <li><b>Now:</b> Intent detection and personalization engine complete; memory management in progress.</li>
                <li><b>Coming Soon:</b> Email assistant MVP, Google Calendar integration, alarm clock, and desktop environment support.</li>
              </ul>
            </div>
            {/* Why Different */}
            <div>
              <h4 className="text-xl font-semibold mb-2">Why Mahasen AI is Different</h4>
              <p className="text-foreground/70">
                Unlike traditional assistants, Mahasen AI acts as a true digital shield—protecting your time and attention from the chaos of constant notifications and digital clutter.
              </p>
            </div>
            {/* Vision */}
            <div>
              <h4 className="text-xl font-semibold mb-2">Vision for Mahasen AI</h4>
              <p className="text-foreground/70">
                In the next three years, Mahasen AI aims to become essential for anyone seeking to reclaim their focus, reduce digital distractions, and have an intelligent digital representative.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
