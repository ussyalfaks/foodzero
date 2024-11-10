import Bigmeal from '../assets/bigmeal.png';
import Spices1 from '../assets/spices1.png';
import Spices2 from '../assets/spices2.png';
import Spices3 from '../assets/spices3.png';
import Meal1 from '../assets/meal1.png';
import Meal2 from '../assets/meal2.png';




const Hero = () => {
  return (
    <>
        <div className='md:pb-7 pt-36 md:px-9 text-white bg-[#233000]'>
                <div className='flex flex-col md:flex-row items-center mx-11 gap-5'>
            <div>
                <h1 className='font-semibold  text-4xl md:text-7xl  font-serif capitalize text-center md:text-start'>Healthy Eating is important part of lifestyle</h1>
                <p className='md:w-96 text-center md:text-start'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea explicabo vitae autem vel tempora.
                </p>
        </div>
            <img src={Bigmeal} alt="" className=' w-96 md:mx-0 md:w-2/5 md:ml-auto ' />
        </div>
            <div className='flex gap-4 justify-center my-2 -bottom-32 right-28 md:ml-44 absolute md:-bottom-2 md:right-72 items-center'>
                    <img src={Spices1} alt="" className='  w-20  md:w-36 ' />
                    <img src={Spices2} alt="" className=' md w-20  md:w-36 ' />
                    <img src={Spices3} alt="" className=' md w-20  md:w-36 ' />
            </div>
        </div>
    

<div className='flex gap-28 flex-col md:flex-row justify-center p-10 bg-[#233000] text-white pb-28 pt-36'>
        <div className='flex flex-col justify-center'>
        <img src={Meal1} alt="" className='w-[32em]' />
          <div className=''>
            <h1 className=' font-semibold text-4xl font-serif my-8 w-80'>Start to plan your diet today</h1>
            <p className='w-5/6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
          </div>
        </div>

        <div className=''>
          <div>
            <p className='w-96 my-7 font-serif'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
          </div>
        <img src={Meal2} alt="" className='w w-96' />
        </div>
      </div>

    </>
  )
}

export default Hero