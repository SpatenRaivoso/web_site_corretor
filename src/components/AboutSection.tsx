
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section
      id="sobre"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-6 lg:px-0">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-4">
          Sobre Mim
        </h2>
        <div className="w-20 h-1 bg-realty-blue-dark mx-auto mb-12"></div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 animate-fade-in">
            <p className="text-lg text-gray-700 mb-6">
              Com mais de 15 anos de experiência no mercado imobiliário de alto padrão, sou especializado em encontrar o imóvel perfeito para cada cliente, considerando suas necessidades específicas e estilo de vida.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Minha abordagem combina conhecimento profundo do mercado local, atenção meticulosa aos detalhes e um compromisso inabalável com a satisfação do cliente. Como corretor certificado e membro da Associação Brasileira do Mercado Imobiliário, garanto que cada transação seja conduzida com o mais alto nível de profissionalismo e integridade.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="text-center">
                <h3 className="text-3xl font-playfair font-bold text-realty-blue-dark">350+</h3>
                <p className="text-gray-600">Imóveis Vendidos</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-playfair font-bold text-realty-blue-dark">15+</h3>
                <p className="text-gray-600">Anos de Experiência</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-playfair font-bold text-realty-blue-dark">98%</h3>
                <p className="text-gray-600">Clientes Satisfeitos</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=600&h=400"
                alt="Condomínio de luxo"
                className="w-full h-48 object-cover rounded-md shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&h=400"
                alt="Residencial exclusivo"
                className="w-full h-48 object-cover rounded-md shadow-md"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=1000&h=300"
                alt="Interior luxuoso"
                className="w-full h-48 object-cover rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
