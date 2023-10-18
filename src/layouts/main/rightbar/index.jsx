import Footer from "./footer";
import Premium from "./premium";
import Search from "./search";
import Topics from "./topics";
import WhoFallow from "./who-fallow";

const Rightbar = () => {
  return (
    <aside className="w-[350px] mr-2.5">
      <Search />
      <Premium />
      <Topics />
      <WhoFallow />
      <Footer />
    </aside>
  );
};
export default Rightbar;
