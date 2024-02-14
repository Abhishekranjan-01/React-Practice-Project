import Post from "./Post";
import Sidebar from "./Sidebar";

const MainSectionContainer = () => {
  return (
    <section className="flex flex-row gap-4 relative top-10">
      <Sidebar />
      <Post />
    </section>
  );
};

export default MainSectionContainer;
