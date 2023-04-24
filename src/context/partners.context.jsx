import { createContext, useState} from "react";
import PARTNERS from '../shop-data.json';


export const PartnersContext = createContext({
    partners:[],
});

export const PartnersProvider = ({children}) =>{
    const [partners,setPartners] = useState(PARTNERS);
    const value = {partners};
    return <PartnersContext.Provider value={value} >{children}</PartnersContext.Provider>
}
