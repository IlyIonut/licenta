import { createContext, useState, useEffect} from "react";

import { getMembersAndDocuments } from "../utils/firebase/firebase.utils.js";

import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
//import SHOP_DATA from "../shop-data.js";
import SAS_DATA from "../sas-data.js";

export const MembersContext = createContext({
    membersMap:{},
});

export const MembersProvider = ({children}) =>{
    const [membersMap,setMembersMap] = useState({});
    useEffect(()=>{
        //addCollectionAndDocuments('SAS_Membri',SAS_DATA);
        const getMembersMap = async () => {
            const membersMap = await getMembersAndDocuments();
            setMembersMap(membersMap);
        }
        getMembersMap();
    },[]);
    const value = {membersMap};
    return <MembersContext.Provider value={value} >{children}</MembersContext.Provider>
}
