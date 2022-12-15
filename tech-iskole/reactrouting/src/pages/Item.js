import { useParams } from "react-router-dom";


function Item() {
    const params = useParams();
    console.log(params);
    return <div> Item Page</div>
}

export default Item;