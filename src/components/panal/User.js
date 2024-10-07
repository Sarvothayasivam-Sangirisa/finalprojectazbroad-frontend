import React, { useState } from 'react';
import HeroSection from '../pages/HeroSection';
import Plans from '../pages/Plans';
import Services from '../pages/Services';
import FAQ from '../pages/FAQ';
//import AR from '../pages/RoomDesign';
import Room from '../pages/CustomizeRoomSection';
import Chatbot from '../pages/Chatbot';


const User = () => {
  return (
    <div>
      <HeroSection />
      <Plans />
      <Services />
      <FAQ />
      <Room />
      <Chatbot/>
      
     
    </div>
  );
};

export default User;
