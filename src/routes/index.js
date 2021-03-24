import  Login  from "../pages/Login";
import  List  from "../pages/admin/products/List";
import  Index  from "../pages/admin/dashboard/Index";
import  Edit  from "../pages/admin/products/Edit";
import  PageNotFound  from "../pages/PageNotFound";

export const mainRoutes = [{
    path: "/login",
    component: Login
},{
    path: "/404",
    component: PageNotFound
}]

export const adminRoutes = [{
    path: "/admin/dashboard",
    component: Index,
    isShow: true,
    title: "dashboard",
    icon: "AreaChartOutlined"
},
{
    path: "/admin/products",
    component: List,
    isShow: true,
    exact: true,
    title: "items manage",
    icon: "ShoppingOutlined"
},
{
    path: "/admin/products/edit/:id?",
    component: Edit,
    isShow: false
}]