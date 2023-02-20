import Container from "react-bootstrap/Container";
import NavBar from "./components/NavBar/NavBar";
import NavBarTop from "./components/NavBar/NavBarTop";
import Newsbar from "./components/Newsbar";
import HeaderMain from "./components/HeaderMain";
import FeaturedPhotos from "./components/FeaturedPhotos";

function App() {
  return (
    <Container fluid className="p-0">
      <Newsbar />
      <NavBarTop />
      <NavBar />
      <HeaderMain />
      <FeaturedPhotos />
    </Container>
  );
}

export default App;
