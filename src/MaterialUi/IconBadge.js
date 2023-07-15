import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useSelector } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -7,
    top: 2,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function CustomizedBadges() {
  const count = useSelector((state) => state.cart.selectedItems);
  const totalCount = count.length;
  return (
    <StyledBadge badgeContent={totalCount} color="primary">
      <AddShoppingCartIcon />
    </StyledBadge>
  );
}
