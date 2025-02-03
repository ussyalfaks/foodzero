

export default function GridLayout ({img1, img2, col6, col3,  Htext, Ptext1, Ptext2, secHtext, secPtext1, secPtext2}) {
    return (
        <div className="min-h-[200px] md:flex items-center lg:py-8 ">
      <div className="md:grid md:grid-cols-12 md:gap-12 max-w-[90%] mx-auto my-8">

        <div className={`relative ${col6}`} >
          <img 
            src={img1}
            alt="image-grid-1" 
            className="w-full lg:h-[700px] object-contain rounded-lg mb-5 md:mb-0"
          />
          <div className='absolute bottom-6 left-6 text-gray-700'>
              <h2 className='text-xl lg:text-4xl md:pb-4 font-serif'>{Htext}</h2>
              <div className='flex gap-3 mt-2'>
                  <p>{Ptext1}</p>
                  <p>{Ptext2}</p>
              </div>
          </div>
        </div>

        <div className={`relative ${col3}`}>
          <img 
            src={img2}
            alt="image-grid-2" 
            className="w-full lg:h-[700px] object-contain rounded-lg md:mb-0"
          />
            <div className='absolute bottom-6 left-6 text-gray-700'>
                <h2 className='text-xl lg:text-4xl md:pb-4 font-serif'>{secHtext}</h2>
                <div className='flex gap-3 mt-2'>
                    <p>{secPtext1}</p>
                    <p>{secPtext2}</p>
                </div>
            </div>
        </div>

      </div>
    </div>
    )
}