import Jumbotron from "./Jumbotron";
import About from "./About";
import RelatedNews from "./RelatedNews";
import RelatedVideos from "./RelatedVideos";

const HomePage = () => {
  return (
    <main>
      <Jumbotron />
      <About />
      <RelatedNews />
      <RelatedVideos />
    </main>
  );
};

export default HomePage;
