
import { Property } from "@/utils/propertyData";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface PropertyDescriptionProps {
  property: Property;
}

const PropertyDescription = ({ property }: PropertyDescriptionProps) => {
  return (
    <section className="py-12 bg-realty-gray-light">
      <div className="container mx-auto px-6 lg:px-0">
        <h2 className="text-3xl font-playfair font-bold mb-6">Descrição do Imóvel</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">{property.description}</p>
        
        <h3 className="text-2xl font-playfair font-bold mb-4">Características</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-realty-blue-dark rounded-full"></div>
            <p>Quartos amplos</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-realty-blue-dark rounded-full"></div>
            <p>Acabamento premium</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-realty-blue-dark rounded-full"></div>
            <p>Localização privilegiada</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-realty-blue-dark rounded-full"></div>
            <p>Ampla área de lazer</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-realty-blue-dark rounded-full"></div>
            <p>Segurança 24h</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-realty-blue-dark rounded-full"></div>
            <p>Arquitetura moderna</p>
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-realty-blue-dark hover:bg-opacity-90 group">
            Entre em contato para agendar uma visita
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertyDescription;
