import PartnerCard from "../partner-card/partner-card.component";
import './partner-list.styles.scss';
import { useContext } from "react";
import { PartnersContext } from "../../context/partners.context";



const PartnerList = (props) => {
    const {partners} = useContext(PartnersContext);
    console.log(props.input);
    const filterPartners = partners.filter((partner) => { 
        return partner.name.toLocaleLowerCase().includes(props.input) // daca numele include string ul atunci va returna true
        });
    return(
        <div className="partner-container" >     
            {filterPartners.map((partner) => { 
                return <PartnerCard key={partner.id} partner={partner} />})}
        </div>
    );
}

export default PartnerList;
