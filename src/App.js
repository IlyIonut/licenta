import { Route,Routes } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Authentification from "./routes/authentification/authentification.component";
import Checkout from "./routes/checkout/checkout.component";
import Profil from "./routes/profil/profil.component";
import UserSidebarPage from "./routes/users/users.component";
import "./App.css"
import ParticlesBg from "particles-bg";

const App = () => {
  return(
    <div className="content-center">
    <ParticlesBg type="cobweb" bg={true} />
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='users/*' element={<UserSidebarPage/>} />
        <Route path='shop/*' element={<Shop/>} />
        <Route path='auth' element={<Authentification/>} />
        <Route path='checkout' element={<Checkout/>} />
        <Route path='profil' element={<Profil/>} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
