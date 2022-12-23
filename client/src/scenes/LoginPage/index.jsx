import {Box, Typography, useTheme, useMediaQuery} from "@mui/material";

const LoginPage = () => {

    const theme = useTheme();
    const isNonMobileScreen = useMediaQuery(" (min-width: 1000px) ");
    
    return(<box>

        <box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">

            <Typography

                fontWeight="bold"
                fontSize="32px"
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

        </box>

        <box
            width={isNonMobileScreen ? "50%" : "93%"}
            p="2rem"
            m="2rem auto"
            borderRadius="1.5rem"
            backrgoundColor={theme.palette.background.alt}
        >

            <Typography fontWeight="500" variant="h5" sx={ { mb: "1.5rem" } }>
                Welcome 👋 , in youConnect , you'll find your dream job ! 
            </Typography>

        </box>

    </box>

    ) 
    
}

export default LoginPage;