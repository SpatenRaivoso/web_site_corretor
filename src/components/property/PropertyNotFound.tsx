
import { Button } from "@/components/ui/button";

const PropertyNotFound = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Imóvel não encontrado</h1>
      <p className="mb-8">O imóvel que você está procurando não está disponível.</p>
      <Button 
        onClick={() => window.history.back()}
        className="bg-realty-blue-dark hover:bg-opacity-90"
      >
        Voltar para imóveis
      </Button>
    </div>
  );
};

export default PropertyNotFound;
