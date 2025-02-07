import Cheifimg from "../assets/Cheifimg.png"
import Tomaimg from "../assets/Tomaimg.png"
import Mangerpic from "../assets/Mangerpic.png"
import Cookimg from "../assets/Cookimg.png"

const Story = () => {
  return (
    <>
      <div className="mt-[550px] flex ml-[70px] mb-[100px]">
          <div className="mt-[200px]">
              <h1 className=" font-serif text-6xl md:text-6xl lg:text-7xl mt-8">Our Story</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus <br />
                lorem id penatibus imperdiet. Turpis egestas ultricies purus <br />
                auctor tindunt lacus nunc.
              </p>
          </div>
          <div>
              <img 
               src={Cheifimg}
               alt="cheif img"
               className="w-[600px] h-[400px] ml-[30px]"
              />
          </div>
      </div>
        <div className="absolute">
            <img 
              src={Tomaimg}
              alt="toma img"
              className="w-[300px] h-[250px] ml-[300px] mt-[-600px]"
            />
        </div>
      <div className="mt-[200px] flex">
          <div className="ml-[90px] ">
            <h1 className="text-4xl font-semibold">Resturant Manager</h1>
            <p className="ml-[110px] font-semibold mt-[20px]">Carson Hugn</p>
            <img
            src={ Mangerpic}
            alt="manger pic"
            className="w-[350px] h-[400px] mt-[20px]"
            />
          </div>
          <div className="mt-[100px] text-xl ml-[200px]">
            <p>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit.Et in sed in pellentensque ornare <br /> nunc nisl</p>
          </div>
      </div>
      <div className="mt-[200px] flex">
          <div className="mt-[70px] text-xl ml-[200px] text-right">
            <p>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit.Et in sed in pellentensque ornare <br /> nunc nisl. Augue habitant accumsan, ut <br />parturient orci ac congue mi
            </p>
          </div>
          <div className="ml-[90px] ">
            <h1 className="text-5xl font-bold ml-[20px] mt-[-300px]">Executive Chef</h1>
            <p className="ml-[110px] font-semibold mt-[20px]">Jane Cooper</p>
            <img
            src={Cookimg}
            alt="manger pic"
            className="w-[350px] h-[400px] mt-[20px]"
            />
          </div>
      </div>
    </>
  )
}

export default Story