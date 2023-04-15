import { Route,Routes } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Partners from "./routes/partners/partners.component";
import Profil from "./routes/profil/profil.component";
import Support from "./routes/contactus/contactus.component";
import Authentification from "./routes/authentification/authentification.component";

const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='/partners' element={<Partners/>} />
        <Route path='/profil' element={<Profil/>} />
        <Route path='/support' element={<Support/>} />
        <Route path='/auth' element={<Authentification/>} />
      </Route>
    </Routes>
    
  );
}

export default App;
