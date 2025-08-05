import "./assets/css/App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import calcImg from "./assets/images/2024-06-05_17h25_55.png";

function App() {
  return (
    <>
      <Header
        title="React Counter"
        classHeader="header"
        classWrapper="wrapper"
        src={calcImg}
        alt="calculatrice"
        classTxt="titleHeader"
      />
      <Main classMain="main" classWrapper="wrapper" wrapMain="divCount" />
      <Footer />
    </>
  );
}

export default App;
