import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const data = [
  {
    img: 'https://www.shutterstock.com/image-vector/basketball-shot-astronaut-vector-illustration-600nw-1915910149.jpg',
    name: 'National Basketball Player',
    review: 'Team - Maharashtra',
  },
  {
    img: 'https://www.euroschoolindia.com/wp-content/uploads/2023/07/academic-success.jpg',
    name: 'AIR-6',
    review: 'Indian Institute of Aircraft Engineering',
  },
  {
    img: 'https://www.euroschoolindia.com/wp-content/uploads/2023/07/academic-success.jpg',
    name: 'AIR-1421',
    review: 'JEE Mains',
  },
  {
    img: 'https://www.euroschoolindia.com/wp-content/uploads/2023/07/academic-success.jpg',
    name: 'AIR-13581',
    review: 'JEE Advanced',
  },
  {
    img: 'https://avatars.githubusercontent.com/u/41718343?s=280&v=4',
    name: 'Rating: 1655',
    review: 'LeetCode',
  },
];

const Achievement = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: data.length >= 3 ? 3 : data.length,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: data.length >= 2 ? 2 : data.length,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-10">
      <div className="w-11/12 md:w-3/4 mx-auto">
        {/* Heading and Description */}
        <div className="relative text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-serif text-gray-800 relative inline-block">
            Achievements
            <span className="block h-1 w-20 bg-gradient-to-r from-teal-400 to-blue-500 absolute left-1/2 transform -translate-x-1/2 mt-2"></span>
          </h2>
          <p className="text-gray-600 text-md mt-5 animate-fadeIn italic">
            "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."
            <span className="block mt-2 font-semibold">– Albert Schweitzer</span>
          </p>
        </div>
        <Slider {...settings}>
          {data.map((achievement, index) => (
            <div
              key={index}
              className="bg-white h-[450px] text-black rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-16"
            >
              <div className="h-56 rounded-t-xl bg-gradient-to-b from-[#f0f4f8] to-[#e8eef3] flex justify-center items-center overflow-hidden">
                <img
                  src={achievement.img || 'https://via.placeholder.com/150'}
                  alt={achievement.name}
                  className="h-44 w-44 rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold text-center">
                  {achievement.name || 'Unnamed Achievement'}
                </p>
                <p className="text-center text-gray-600">
                  {achievement.review || 'No description available.'}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Achievement;
