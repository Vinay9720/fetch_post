import { useNavigate } from "react-router-dom";
import Card from "../../components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/reducers/cart.reducer";
import Box from "@mui/material/Box";

import mockData from "../../services/wines_project_api.json";
import {
  fetchApiActionSuccess,
  status,
  fetchApiActionLoading,
  fetchApiActionError,
} from "../../store/reducers/Products.reducer";
import { useEffect } from "react";
import SpinnerLoader from "../../UiVerse/SpinnerLoader/SpinnerLoader";

function Products() {
  const data = useSelector((state) => state.products.data);
  const isLoadingStatus = useSelector((state) => state.products.isLoading);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApiActionLoading(status.LOADING));
    const dataFunction = () => {
      setTimeout(() => {
        try {
          const apiData = mockData;
          dispatch(fetchApiActionSuccess(apiData));
          dispatch(fetchApiActionLoading(status.IDLE));
        } catch (error) {
          dispatch(fetchApiActionError(status.ERROR));
          console.log("error from apicall", error);
        }
      }, 1500);
    };

    dataFunction();
  }, []);

  const onClick = (i, item) => {
    console.log("my i ", i, item);
    if (i === 0) {
      dispatch(addToCart(item));
    } else if (i === 1) {
      navigate("/");
    } else {
    }
  };

  return (
    <>
      {isLoadingStatus === status.LOADING && (
        <Box sx={{ marginLeft: "47%", marginTop: "20%" }}>
          <SpinnerLoader />
        </Box>
      )}

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
