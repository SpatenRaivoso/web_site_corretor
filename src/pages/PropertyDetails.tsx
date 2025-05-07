
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Property, properties } from "@/utils/propertyData";
import PropertyHero from "@/components/property/PropertyHero";
import PropertyMedia from "@/components/property/PropertyMedia";
import PropertyDescription from "@/components/property/PropertyDescription";
import PropertyNotFound from "@/components/property/PropertyNotFound";

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);

  useEffect(() => {
    if (id) {
      const foundProperty = properties.find((p) => p.id === parseInt(id));
      if (foundProperty) {
        setProperty(foundProperty);
      }
    }
  }, [id]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {property ? (
          <>
            <PropertyHero property={property} />
            <PropertyMedia property={property} />
            <PropertyDescription property={property} />
          </>
        ) : (
          <div className="container mx-auto px-6 lg:px-0 py-20">
            <PropertyNotFound />
          </div>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PropertyDetails;
