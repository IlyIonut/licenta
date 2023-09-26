import { Route,Routes } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Authentification from "./routes/authentification/authentification.component";
import Checkout from "./routes/checkout/checkout.component";
import Profil from "./routes/profil/profil.component";
import UserSidebarPage from "./routes/users/users.component";
import UserProfil from "./routes/userprofil/userprofil.component";
import AboutSas from "./routes/aboutSAS/aboutSas.component";
import Events from "./routes/events/events.component";
import Team from "./routes/team/team.component";
import ContactUs from "./routes/contactUs/contactUs.component";
import "./App.css"


const App = () => {
  return(
    <div className="content-center bg-black">

    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='about/' element={<AboutSas/>} />
        <Route path='events/' element={<Events/>} />
        {/* <Route path='users/*' element={<UserSidebarPage/>} /> */}
        <Route path="users/profil/:displayName" element={<UserProfil  />} />
        <Route path='contactus/*' element={<ContactUs/>} />
        <Route path='auth' element={<Authentification/>} />
        <Route path='checkout' element={<Checkout/>} />
        <Route path='myprofil' element={<Profil/>} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
