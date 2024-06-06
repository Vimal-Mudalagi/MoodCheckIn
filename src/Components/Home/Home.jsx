import React, { useState } from 'react';
import './Content.css';
import { DatePicker } from 'antd';
import Card from '../Card/Card';


const Home = () => {

  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="bg-[#f1f2ec]">
      <h1 className='text-4xl font-bold text-center p-2'>
        Mood<span className='text-[#a486f4]'>CheckIn</span>
      </h1>
      <p className='text-2xl py-4 text-center font-bold'>Track Your Emotions</p>

      {/* <div className='flex justify-center items-center font-bold'>
        <h1>Hi, Vimal!</h1>
      </div> */}

      <div className="flex justify-center items-center  p-5 px-3 ">
        <DatePicker onChange={date => setSelectedDate(date)} />
      </div>

      <h2 className='text-4xl font-bold text-center p-2'>How are you feeling today?</h2>


      <div className='flex items-center flex-col'>
        <div className='bg-[#f1f2ec] flex justify-around flex-wrap '>

          <div

            className="transform hover:scale-110 cursor-pointer">
            <Card imgSrc="https://img.freepik.com/free-vector/hand-drawn-hungry-emoji-illustration_23-2151048232.jpg?t=st=1712043818~exp=1712047418~hmac=3d9788210e670b2fcb5ecc1e8a1d85ab5216eead44fc39dba7e8722c620220c4&w=826"
              imgAlt="Card Image"
              title="Happy"
              id="1"
            />
          </div>
          <div className="hover:scale-110  cursor-pointer">
            <Card imgSrc="https://img.freepik.com/premium-psd/sad-face-emoji-isolated_23-2151138732.jpg?w=826"
              imgAlt="Card Image"
              title="Sad"
              id="2"
            />
          </div>
          <div className="flex flex-col items-centre hover:scale-110 cursor-pointer">
            <Card imgSrc="https://img.freepik.com/free-vector/hand-drawn-hate-emoji-illustration_23-2151048241.jpg?t=st=1712043074~exp=1712046674~hmac=b8ea6d50ce32d01f6d1287c112839343a354c44ee4c2c9c80ec84b269a4793ef&w=740"
              imgAlt="Card Image"
              title="Angry"
              id="3"
            />
          </div>
          <div className="card  hover:scale-110  cursor-pointer">
            <Card imgSrc="https://img.freepik.com/free-vector/listening-music-emoji-illustration_23-2151300273.jpg?w=826&t=st=1712043435~exp=1712044035~hmac=e26b81b2d1e3ed3d06b181663ff8fc76b9780081940105324489bc0fb41efbbd"
              imgAlt="Card Image"
              title="Joy"
              id="4"
            />

          </div>
          <div className="card  hover:scale-110  cursor-pointer">
            <Card imgSrc="https://img.freepik.com/free-vector/hate-emoji-illustration_23-2151063090.jpg?t=st=1712043517~exp=1712047117~hmac=926b99f82c6734d40b5647bd559c4f0afa4f4130d1f7f83ace07aa0287a19e3d&w=826"
              imgAlt="Card Image"
              title="Frustration"
              id="5"
            />
          </div>
          <div className="card  hover:scale-110  cursor-pointer">
            <Card imgSrc="https://img.freepik.com/free-vector/birthday-emoji-illustration_23-2151300261.jpg?w=826&t=st=1712043600~exp=1712044200~hmac=82b8ec6a2265980cd4f27d5d1a01a7c4891567525766e47e0e82e82c1692db17"
              imgAlt="Card Image"
              title="Surprise"
              id="6"
            />
          </div>

        </div>

      </div>

    </div>
  );


}

export default Home;
