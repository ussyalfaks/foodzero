import breadwhite from "../assets/portfiolioImages/breadwhite.png";
import PreviousNext from "../assets/portfiolioImages/PreviousNext.png";
import Image1 from "../assets/portfiolioImages/Image1.png";
import Image2 from "../assets/portfiolioImages/Image2.png";

const SinglePortfolioBody = () => {
  return (
    <>
      <div className=" overflow-hidden w-full">
        {/* First Section */}
        <div className="block">
          <div className=" block md:flex justify-end w-full">
            <div className=" mr-auto ml-auto   md:absolute top-[630px] z-10 left-44 w-[320px]">
              <img src={Image1} alt="Image1 . img" className=" " />
            </div>

            <div className="ml-[120px] md:justify-end text-justify  mt-10 mr-32">
              <h1 className="text-[30px] ">Melt in Your Mouth</h1>

              <p className="text-[12px] mt-3 ">
                Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit.
              </p>

              <p className="text-[12px] mt-3">
                Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit.
                At aliquam, porro voluptatibus <br />
                dolorum architecto atque illo? Quibusdam
                <br /> assumenda sapiente earum quia pariatur.
              </p>
            </div>
          </div>
          <div className="block md:flex  mb-9">
            <div className="w-[90%] md:w-[50%] ml-auto mr-auto  mt-32">
              <img src={Image2} alt=" Image . img" />
            </div>

            <div className=" ml-[150px] md:absolute right-16 top-[1400px]">
              <h1 className="text-[30px] md:text-[30px]">The Best Teste</h1>
              <p className="text-[10px]  md:text-[12px] block ">
                Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit.
              </p>
            </div>
          </div>
        </div>

        {/* secoond section */}
        <div>
          <div className=" ml-[150px] mt-14 md:ml-[500px]  ">
            <p className=" text-[10px] md:text-[12px] mt-3">
              Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit.
              At aliquam, porro voluptatibus e <br />
              dolorum architecto atque illo? Quibusdam
              <br /> assumenda sapiente earum quia pariatur.
            </p>
            <h1 className="text-[25px] md:text-[30px] mt-3">
              Cooking Suggestion
            </h1>
            <p className="text-[10px] md:text-[12px] mt-3 mb-5">
              Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit.
            </p>
          </div>

          <div className="w-[90%]  md:w-[60%] ml-auto mr-auto">
            <img src={breadwhite} alt="breadwhite img" />
          </div>
          <div className="w-full">
            <img src={PreviousNext} alt="previousNext . img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePortfolioBody;
