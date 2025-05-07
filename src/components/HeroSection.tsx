
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&w=1600&q=80')",
      }}
    >
      <div className="container mx-auto px-6 lg:px-0 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300"
              alt="Carlos Silva - Corretor de Imóveis"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left text-white">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-shadow-lg">
              Carlos Silva
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 font-light text-shadow">
              Especialista em Imóveis de Alto Padrão
            </h2>
            <p className="text-lg mb-8 max-w-lg text-shadow">
              Transformando sonhos em endereços há mais de 15 anos, 
              com expertise em residências e empreendimentos exclusivos.
            </p>
            <Button className="bg-white text-realty-blue-dark hover:bg-realty-blue-dark hover:text-white transition-colors group">
              Conheça meu trabalho
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#sobre" className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
