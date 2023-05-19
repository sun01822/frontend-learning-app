const Card = ({ data }) => {
  return (
    <div className="relative">
      <img className="w-full h-56 shadow-md object-cover rounded-2xl object-center" src={data.image} alt="images" />
      <h1 className="text-2xl font-bold pt-6"><span className="text-green-500">{data.bold} </span>{data.title}</h1>
    </div>
  );
};

export default Card;