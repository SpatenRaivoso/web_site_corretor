
import { Property } from "@/utils/propertyData";
import { MapPin } from "lucide-react";

interface PropertyHeroProps {
  property: Property;
}

const PropertyHero = ({ property }: PropertyHeroProps) => {
  return (
    <section
      className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${property.image}')`,
      }}
    >
      <div className="container mx-auto px-6 lg:px-0 relative z-10 text-white">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-2">
          {property.name}
        </h1>
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="h-5 w-5" />
          <p className="text-lg">{property.address}</p>
        </div>
        <div className="flex flex-wrap gap-6 items-center">
          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
            <p className="text-sm">Preço</p>
            <p className="text-xl font-bold">{property.price}</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
            <p className="text-sm">Quartos</p>
            <p className="text-xl font-bold">{property.bedrooms}</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
            <p className="text-sm">Banheiros</p>
            <p className="text-xl font-bold">{property.bathrooms}</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
            <p className="text-sm">Área</p>
            <p className="text-xl font-bold">{property.area}</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
            <p className="text-sm">Tipo</p>
            <p className="text-xl font-bold">{property.type}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyHero;
