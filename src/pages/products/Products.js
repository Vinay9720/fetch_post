import { useNavigate } from "react-router-dom";
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
import LoadingLoader from "../../UiVerse/LoadingLoader/LoadingLoader";
import bgImage from "../../assests/bg image.jpg";
import CustomCard from "../../UiVerse/CustomCard/CustomCard";
import SearchInput from "../../UiVerse/SearchInput/SearchInput";

function Products() {
  const data = useSelector((state) => state.products.data);
  const isLoadingStatus = useSelector((state) => state.products.isLoading);
  const search = useSelector((state) => state.search.search);
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
      }, 500);
    };

    dataFunction();
  }, []);

  const filteredData = data.filter((el) =>
    el.winery.toLowerCase().includes(search)
  );

  const onClick = (i, item) => {
    if (i === 0) {
      dispatch(addToCart(item));
    } else if (i === 1) {
      navigate("/");
    } else {
    }
  };

  return (
    <div style={styles.image}>
      {isLoadingStatus === status.LOADING && (
        <Box sx={{ marginLeft: "47%", marginTop: "20%" }}>
          <LoadingLoader />
        </Box>
      )}
      <Box sx={{ margin: "30px 0 30px 6%" }}>
        <SearchInput />
      </Box>
      <div className="App">
        {filteredData.map((item) => (
          <CustomCard
            key={item.id}
            image={item.image}
            title={item.wine}
            price={item.price}
            description={item.winery}
            average={item.rating.average}
            onClick={(i) => onClick(i, item)}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;

const styles = {
  image: {
    background: `url(${bgImage})`,
  },
};
