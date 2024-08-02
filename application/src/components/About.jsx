import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-1">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Welcome to Travel Buddy</h2>
            <p className="text-lg">
              Our mission is to make discovering the best hotels, restaurants, and famous places easier and more enjoyable for you. Whether you're traveling to a new city or looking for a hidden gem in your own neighborhood, we're here to help you find the perfect place to stay and dine.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
            <p className="text-lg">
              We were created with the goal of providing a seamless and user-friendly platform for exploring hotel and restaurant options. Our team of dedicated developers and travel enthusiasts wanted to simplify the process of finding and booking the best accommodations and dining experiences.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
