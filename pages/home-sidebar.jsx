import dynamic from "next/dynamic";
import Seo from "../components/Seo";
import HomeSidebar from "../components/pages/home-sidebar";

const Home = () => {
  return (
    <>
      <Seo pageTitle="Anasayfa" />
      <HomeSidebar />
    </>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
