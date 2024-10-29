import React from 'react';
import  assets from '../assets/Vector.png/../Vector2.png'; // Replace with actual icon path

const Scrollicon = () => {
  return (
    <div className="bg-white py-4">
      <div className="container mx-auto overflow-x-auto flex space-x-4 px-6">
        {[...Array(10)].map((_, i) => (
          <img key={i} src={'../assets/Vector.png'+'../assets/Vector2.png'} alt="" className="h-12" />

        ))}
      </div>
    </div>
  );
};

export default Scrollicon;
