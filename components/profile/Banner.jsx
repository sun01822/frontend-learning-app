import Image from "next/image";
import Rakib from "../../public/images/rakib.jpg";

const Banner = () => {
  return (
    <div className="flex flex-wrap gap-3 items-center justify-between bg-white mt-2 p-4 lg:p-10 rounded-lg">
      <div className="flex gap-3">
        <Image
          className="w-[90px] h-[90px] rounded-full border-2 border-primary"
          src={Rakib}
          alt="Rakib"
        />
        <div>
          <h3 className="text-xl font-semibold">Md.Rakibuzzaman</h3>
          <p className="text-sm pt-1">Web Developer</p>
          <p className="text-sm pt-1">Varendra University</p>
        </div>
      </div>
      <div className="min-w-[300px] bg-base-300 p-4 rounded-lg">
        <div className="flex justify-between border-b border-gray-400 pb-3">
          <p className="font-semibold">Total Earning</p>
          <p className="font-bold">110 tk</p>
        </div>
        <div className="flex justify-between pt-3">
          <p className="font-semibold">Level</p>
          <p className="font-bold">1</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
