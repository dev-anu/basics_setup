import Home from "../pages/auth/home/Home";
import LoginComponent from "../pages/unauth/login/Login";
import RegisterComponent from "../pages/unauth/register/Register";

const BasicRoute=[
    {
        path:"/auth/register",
        component:RegisterComponent
    },{
        path:"/auth/login",
        component:LoginComponent
    },{
        path:"/",
        component:Home,
        title:"Home"
    }
]

export default BasicRoute;