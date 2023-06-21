import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useSelector } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -7,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function CustomizedBadges() {
  const count = useSelector((state) => state.cart.selectedItems);
  const totalCount = count.length;
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={totalCount} color="secondary">
        <AddShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
