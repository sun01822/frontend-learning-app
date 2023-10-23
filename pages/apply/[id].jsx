import Rakib from "../../public/images/rakib.jpg";
import { AiOutlineStar, AiOutlineSend } from "react-icons/ai";
import Image from "next/image";
import Rating from "@/components/common/Rating";
import Link from "next/link";

const Apply = () => {
  const Topics = ["Programming", "Javascript", "Website"];
  return (
    <div className="bg-white border-b py-6 px-5 rounded-lg mt-2">
      {/* Header */}
      <div className="flex flex-wrap gap-2 justify-between">
        <div className="flex items-center gap-2">
          <Link href="/profile/rakib38">
            <Image
              src={Rakib}
              className="w-10 h-10 rounded-full border"
              alt="Rakib"
            />
          </Link>
          <div>
            <div className="flex items-center gap-3">
              <Link href="/profile/rakib38">
                <p className="font-semibold">Md.Rakibuzzaman</p>
              </Link>
              <Rating />
              (4.4)
            </div>
            <p className="text-sm">10 min ago</p>
          </div>
        </div>
        <div>
          <p className=" text-gray-800 font-semibold">৳ 100-160 tk</p>
        </div>
      </div>
      {/* Problem */}
      <h3 className="text-sm font-semibold pt-4 text-gray-400">Problem</h3>
      <h2 className="text-xl font-semibold text-primary">
        Can anyone teach me hoasting topic in Javascript.
      </h2>
      <p className="mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        recusandae velit harum temporibus facilis in quaerat consequatur,
        adipisci reiciendis officiis suscipit veniam omnis! Quo natus dolorum,
        quod ad, quisquam odit ea, consequuntur autem modi totam doloribus
        excepturi sed. Nihil enim molestiae rem rerum est iusto earum nesciunt
        beatae sapiente magni.
      </p>
      <div className="flex flex-wrap text-sm gap-3 mt-3 text-gray-400">
        {Topics.map((data, index) => (
          <p key={index}>#{data}</p>
        ))}
      </div>
      <br />
      <hr />
      <br />

      <form>
        <h3 className="font-semibold mb-2">
          Write Description <span>(21/2000)</span>
        </h3>
        <textarea
          placeholder="About your experience"
          className="textarea textarea-sm  rounded-lg w-full bg-base-200 focus:outline-none"
        ></textarea>
        <h3 className="font-semibold mb-2 mt-4">
          Price <span>(Max 150tk)</span>
        </h3>
        <input
          type="number"
          placeholder="tk"
          className="bg-base-200 focus:outline-none rounded-md py-2 px-3"
        />
        <div className="mt-10">
          <div className="flex items-center gap-4">
            <Link href="#">
              <button className="btn btn-sm gap-2 btn_sar text-white rounded-full px-3">
                Apply Job <AiOutlineSend />
              </button>
            </Link>
            <Link href="/feed">
              <button className="btn btn-sm gap-2 bg-gray-700 hover:bg-gray-800 text-white rounded-full px-3">
                Cancle
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Apply;
