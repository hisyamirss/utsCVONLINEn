import React from 'react';
import Image from 'next/image'; // Import Image dari Next.js
import gaming from '../assets/gamingg.jpeg';
import photography from '../assets/photo.jpeg';
import movies from '../assets/movie.jpeg';
import music from '../assets/music.png';
import './hobbies.css'; // Import file CSS untuk styling

const MyGallery = () => {
  const Hobbies = [
    { name: "Gaming", image: gaming },
    { name: "Photography", image: photography },
    { name: "Movies", image: movies },
    { name: "Music", image: music },
  ];

  return (
    <section className="gallery-container">
      <h2 className="text-2xl font-bold mb-4">Hobbies</h2>
      <div className="gallery">
        {Hobbies.map((hobby, index) => (
          <div key={index} className="gallery-card">
            <Image src={hobby.image} alt={hobby.name} className="gallery-image" layout="responsive" width={150} height={100} />
            <div className="gallery-caption">{hobby.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyGallery;