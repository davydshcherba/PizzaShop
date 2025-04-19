import "./App.css";
import Aside from "../../Components/Aside/Aside";
import { Search } from "lucide-react";
import Card from "../../Components/Card/Card";

function App() {
  return (
    <div className="app-container">
      <Aside />
      <main>
        <header>
          <div>
            <p>Hello John</p>
            <h2>Welcome Back</h2>
          </div>
          <div className="search-container">
            <Search className="search-icon" color="#61656F" />
            <input type="text" placeholder="Search..." />
          </div>
        </header>
        <div className="banner">
          <div className="inform">
            <h1>
              Make Your First Order and Get <span>50% Off</span>
            </h1>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without.
            </p>
            <button>Order Now</button>
          </div>
          <div className="banner-img">
            <img src="/vippng 1.png" alt="banner_img" />
          </div>
        </div>
        <div className="cards_container">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </div>
  );
}
export default App;
