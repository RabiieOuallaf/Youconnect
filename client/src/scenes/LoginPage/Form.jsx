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
        <Formik>
            
        </Formik>
    )
}