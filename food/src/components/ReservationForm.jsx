import { useState } from 'react';

function ReservationForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');

  return (
    <div className="  bg-[#f3f4ed] py-24">

      <div className='ml-[25rem]'>
        <h1 className="text-3xl font-bold font-serif my-12 md:text-5xl mb-0">Make a Reservation</h1>
        <p className="text-gray-500 mb-8 mt-0">Get in touch with restaurant</p>
      </div>

      <div className='mx-[25px] flex'>
        <input 
          type="First_Name"
          placeholder='First Name'
          className='border border-green-900 w-[50%] my-4 mx-4 px-4 bg-transparent py-4'
          required
        />
        <input 
          type="Last Name" 
          className='border border-green-900 w-[50%] my-4 mx-4 px-4 bg-transparent py-4'
          placeholder='Last Name'
          required
        />
      </div>

      <div className='mx-[25px] flex items-center'>
      <input 
        type="Email"
        className='border border-green-900 w-full my-4 mx-4 px-4 bg-transparent py-4'
        placeholder='Email'
        required
      />
      </div>

      <div className='mx-[25px] flex items-center'>
        <input 
          type="Phone"
          className='border border-green-900 w-full my-4 mx-4 px-4 bg-transparent py-4'
          placeholder='Phone'
          required
         />
      </div>
      
     
      <div className=" md:flex items-center mx-[25px]">
        <input 
          type="date" 
          className="border border-green-900 w-[50%] my-4 mx-4 px-4 bg-transparent py-4" 
          value={date} 
          onChange={(e) => setDate(e.target.value)}
        />
        <select 
          className="border border-green-900 w-[50%] my-4 mx-4 px-4 bg-transparent py-4" 
          value={time} 
          onChange={(e) => setTime(e.target.value)}
        >
          <option value="">Select Time</option>
          <option value="6:00 pm">6:00 pm</option>
          <option value="7:00 pm">7:00 pm</option>
          <option value="8:00 pm">8:00 pm</option>
        </select>

      </div>

      <div className='mx-[25px] flex items-center'>
      <select 
          className="border border-green-900 w-full my-4 mx-4 px-4 bg-transparent py-4" 
          value={guests} 
          onChange={(e) => setGuests(e.target.value)}
        >
          <option value="">Guests</option>
          <option value="1 Person">1 Person</option>
          <option value="2 Person">2 Person</option>
          <option value="3 Person">3 Person</option>
          <option value="4 Person">4 Person</option>
        </select>

      </div>

      <button 
        className="bg-green-900 text-white px-6 py-3 rounded-md hover:bg-green-700 ml-[39rem]" 
        onClick={() => alert(`Reservation made for ${guests} at ${time} on ${date}`)}
      >
        Book Now
      </button>
    </div>
  );
}

export default ReservationForm;
