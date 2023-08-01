import { createContext, useState, useEffect} from "react";

import { getDocuments } from "../utils/firebase/firebase.utils.js";

import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
//import SHOP_DATA from "../shop-data.js";
import SAS_DATA from "../sas-data.js";

export const EventsContext = createContext({
    eventsMap:{},
});

export const EventsProvider = ({ children }) => {
    const [eventsMap, setEventsMap] = useState({});
    useEffect(() => {
      const fetchEvents = async () => {
        const eventsData = await getDocuments();
        console.log(eventsData);
        setEventsMap(eventsData);
      };
  
      fetchEvents();
    }, []);
    const value = {eventsMap};
    return <EventsContext.Provider value={value} >{children}</EventsContext.Provider>
}
