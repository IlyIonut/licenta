import { Outlet } from "react-router-dom";

const Profil = () =>{
    return(
        <div>
            Aici este profilul tau
            <Outlet/>
        </div>
    );
}

export default Profil;