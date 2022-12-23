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
import {useNavigate}  from "react-router-dom";
import  JustifyBetween  from 'components/JustifyBetween';


const Navbar = () => {

    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector( (state) => state.user );
    const isNonMobileScreens = useMediaQuery("(min-width : 1000px)");

    const theme = useTheme();

    const neutralLight = theme.palette.neutral.light;
    const dark  = theme.palette.neutral.dark;
    const background = theme.palette.background.default;
    const primaryLight = theme.palette.primary.light;
    const alt = theme.palette.background.alt;

    //const FullName = `${user.firstname} ${user.lastName}`;

    const FullName = "Rabie Ouallaf";


    
    return <JustifyBetween padding="1rem 6%" background={alt}>

        <JustifyBetween gap="1.75rem">
            <Typography

                fontWeight="bold"
                fontSize="clamp(1rem, 2rem, 2.25rem)"
                color="primary"
                onClick={ () => navigate("/home") }

                sx={
                    {
                        "&:hover": {
                            color: primaryLight,
                            cursor: "pointer"
                        }
                    }
                }
            >

                YouConnect

            </Typography>
            {isNonMobileScreens && (

                <JustifyBetween backgroundColor={neutralLight} borderRadius="9px" gap="3rem" padding="0.1rem 1.5rem">

                    <InputBase>

                        <IconButton>

                            <Search />

                        </IconButton>
                        
                    </InputBase>

                </JustifyBetween>

            )}


        </JustifyBetween>

        {/* Desktop navbar */}
        { isNonMobileScreens ? (<JustifyBetween gap="2rem">
                <IconButton onClick={ () => dispatch( setMode() ) }  >
                    {theme.palette.mode === "dark" ? (

                        <DarkMode sx={ {fontSize: "25px"} } />

                    ) : (

                        <LightMode sx={ { color: dark, fontSize: "25px" } } />

                    )}
                </IconButton>

                <Message sx={ {fontSize: "25px"} } />
                <Notifications sx={ {fontSize: "25px"} } />
                <Help sx={ {fontSize: "25px"} } />
                <FormControl variant="standard" value={FullName}>

                    <Select
                        value={FullName}
                        sx={
                            {
                                backgroundColor: neutralLight,
                                width: "150px",
                                borderRadius: "0.25rem",
                                p: "0.25rem 1rem",
                                "& .MuiSvgIcon-root": {
                                    pr: "0.25rem",
                                    width: "3rem"
                                },
                                "& .MuiSelect-select:focus" : {
                                    backgroundColor: neutralLight
                                }
                            }
                        }

                        input={<InputBase />}
                    >
                        <MenuItem value={FullName}>

                            <Typography>{FullName}</Typography>

                        </MenuItem>

                        <MenuItem onClick={ () => dispatch(setLogout()) }>Log Out</MenuItem>


                    </Select>

                </FormControl>
        </JustifyBetween>) : (
            <IconButton
                onClick={ () => setIsMobileMenuToggled(!isMobileMenuToggled) }
            >

                <Menu />

            </IconButton>
        )}

        {/* == mobile screen == */}
        {!isNonMobileScreens && isMobileMenuToggled && (
            <Box
                position="fixed"
                right="0"
                height="100%"
                z-index="10"
                max-width="500px"
                min-width="300px"
                backgroundColor={background}
            >

                <Box display="flex" justifyContent="flex-end" p="1rem">

                    <IconButton onClick={ () => setIsMobileMenuToggled(!isMobileMenuToggled) }>
                        <Close />
                    </IconButton>

                </Box>
                {/* == Menu items ==*/}

                <JustifyBetween display="flex" flexDirection="column" justifyContent="center" gap="3rem">
                    <IconButton 
                        onClick={ () => dispatch( setMode() ) }  
                        sx={ {fontSize: "25px"} }
                    >
                        {theme.palette.mode === "dark" ? (

                            <DarkMode sx={ {fontSize: "25px"} } />

                        ) : (

                            <LightMode sx={ { color: dark, fontSize: "25px" } } />

                        )}
                    </IconButton>

                    <Message sx={ {fontSize: "25px"} } />
                    <Notifications sx={ {fontSize: "25px"} } />
                    <Help sx={ {fontSize: "25px"} } />
                    <FormControl variant="standard" value={FullName}>

                        <Select
                            value={FullName}
                            sx={
                                {
                                    backgroundColor: neutralLight,
                                    width: "150px",
                                    borderRadius: "0.25rem",
                                    p: "0.25rem 1rem",
                                    "& .MuiSvgIcon-root": {
                                        pr: "0.25rem",
                                        width: "3rem"
                                    },
                                    "& .MuiSelect-select:focus" : {
                                        backgroundColor: neutralLight
                                    }
                                }
                            }

                            input={<InputBase />}
                        >
                            <MenuItem value={FullName}>

                                <Typography>{FullName}</Typography>

                            </MenuItem>

                            <MenuItem onClick={ () => dispatch(setLogout()) }>Log Out</MenuItem>


                        </Select>

                    </FormControl>
            </JustifyBetween>
        </Box>
        )} 
</JustifyBetween>
    
}

export default Navbar;