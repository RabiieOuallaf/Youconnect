import {Box, Typography, useTheme, useMediaQuery} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Form from "./Form";



const LoginPage = () => {

    const isNonMobileScreen = useMediaQuery(" (min-width: 1000px) ");
    const navigate = useNavigate();
    const {palette} = useTheme();
    
    return(<Box>

        <Box width="100%" backgroundColor={palette.background.alt} p="1rem 6%" textAlign="center">

            <Typography

                fontWeight="bold"
                fontSize="32px"
                color="primary"
                onClick={ () => navigate("/home") }

                sx={
                    {
                        "&:hover": {
                            color: palette.primary.light,
                            cursor: "pointer"
                        }
                    }
                }
                >

                    YouConnect

                </Typography>

        </Box>

        <Box
            width={isNonMobileScreen ? "50%" : "93%"}
            p="2rem"
            m="2rem auto"
            borderRadius="1.5rem"
            backgroundColor={palette.background.alt}
        >

            <Typography fontWeight="500" variant="h5" sx={ { mb: "1.5rem" } }>
                Welcome 👋 in youConnect , Our klika socialmedia!
            </Typography>
            <Form />

        </Box>

    </Box>

    ) 
    
}

export default LoginPage;