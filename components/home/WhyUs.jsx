import React from "react";

const WhyUs = () => {
  const points = [
    {
      number: ".01",
      heading: "Experience Yourself",
      description:
        "You can ask question to experts and you can increase your knowledge level more higher than previous.",
    },
    {
      number: ".02",
      heading: "Online Learning",
      description:
        "Online learning is a form of education that takes place over the internet, allowing students to access course materials and interact with instructors and peers remotely.",
    },
    {
      number: ".03",
      heading: "Experience Teachers",
      description:
        "Experienced teachers have the knowledge, skills, and strategies to effectively facilitate learning and support student growth and development.",
    },
  ];
  return (
    <>
      <div className="bg-green-200/80 mt-10">
        <div className="flex items-center justify-center h-full">
          <div className="h-20 w-2 bg-green-500 mt-16 mr-2"></div>
          <h1 className="text-4xl font-bold mb-4 text-center mt-16">
            Few Reasons
            <br />
            <span className="text-green-500">Why Choose Us</span>
          </h1>
        </div>
        <div className="flex mt-16">
          <div className="w-1/2 p-8">
            {points.map((point, index) => (
              <div key={index} className="mb-4">
                <h1 className="text-4xl font-bold text-green-600">
                  {point.number}
                </h1>
                <h2 className="text-2xl font-bold mb-2">{point.heading}</h2>
                <p>{point.description}</p>
              </div>
            ))}
          </div>
          <div className="hidden w-1/2 md:flex justify-center items-center mt-8 mr-16 mb-24">
            <img
              src="/images/whyus.jpg"
              alt="Oval Image"
              className="w-full h-96 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
