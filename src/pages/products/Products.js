import { useNavigate } from "react-router-dom";
import Card from "../../components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/actions/cart.action";

function Products() {
  const data = useSelector((state) => state.products_api_data.data);
  // console.log("my data", data);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClick = (i, item) => {
    // debugger;
    if (i === 0) {
      dispatch(addToCart(item));
      // window.alert("Added to Cart");
    } else if (i === 1) {
      navigate("/");
    } else {
    }
  };

  return (
    <>
      <div className="App">
        {data.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.wine}
            description={item.winery}
            average={item.rating.reviews}
            onClick={(i) => onClick(i, item)}
          />
        ))}
      </div>
    </>
  );
}

export default Products;

// const [data, setData] = useState([]);

// useEffect(() => {
//   getData();
// }, []);

// const getData = async () => {
//   const response = await fetch("https://api.sampleapis.com/wines/reds", {
//     method: "GET",
//   });
//   const apiData = await response.json();
//   setData(apiData);
//   // console.log("apiData", apiData);
