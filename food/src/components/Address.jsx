
import glasscup from "../assets/glasscup.png"
import housemerrow from "../assets/housemerrow.png"

const Address = () => {
  return (
    <>
    <div className="mt-[450px] mb-[100px]">

        <div className="   md:ml-[5rem] flex">
            <img src= {glasscup} alt="" className="sm:w-[25px]       md:w-[45%]     lg:w-[45%]" />

           <div className="sm:        md:mt-[229px] ml-[97px]">
             <p className="sm:text-[10px]           md:text-[26px]"> We can be contacted via <br/> email <span className="text-lime-600">info@foodzero.com</span> <br/> or telephone on <span className="text-lime-600">+86 852 346 000</span>  </p>
           </div>

        </div>
        
    </div>
    
    <div>

        <div className="sm:sm:ml-0    md:ml-[5rem] flex mb-[34px]">

          <div className="mt-[180px]">
            <p className="text-lime-600 text-[26px]">We are located in 1959 Sepulveda Blvd. Culver <br/> City, CA. 90230 </p>

            <button className="mt-[10px]"> View in maps </button>

          </div>

          <img src={housemerrow} alt=""  className="sm:w-[25px]        md:w-[45%] ml-[50px] h-[450px]"/>

        </div>










    </div>
    
    </>
  )
}

export default Address