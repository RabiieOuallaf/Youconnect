import { useState } from "react";
import {Box, Button, TextField, useMediaQuery, Typography, useTheme} from "@mui/material";
import EditOutLinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "state";
import Dropzone from "react-dropzone";
import JustifyBetween from "components/JustifyBetween";

const registerSchema = yup.object.shape({
    firstName : yup.string().required("required"),
    lastName : yup.string().required("required"),
    email : yup.string().email("invalid Email").required("required"),
    passowrd : yup.string().required("required"),
    location: yup.string().required("required"),
    company : yup.string().required("required"),
    picture : yup.string().required("required"),
});

const loginSchema = yup.object.shape({

    email: yup.string().email("invalid Email").required("required"),
    password: up.string().required("required"),

});

const initialValueRegister = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
    occupation:"",
    company: "",
    picture: ""
}

const initialValueLogin = {
    email: "",
    password: ""
}

const Form = () => {
    const [pageType, setPageType] = useState("login");
    const { pallete } = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const isLogin = pageType === "login";
    const isRegister = pageType === "register";

    const handleForSubmit = async(values, onSubmitProps) => {};

    return (
        <Formik
            onSubmit={handleForSubmit}
            initialValues={isLogin ? initialValueLogin : initialValueRegister}
            validationSchema={idLogin ? loginSchema : registerSchema} 
        >

            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
                resetForm,

            }) => (
                <form onSubmit={handleSubmit}>
                    <Box
                        display="grid"
                        gap="30px"
                        gridTemplateColumns="repeat(4, minmax(0,1fr))"
                        sx={{
                            "& > div" : {gridColumn: isNonMobile? undefined : 'span 4'}
                        }}
                    >
                        {isRegister && (
                            <>
                                <textField 
                                    label="First name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.firstName}
                                    name="firstName"
                                    error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                                    helperText={touched.firstName && errors.firstName}
                                    sx={
                                        {
                                            gridColumn: "span 2"
                                        }
                                    }
                                />

                                <textField 
                                    label="Last name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.lastName}
                                    name="lastnName"
                                    error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                                    helperText={touched.lastName && errors.lastName}
                                    sx={
                                        {
                                            gridColumn: "span 2"
                                        }
                                    }
                                />

                                <textField 
                                    label="Location"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.location}
                                    name="location"
                                    error={Boolean(touched.location) && Boolean(errors.location)}
                                    helperText={touched.location && errors.location}
                                    sx={
                                        {
                                            gridColumn: "span 2"
                                        }
                                    }
                                />

                                <textField 
                                    label="occupation"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.occupation}
                                    name="occupation"
                                    error={Boolean(touched.occupation) && Boolean(errors.occupation)}
                                    helperText={touched.occupation && errors.occupation}
                                    sx={
                                        {
                                            gridColumn: "span 2"
                                        }
                                    }
                                />
                                <Box
                                    gridColumns="span 4"
                                    border={`1px solid ${pallete.neutral.medium}`}
                                    borderRadius="5px"
                                    p="1rem"
                                >

                                    <Dropzone
                                        acceptedFiles=".jpg,.jpeg,.png"
                                        multiple={false}
                                        onDrop={(acceptedFiles) => 
                                            setFieldValue("picture", acceptedFiles[0])
                                        }
                                    >

                                        {({ getRootProps, getInputProps }) => (
                                            <Box
                                                {...getRootProps()}
                                                border={`2px dashed ${pallete.primary.main}`}
                                                p="1rem"
                                                sx={{ "&:hover": {cursor:pointer} }}
                                            >

                                                <input {...getInputProps()} />
                                                {!values.picture ? (

                                                    <p>Add a picture here</p>
                                

                                                ) : (
                                                    <JustifyBetween>

                                                        

                                                    </JustifyBetween>
                                                )}

                                            </Box>
                                        )}

                                    </Dropzone>

                                </Box>
                            </>
                        )}

                    </Box>
                </form>
            )}
            
        </Formik>
    )
}