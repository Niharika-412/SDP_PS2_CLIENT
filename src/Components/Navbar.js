import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { FaSun, FaMoon, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import GradeIcon from "@mui/icons-material/Grade";
import AssignmentIcon from "@mui/icons-material/Assignment";
// Import your logo image
import Logoo from "./Logoo.jpg"; // Adjust this path if necessary

// Define the styled components correctly here
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar({ isDarkMode, isAuthenticated, toggleTheme }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = React.useState(null);
  const [studentMenuOpen, setStudentMenuOpen] = React.useState(false); // Student submenu state
  const isProfileMenuOpen = Boolean(profileMenuAnchorEl);
  const navigate = useNavigate();

  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  const handleMoreIconClick = (event) => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    window.location.reload();
  };

  const handlelogo = (e) => {
    e.preventDefault();
    isAuthenticated ? navigate("/home") : navigate("/");
  };

  const handleStudentMenuToggle = () => {
    setStudentMenuOpen(!studentMenuOpen); // Toggle submenu
  };

  const profileMenuId = "primary-search-account-menu";

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#f5f5f5", width: "100%", color: "black" }}>
      <AppBar position="static" sx={{ backgroundColor: isDarkMode ? "#111" : "white" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            onClick={handleMoreIconClick}
            sx={{ color: isDarkMode ? "#fff" : "#333" }}
          >
            <MoreIcon />
          </IconButton>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, backgroundColor: "white", borderRadius: "50px", marginLeft: "20px" }}
          >
            <img
              src={Logoo}
              alt="Logo"
              onClick={handlelogo}
              style={{ height: "50px", width: "auto", display: "flex", alignItems: "center" }}
            />
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              style={{ backgroundColor: isDarkMode ? "black" : "white" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            {!isAuthenticated && (
              <IconButton
                component={Link}
                to="/signin"
                size="small"
                className="card-button"
                sx={{
                  color: isDarkMode ? "#fff" : "#333",
                  '&.MuiIconButton-root': {
                    backgroundColor: isDarkMode ? '#333' : '#f0f0f0',
                    '&:hover': {
                      backgroundColor: isDarkMode ? '#444' : '#e0e0e0',
                    },
                  },
                  padding: '8px 16px',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}
              >
                Sign In <FaLock />
              </IconButton>
            )}
            <IconButton size="large" aria-label="show 4 new mails" sx={{ color: isDarkMode ? "#fff" : "#333" }}>
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              sx={{ color: isDarkMode ? "#fff" : "#333" }}
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton onClick={toggleTheme} sx={{ color: "#333" }} size="large">
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </IconButton>
            {isAuthenticated && (
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={profileMenuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                sx={{ color: "#333" }}
              >
                <AccountCircle />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      {isAuthenticated && menuOpen && (
        <Box
          sx={{
            position: "absolute",
            top: "65px",
            left: "0",
            width: "250px",
            cursor: "pointer",
            height: "calc(100vh - 4px)",
            backgroundColor: isDarkMode ? "#111" : "white",
            color: isDarkMode ? "white" : "#111",
            boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
            zIndex: 10,
          }}
        >
          <List>
            <ListItem button component={Link} to="/home" onClick={handleMenuClose}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/admissions" onClick={handleMenuClose}>
              <ListItemText primary="Admissions" />
            </ListItem>
            <ListItem button component={Link} to="/payments" onClick={handleMenuClose}>
              <ListItemText primary="Payments" />
            </ListItem>
            <ListItem button component={Link} to="/DiscussionForm" onClick={handleMenuClose}>
              <ListItemText primary="DiscussionForm" />
            </ListItem>
            <ListItem button component={Link} to="/courses" onClick={handleMenuClose}>
              <ListItemText primary="Courses" />
            </ListItem>
            {/* Students menu with toggle */}
            <ListItem button component={Link} onClick={handleStudentMenuToggle}>
              <ListItemText  primary="Students" />
            </ListItem>
            {studentMenuOpen && (
              <List component="div" disablePadding>
                <ListItem button component={Link} to="/Students/Grades" onClick={handleMenuClose}>
                  <GradeIcon sx={{ marginRight: "10px" }} />
                  <ListItemText primary="Grades" />
                </ListItem>
                <ListItem button component={Link} to="/Students/Assignments" onClick={handleMenuClose}>
                  <AssignmentIcon sx={{ marginRight: "10px" }} />
                  <ListItemText primary="Assignments" />
                </ListItem>
              </List>
            )}
            <ListItem button component={Link} to="/Faculty" onClick={handleMenuClose}>
              <ListItemText primary="Faculty" />
            </ListItem>

          
          </List>
        </Box>
      )}
      <Menu
        anchorEl={profileMenuAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={profileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isProfileMenuOpen}
        onClose={handleProfileMenuClose}
      >
        <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  );
}
