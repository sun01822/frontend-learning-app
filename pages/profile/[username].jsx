import Banner from "@/components/profile/Banner";
import ProblemPosts from "@/components/profile/ProblemPosts";
import Skills from "@/components/profile/Skills";
import { useRouter } from "next/router";

const Profile = () => {
  const routes = useRouter();
  console.log(routes.query)
  return (
    <div>
      <Banner />
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 lg:col-span-4">
          <Skills />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <ProblemPosts />
        </div>
      </div>
    </div>
  );
};

export default Profile;
