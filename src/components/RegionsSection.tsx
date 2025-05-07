
import { MapPin, Home } from "lucide-react";

interface Region {
  id: number;
  name: string;
  description: string;
  image: string;
  type: string;
  priceRange: string;
}

const regions: Region[] = [
  {
    id: 1,
    name: "Vila Nova Conceição",
    description: "Bairro nobre com excelente infraestrutura e próximo ao Parque Ibirapuera.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
    type: "Apartamentos de Luxo",
    priceRange: "R$ 2M - R$ 15M",
  },
  {
    id: 2,
    name: "Alphaville",
    description: "Condomínios fechados de alto padrão com completa infraestrutura de lazer e segurança.",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800&q=80",
    type: "Casas e Mansões",
    priceRange: "R$ 2.5M - R$ 12M",
  },
  {
    id: 3,
    name: "Jardins",
    description: "Área nobre da cidade com arquitetura exclusiva e próximo aos melhores restaurantes e lojas.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
    type: "Apartamentos e Casas",
    priceRange: "R$ 3M - R$ 20M",
  },
  {
    id: 4,
    name: "Riviera de São Lourenço",
    description: "Condomínio de praia com infraestrutura completa e segurança 24h.",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80",
    type: "Casas de Praia",
    priceRange: "R$ 1.8M - R$ 10M",
  },
];

const RegionsSection = () => {
  return (
    <section id="regiões" className="py-20 bg-realty-gray-light">
      <div className="container mx-auto px-6 lg:px-0">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-4">
          Regiões Atendidas
        </h2>
        <div className="w-20 h-1 bg-realty-blue-dark mx-auto mb-6"></div>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Atuo nas regiões mais exclusivas, oferecendo imóveis que atendam às suas necessidades e estilo de vida.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {regions.map((region) => (
            <div 
              key={region.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative h-48">
                <img
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold mb-3">{region.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{region.description}</p>
                <div className="flex items-center gap-2 mb-2">
                  <Home className="h-4 w-4 text-realty-blue-dark" />
                  <span className="text-sm text-gray-700">{region.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-realty-blue-dark" />
                  <span className="text-sm text-gray-700">{region.priceRange}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionsSection;
