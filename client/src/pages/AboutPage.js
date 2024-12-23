import React from 'react';
import clientImage from '../assets/MikeN.png';

// Reusable style classes
const sectionClasses =
  "w-full max-w-4xl bg-white/95 p-8 mb-12 rounded-lg shadow-lg transition-all duration-300 ease-in-out border-2 border-yellow-900 relative hover:shadow-2xl";
const gradientBorderClasses =
  "absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-900 via-orange-300 to-yellow-900";
const headingClasses =
  "text-4xl font-serif font-bold text-center mb-8 text-yellow-950 relative";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 p-6 transition-all duration-1000">
      <section className={sectionClasses}>
        <div className={gradientBorderClasses}></div>
        <h1 className={headingClasses}>
          <span className="absolute -left-4 -top-1 text-6xl text-orange-300 opacity-20">
            ❝
          </span>
          About Mike.N
          <span className="absolute -right-4 -bottom-1 text-6xl text-orange-300 opacity-20">
            ❞
          </span>
        </h1>

        <div className="flex flex-col items-center">
          <div className="relative mb-8 group">
            <div className="absolute inset-0 border-4 border-yellow-900 rounded-full transform rotate-6 group-hover:rotate-0 transition-all duration-500"></div>
            <img
              src={clientImage}
              alt="Mike Ninnes"
              className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full border-4 border-white shadow-lg object-cover transform group-hover:scale-105 transition-all duration-500"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl font-serif text-gray-700 leading-relaxed text-center mb-6">
              Mike is a husband, father, grandfather and retired Air Force member from Washington, Missouri. Mike grew up loving westerns and SF, including: The Lone Ranger, Fury, Wanted Dead or Alive, The Virginian, Star Trek, The Time Tunnel, The Outer Limits, The Twilight Zone, and One Step Beyond.
            </p>
            
            <p className="text-xl font-serif text-gray-700 leading-relaxed text-center mb-6">
              Mike's love of storytelling began in early childhood when he told his older brother bedtime adventures. Maryville University chose his short story, Laughter and Tears - A Story about Virginia Berning for publication by the university's literary book Magnolia.
            </p>
            
            <p className="text-xl font-serif text-gray-700 leading-relaxed text-center">
              In 2017, he and his son helped start Washington Wordsmiths, a writer's group in the Washington Public Library. His short story, Family, was included in the first Wordsmiths' anthology, The Bridges Between Us, independently published in June, 2019.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
