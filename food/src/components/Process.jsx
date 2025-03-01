import palm from "../assets/palm.png"
import slice from "../assets/slice.png"
import bake from "../assets/bake.png"
import pickle from "../assets/pickle.png"
import rosemary from "../assets/rosemary.png"

const Process = () => {
  return (
    <>
        <div className="mt-[100px]">
            <div>
              <img
                src={palm} 
                alt="palm"
                className="w-[300px] float-end relative mt-[-200px]"
              />
            </div>
           <h1 className="text-7xl font-bold text-center pb-[100px] ml-[200px] mt-[200px]">Sophisticated Process</h1>

            <div className="flex ml-[120px] pb-[40px]">
                <div>
                  <img
                      src={slice} 
                      alt="slice"
                      className="w-[400px] h-[350px]"
                    />
                </div>
                
                <div className="ml-[100px] mt-[100px]">
                    <h1 className="text-5xl font-semibold mb-[10px]">01.Slice</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur 
                      adipiscing elit. <br /> Purus lorem id pentibus imperiet. Turpis egestas <br /> ultricies purus auctor tinidunt lacus nunc. Convallis  <br />pellentesque quis fringilla sagittis. Egestas in risus sit <br /> nunc nunc, arcu donec nam etiam. 
                      </p>
                </div>
            </div>
            <div className="flex mt-[60px]">
                <div className=" ml-[120px] pb-[40px]">
                  <div className=" mt-[100px] mb-[20px]">
                      <h1 className="text-5xl font-semibold mb-[10px]">03.Bake</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. <br /> Purus lorem id pentibus imperdiet.  
                        </p>
                  </div>
                  <div>
                    <img
                        src={bake} 
                        alt="bake"
                        className="w-[400px] h-[350px]"
                      />
                  </div>
                </div>
                <div className=" ml-[200px] pb-[40px] mt-[20px]">
                  <div>
                    <img
                        src={pickle} 
                        alt="pickle"
                        className="w-[400px] h-[350px]"
                      />
                  </div>  
                  <div className=" mt-[20px] ml-[80px]">
                      <h1 className="text-5xl font-semibold mb-[10px]">02.Pickled</h1>
                      <p>Lorem ipsum dolor sit amet,<br /> consectetur 
                        adipiscing elit. Purus lorem  <br />id pentibus imperdiet. 
                        </p>
                  </div>
                </div> 
           </div>
           <div>
             <img
               src= {rosemary}
               alt= "rosemary"
               className="w-[200px]" 
             />
           </div>
       </div>
          
    </>
  )
}

export default Process