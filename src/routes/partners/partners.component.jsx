import { Outlet } from "react-router-dom";
import './partners.styles.scss';
import Searchbox from "../../components/search-box/search-box.component";
import PartnerList from "../../components/partners-list/partner-list.component";
import { useState } from "react";



const Partners = () =>{
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };
    return(
        <div className="page" >
            <Searchbox className="search"  inputHandler = {inputHandler} />
            <PartnerList input={inputText} />
            <Outlet/>
        </div>
    );
}

export default Partners;