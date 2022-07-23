import { Route, Routes } from "react-router-dom";
import Directory from "./components/directory/Directory";
import Navigation from "./components/navigation/Navigation";
import Shop from './components/shop/shop'
import Signin from "./components/signin/Signin";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Directory />} />
                <Route path="shop" element={<Shop />} />
                <Route path="sign-in" element={<Signin />} />
            </Route>
        </Routes>
    )
}

export default App;
