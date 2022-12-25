import dynamic from "next/dynamic";
import Seo from "../components/Seo";
import HomeSidebar from "../components/pages/home-sidebar";

const index = () => {
  return (
    <>
      <Seo pageTitle="Anasayfa" />
      <HomeSidebar />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
