import AnimatedCard from "./AnimatedCard";
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const OurBestTeachers = () => {
  const cardData = [
    {
      name: 'John Doe',
      image: 'https://www.wgu.edu/content/dam/web-sites/blog-newsroom/blog/images/national/2020/march/6-ways-to-improve-online-teaching.jpg',
      facebookId: 'johndoe',
      twitterId: 'johndoe',
      googleId: "",
      linkedinId: "johndoe",
    },
    {
      name: 'Zara Rahman',
      image: 'https://img.freepik.com/free-photo/happy-teacher-talking-with-her-students-online_23-2148771465.jpg',
      facebookId: 'janesmith',
      twitterId: 'janesmith',
      googleId: "",
      linkedinId: ""
    },
    {
      name: 'Alish Anam',
      image: 'https://assets.entrepreneur.com/content/3x2/2000/20200323171735-GettyImages-1066557788.jpeg',
      facebookId: 'janesmith',
      twitterId: 'janesmith',
      googleId: "",
      linkedinId: ""
    },
    {
      name: 'Jane Smith',
      image: 'https://nafme.org/wp-content/uploads/2021/01/Black-teacher-with-headphones-teaching-online-credit-fizkes.jpg',
      facebookId: 'janesmith',
      twitterId: 'janesmith',
      googleId: "",
      linkedinId: ""
    },
  ];

  return (
    <>
      <div className="p-4 mt-48">
        <div className="flex items-center justify-center h-full">
          <div className="h-16 w-2 bg-green-500 m-2"></div><h1 className="text-4xl font-bold mb-4 text-center"><span className="text-green-500">Our</span> Best Teachers</h1>
        </div>
        <p className="text-xl text-center">They are adept at fostering interactive and dynamic learning environments that inspire and empower students.</p>
      </div>
      <div>
        <div>
          <Carousel autoPlay interval={3000} infiniteLoop>
            {cardData.map((card, index) => (
              <AnimatedCard
                key={index}
                name={card.name}
                image={card.image}
                facebookId={card.facebookId}
                twitterId={card.twitterId}
                googleId={card.googleId}
                linkedinId={card.linkedinId}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default OurBestTeachers;