import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import LiquorIcon from "@mui/icons-material/Liquor";
import CustomizedBadges from "../../MaterialUi/IconBadge";
import SearchInput from "../../UiVerse/SearchInput/SearchInput";
import { useNavigate } from "react-router-dom";
import TemporaryDrawer from "../../MaterialUi/Drawer";

function ResponsiveAppBar() {
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();
  const homeClickHandler = (i) => {
    i === 0 && navigate("/");
    i === 1 && i !== 0 && i !== 2 && navigate("/products");
    i === 2 && i !== 0 && i !== 1 && navigate("/cart");
  };

  const pages = ["Home", "Products", "Cart", "Login"];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <TemporaryDrawer />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Vintage Wines
            </Typography>
            <LiquorIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              onClick={() => {
                navigate("/");
              }}
            />
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  justifyContent: "end",
                  marginRight: "30px",
                  gap: "10px",
                },
              }}
            >
              {pages.map((page, i) => (
                <Button
                  key={page}
                  onClick={() => homeClickHandler(i)}
                  sx={{
                    my: 2,

                    display: "flex",
                    fontFamily: "monospace",
                    fontWeight: "bolder",
                    letterSpacing: ".1rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                  endIcon={
                    i === 2 ? (
                      <Box>
                        <CustomizedBadges />
                      </Box>
                    ) : null
                  }
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default ResponsiveAppBar;
