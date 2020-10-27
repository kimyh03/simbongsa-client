import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    *{
        box-sizing:border-box;

    }
    body{
        @import url('https://fonts.googleapis.com/earlyaccess/notosanskr.css');
        font-family: "Noto Sans KR",Arial, sans-serif !important;
    }
    button{
        outline:none;
        border:none;
        cursor:pointer;
    }
    a{
        text-decoration:none;
        color:inherit;
    }
`;
