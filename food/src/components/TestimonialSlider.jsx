import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Avatar from "../assets/main.jpg"
import Avatar1 from "../assets/main1.jpg"
import  blockquoteImg from "../assets/quo.png"

const testimonials = [
  {
    text: "Food Zero transformed my understanding of farm-to-table dining. Their commitment to organic ingredients and zero-waste practices creates an unforgettable culinary experience.",
    name: "John Doe",
    role: "Food Critic",
    image: Avatar
  },
  {
    text: "The seasonal tasting menu at Food Zero is a masterpiece of sustainable cuisine. Each dish tells a story of local farmers and artisanal producers who share their vision.",
    name: "Emma Wright",
    role: "Restaurant Reviewer",
    image: Avatar1
  },
  {
    text: "From their homegrown herbs to their composting program, Food Zero sets the standard for eco-conscious dining without compromising on flavor or creativity.",
    name: "Alex Johnson",
    role: "Culinary Blogger",
    image: Avatar
  }
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="relative">
        <blockquote className="text-2xl font-serif mb-12 text-start md:text-start md:text-3xl">
          `{testimonials[current].text}`
        </blockquote>
        <img src={blockquoteImg} alt="" className='absolute bottom-11 -right-2 -z-10 w-56 h-44' />
        
       <div className='flex justify-between items-center'>
       <div className="flex items-center justify-center gap-4">
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h3 className="text-xl font-bold">{testimonials[current].name}</h3>
            <p className="text-gray-600">{testimonials[current].role}</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <button
            onClick={prev}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <span className="text-lg font-medium">
            {current + 1} / {testimonials.length}
          </span>
          <button
            onClick={next}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
       </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;