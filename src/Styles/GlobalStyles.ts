import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    *{
        box-sizing:border-box;

    }
    body{
    
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
