
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Phone, MapPin, Mail } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Simulating form submission success
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      interest: "",
    });
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-0">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-4">
          Entre em Contato
        </h2>
        <div className="w-20 h-1 bg-realty-blue-dark mx-auto mb-6"></div>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Estou à disposição para ajudar você a encontrar o imóvel dos seus sonhos. Preencha o formulário abaixo ou entre em contato diretamente.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="lg:order-2">
            <div className="bg-realty-gray-light p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-playfair font-bold mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-md text-realty-blue-dark">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Telefone</h4>
                    <p className="text-gray-600">(11) 99999-9999</p>
                    <p className="text-gray-600">(11) 5555-5555</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-md text-realty-blue-dark">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Email</h4>
                    <p className="text-gray-600">contato@carlossilva.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-md text-realty-blue-dark">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Endereço</h4>
                    <p className="text-gray-600">
                      Av. Paulista, 1500, Conjunto 150<br />
                      Bela Vista, São Paulo - SP
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-lg mb-4">Horário de Atendimento</h4>
                <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                <p className="text-gray-600">Sábados: 9h às 13h (com agendamento)</p>
              </div>
            </div>
          </div>
          
          <div className="lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Digite seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-realty-blue-dark"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Digite seu email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-realty-blue-dark"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-realty-blue-dark"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="interest">Interesse</Label>
                  <select 
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-realty-blue-dark focus:border-transparent"
                    required
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="compra">Compra</option>
                    <option value="venda">Venda</option>
                    <option value="locacao">Locação</option>
                    <option value="investimento">Investimento</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Descreva o que você está procurando..."
                  value={formData.message}
                  onChange={handleChange}
                  className="border-gray-300 focus:border-realty-blue-dark min-h-[120px]"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-realty-blue-dark hover:bg-opacity-90"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
