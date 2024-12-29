import React from 'react';
import { Helmet } from 'react-helmet-async';
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
    <>
      <Helmet>
        <title>About Mike Ninness - Veteran Writer & Washington Wordsmiths Founder</title>
        <meta name="description" content="Learn about Mike Ninness, a retired Air Force veteran, published author, and founder of Washington Wordsmiths. Discover his journey from military service to storytelling." />
        <meta name="keywords" content="Mike Ninness biography, Air Force veteran writer, Washington Wordsmiths founder, Maryville University author" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Mike Ninness - Veteran Writer & Washington Wordsmiths Founder" />
        <meta property="og:description" content="Learn about Mike Ninness, a retired Air Force veteran, published author, and founder of Washington Wordsmiths. Discover his journey from military service to storytelling." />
        <meta property="og:image" content="%PUBLIC_URL%/og-image.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Mike Ninness - Veteran Writer & Washington Wordsmiths Founder" />
        <meta name="twitter:description" content="Learn about Mike Ninness, a retired Air Force veteran, published author, and founder of Washington Wordsmiths. Discover his journey from military service to storytelling." />
        <meta name="twitter:image" content="%PUBLIC_URL%/og-image.png" />

        <link rel="canonical" href="https://yourdomain.com/about" />
        
        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Person",
              "name": "Mike Ninness",
              "description": "Retired Air Force veteran, author, and founder of Washington Wordsmiths",
              "jobTitle": "Author",
              "alumniOf": "Air Force",
              "affiliation": [{
                "@type": "Organization",
                "name": "Washington Wordsmiths",
                "description": "A writer's group at Washington Public Library",
                "foundingDate": "2017"
              }, {
                "@type": "Organization",
                "name": "Maryville University"
              }],
              "award": "Published in Maryville University's literary book Magnolia",
              "workExample": [{
                "@type": "CreativeWork",
                "name": "Laughter and Tears - A Story about Virginia Berning",
                "publisher": {
                  "@type": "Organization",
                  "name": "Maryville University"
                }
              }, {
                "@type": "CreativeWork",
                "name": "Family",
                "publisher": {
                  "@type": "Book",
                  "name": "The Bridges Between Us",
                  "datePublished": "2019-06"
                }
              }]
            }
          })}
        </script>
      </Helmet>
      <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 p-6 transition-all duration-1000">
      <section className={sectionClasses}>
        <div className={gradientBorderClasses}></div>
        <h1 className={headingClasses}>
          <span className="absolute -left-4 -top-1 text-6xl text-orange-300 opacity-20">
            ❝
          </span>
          About Mike Ninness
          <span className="absolute -right-4 -bottom-1 text-6xl text-orange-300 opacity-20">
            ❞
          </span>
        </h1>

        <div className="flex flex-col items-center">
          <div className="relative mb-8 group">
            <div className="absolute inset-0 border-4 border-yellow-900 rounded-full transform rotate-6 group-hover:rotate-0 transition-all duration-500"></div>
            <img
              src={clientImage}
              alt="Mike Ninness"
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
    </>
  );
};

export default AboutPage;
