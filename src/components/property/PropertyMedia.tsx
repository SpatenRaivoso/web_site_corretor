
import { Property } from "@/utils/propertyData";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GalleryHorizontal, GalleryVertical } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface PropertyMediaProps {
  property: Property;
}

const PropertyMedia = ({ property }: PropertyMediaProps) => {
  const [activeTab, setActiveTab] = useState<"photos" | "3d">("photos");

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 lg:px-0">
        <div className="flex items-center justify-center gap-4 mb-8">
          <Button
            variant={activeTab === "photos" ? "default" : "outline"}
            className={activeTab === "photos" ? "bg-realty-blue-dark" : "border-realty-blue-dark text-realty-blue-dark"}
            onClick={() => setActiveTab("photos")}
          >
            <GalleryHorizontal className="mr-2 h-4 w-4" />
            Galeria de Fotos
          </Button>
          <Button
            variant={activeTab === "3d" ? "default" : "outline"}
            className={activeTab === "3d" ? "bg-realty-blue-dark" : "border-realty-blue-dark text-realty-blue-dark"}
            onClick={() => setActiveTab("3d")}
          >
            <GalleryVertical className="mr-2 h-4 w-4" />
            Tour Virtual 3D
          </Button>
        </div>

        {activeTab === "photos" && property.gallery && (
          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {property.gallery.map((photo, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-[16/9] items-center justify-center p-0">
                          <img 
                            src={photo} 
                            alt={`${property.name} - Foto ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="static translate-y-0 mr-2" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        )}

        {activeTab === "3d" && (
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-lg shadow-xl overflow-hidden">
              <iframe 
                src="https://my.matterport.com/show/?m=SxQL3iGyoDo" 
                frameBorder="0" 
                allowFullScreen 
                className="absolute top-0 left-0 w-full h-full"
                title={`${property.name} - Tour Virtual 3D`}
              ></iframe>
            </div>
            <div className="mt-4 text-center text-gray-600">
              <p className="font-medium">{property.name} - Tour Virtual 3D</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyMedia;
