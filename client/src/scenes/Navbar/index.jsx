import { useState } from "react";
import {
     Box,
     IconButton,
     InputBase,
     Typography,
     Select,
     MenuItem,
     FormControl,
     useTheme,
     useMediaQuery

} from "@mui/material";

import {
    Search,
    Message,
    DarkMode,
    LightMode,
    Notifications,
    Help,
    Menu,
    Close

} from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { useNavigate, useNavigate } from "react-router-dom";
import  JustifyBetween  from 'components/JustifyBetween';

const Navbar = () => {

    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
    const dispatch = useDispatch();
    const useNavigate = useNavigate();
    const select = useSelector( (state) => state.user );
    const isNonMobileScreens = useMediaQuery("(min-width : 1000px)");

    const theme = useTheme();

    
    return(

        <div>Hello from Navbar</div>
        
    )
    
}

export default Navbar;