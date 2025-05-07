
const Tour3DSection = () => {
  return (
    <section id="tour 3d" className="py-20 bg-realty-gray-light">
      <div className="container mx-auto px-6 lg:px-0">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-4">
          Tour Virtual 3D
        </h2>
        <div className="w-20 h-1 bg-realty-blue-dark mx-auto mb-6"></div>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Explore nossos imóveis através de uma experiência imersiva. Navegue pelos ambientes e conheça cada detalhe sem sair de casa.
        </p>

        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-lg shadow-xl overflow-hidden">
            <iframe 
              src="https://my.matterport.com/show/?m=SxQL3iGyoDo" 
              frameBorder="0" 
              allowFullScreen 
              className="absolute top-0 left-0 w-full h-full"
              title="Tour Virtual 3D"
            ></iframe>
          </div>
          <div className="mt-6 text-center text-gray-600">
            <p className="font-medium">Mansão Jardins - Tour Virtual 3D</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tour3DSection;
