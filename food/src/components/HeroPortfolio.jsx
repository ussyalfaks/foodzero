import HeroBg from "../assets/portfiolioImages/HeroBg.png";

const HeroPortfolio = () => {
  return (
    <>
      <div className="w-full ">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeroBg})`,
          }}
        />
        <div className="flex flex-col justify-center px-8 -z-10 py-52 text-center">
          <h1 className="text-white text-7xl font-serif mb-6 ">
            Deep Sea Snow White <br />
            God Fillet
          </h1>
        </div>
      </div>
    </>
  );
};

export default HeroPortfolio;
