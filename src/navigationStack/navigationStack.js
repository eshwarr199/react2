import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import AboutScreen from "../screens/postLoginScreens/aboutScreen"
import ProductsScreen from "../screens/postLoginScreens/productsScreen"
import InvalidScreen from "../screens/postLoginScreens/invalidScreen"
import HomeScreen from "../screens/postLoginScreens/homeScreen"
import SettingScreen from "../screens/postLoginScreens/settingScreen"



const NavigationStack=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/home" Component={HomeScreen}/>
            <Route path="/about" Component={AboutScreen}/>
            <Route path="/settings" Component={SettingScreen}/>
            <Route path="/products" Component={ProductsScreen}/>
            <Route path="*" Component={InvalidScreen}/>
        </Routes>
        </BrowserRouter>
    )
}
export default NavigationStack