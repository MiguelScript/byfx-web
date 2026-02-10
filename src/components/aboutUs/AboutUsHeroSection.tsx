export function AboutUsHeroSection() {
  return (
    <div className="pt-8 px-12 relative">
      <div className="absolute top-[296px] left-1/2 -translate-x-1/2 w-[400px] h-[270px] bg-[#D9D9D9] bg-opacity-50 blur-[180px]"></div>
      <div className="flex">
        <div className="max-w-[1000px] mx-auto relative pb-2">
          <div className="mb-2 pt-4 flex justify-center flex-col items-center">
            <p className="text-[#FFFFFF4D] mb-4 text-lg xl:text-xl font-normal">
              ¿Quiénes somos?
            </p>
            <h1 className="hero-title  text-center tracking-[0.015em] text-7xl xl:text-7xl xl:leading-[60px] 2xl:text-[130px] 2xl:leading-[130px] font-mono">
              una <span className="gradient-text">productora,</span>
            </h1>
            <h1 className="hero-title tracking-[0.015em] text-7xl xl:text-7xl xl:leading-[60px] 2xl:text-[130px] 2xl:leading-[100px] font-mono">
              múltiples soluciones
            </h1>
          </div>
          <p className="px-8 text-[#FFFFFFB2] text-center xl:text-[20px] font-light">
            <strong className="font-semibold">BYFX </strong>
            simplifica el acceso a la producción audiovisual profesional para
            marcas, empresas y equipos creativos, ofreciendo servicios
            innovadores que se adaptan a distintos proyectos, estructuras y
            objetivos.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="w-[60%] h-[3px] bg-gradient-to-r from-[#191919] via-[#D9D9D9] to-[#191919]"></div>
      </div>
    </div>
  );
}
