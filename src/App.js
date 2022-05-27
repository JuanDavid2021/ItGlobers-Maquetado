import { Copyright } from "./components/Copyright/Copyright";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Products } from "./components/Products/Products";
import { SocialMedia } from "./components/socialmedia/SocialMedia";

function App() {
  return (
    <div>
      <Header/>
      <Products/>
      <SocialMedia/>
      <Footer/>
      <Copyright/>
    </div>
  );
}

export default App;
