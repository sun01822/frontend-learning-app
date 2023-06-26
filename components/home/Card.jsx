const Card = ({ data }) => {
  return (
    <div className="relative">
      <img className="w-full h-56 shadow-md object-cover rounded-2xl object-center" src={data.image} alt="images" />
      <h1 className="text-2xl font-bold pt-6"><span className="text-green-500">{data.bold} </span>{data.title}</h1>
      <p className="m-10 text-left text-gray-700 font-semibold tracking-tight md:tracking-wide">{data.description}</p>
    </div>
  );
};

export default Card;