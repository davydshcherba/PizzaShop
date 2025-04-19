import "./Card.css";
import { Plus } from "lucide-react";

function Card() {
  return (
    <div className="card">
      <img src="/toppng 2.png" className="img_pizza" />
      <div className="information_block">
        <h2>Pizza with Cheese</h2>
        <p>14$</p>
        <button className="plus-button">
          <Plus color="#000" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}

export default Card;
