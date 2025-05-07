
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Property, properties } from "@/utils/propertyData";

const PropertiesSection = () => {
  const [activeTab, setActiveTab] = useState("todos");
  
  const filteredProperties = activeTab === "todos" 
    ? properties 
    : properties.filter(property => property.type.toLowerCase() === activeTab);

  return (
    <section id="imóveis" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-0">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-4">
          Imóveis em Destaque
        </h2>
        <div className="w-20 h-1 bg-realty-blue-dark mx-auto mb-6"></div>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Conheça alguns dos imóveis exclusivos que tenho disponíveis neste momento.
        </p>

        <Tabs defaultValue="todos" className="w-full mb-12">
          <div className="flex justify-center">
            <TabsList className="bg-realty-gray-light">
              <TabsTrigger value="todos" onClick={() => setActiveTab("todos")}>Todos</TabsTrigger>
              <TabsTrigger value="casa" onClick={() => setActiveTab("casa")}>Casas</TabsTrigger>
              <TabsTrigger value="apartamento" onClick={() => setActiveTab("apartamento")}>Apartamentos</TabsTrigger>
              <TabsTrigger value="cobertura" onClick={() => setActiveTab("cobertura")}>Coberturas</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="todos" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="casa" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="apartamento" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="cobertura" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center">
          <Button className="bg-realty-blue-dark hover:bg-opacity-90 group">
            Ver Todos os Imóveis
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 transition-transform hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-64">
        <div className="absolute top-4 right-4 bg-realty-blue-dark text-white px-3 py-1 text-sm font-medium rounded-md">
          {property.type}
        </div>
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-playfair font-bold mb-2">{property.name}</h3>
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="h-4 w-4 text-realty-blue-dark" />
          <span className="text-sm text-gray-700">{property.address}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{property.description}</p>
        <div className="flex justify-between items-center mb-6">
          <div>
            <span className="text-sm text-gray-500">Preço:</span>
            <div className="text-lg font-medium text-realty-blue-dark">{property.price}</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-sm font-medium">{property.bedrooms}</div>
              <div className="text-xs text-gray-500">Quartos</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium">{property.bathrooms}</div>
              <div className="text-xs text-gray-500">Banheiros</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium">{property.area}</div>
              <div className="text-xs text-gray-500">Área</div>
            </div>
          </div>
        </div>
        <Link to={`/imovel/${property.id}`}>
          <Button variant="outline" className="w-full border-realty-blue-dark text-realty-blue-dark hover:bg-realty-blue-dark hover:text-white">
            Ver detalhes
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PropertiesSection;
