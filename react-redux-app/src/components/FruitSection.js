import { useDispatch, useSelector } from "react-redux";
import { buyFruit } from "../redux/fruit/fruitActions";

function FruitSection() {
   const noOfFruits = useSelector((state) => state.fruit.noOfFruits);
   const dispatch = useDispatch();
   const handleClick = () => {
        dispatch(buyFruit(1));
   }
    return (
        <div>
            <h2>No Of Fruits</h2>
            {noOfFruits}
            <div>
                <button onClick={handleClick}>Buy Fruits</button>
            </div>
        </div>
    );
}

export default FruitSection;