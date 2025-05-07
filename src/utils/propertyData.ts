
export interface Property {
  id: number;
  name: string;
  address: string;
  description: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: "Casa" | "Apartamento" | "Cobertura" | "Mansão";
  image: string;
  gallery?: string[];
}

// These would typically come from an API or database
export const properties: Property[] = [
  {
    id: 1,
    name: "Mansão Jardins",
    address: "Rua Oscar Freire, Jardins",
    description: "Mansão de luxo com piscina, cinema e amplo jardim no coração dos Jardins. Acabamentos premium, espaços amplos e iluminados, e localização exclusiva para o máximo de conforto e sofisticação. Perfeito para quem busca o melhor da vida urbana com privacidade e elegância.",
    price: "R$ 12.500.000",
    bedrooms: 5,
    bathrooms: 6,
    area: "780m²",
    type: "Mansão",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 2,
    name: "Apartamento Vila Nova",
    address: "Av. República do Líbano, Vila Nova Conceição",
    description: "Apartamento de alto padrão com vista panorâmica para o Parque Ibirapuera. Amplas suítes com closet, área gourmet integrada e acabamentos de luxo. Condomínio com estrutura completa de lazer e segurança 24 horas.",
    price: "R$ 8.900.000",
    bedrooms: 4,
    bathrooms: 3,
    area: "320m²",
    type: "Apartamento",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 3,
    name: "Cobertura Duplex",
    address: "Rua Haddock Lobo, Jardins",
    description: "Cobertura com amplo terraço, piscina privativa e acabamento premium. Espaço gourmet com vista para a cidade, elevador privativo e arquitetura contemporânea. Localização privilegiada próxima às melhores opções de gastronomia e compras.",
    price: "R$ 15.300.000",
    bedrooms: 4,
    bathrooms: 5,
    area: "450m²",
    type: "Cobertura",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 4,
    name: "Casa Alphaville",
    address: "Alphaville Residencial, Barueri",
    description: "Casa em condomínio fechado com infraestrutura completa de lazer e segurança. Projeto arquitetônico moderno com amplos espaços integrados, jardim bem cuidado e piscina. Perfeita para famílias que buscam qualidade de vida próximo à cidade.",
    price: "R$ 6.800.000",
    bedrooms: 5,
    bathrooms: 4,
    area: "650m²",
    type: "Casa",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&w=800&q=80",
    ],
  },
];
