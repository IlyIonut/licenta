import './partner-card.styles.scss';
import Button from '../button/button.component';


const PartnerCard = ({partner}) => {
    const {name,job,imageUrl} = partner;
    return(
        // <div className='partner-card-container' > 
        //     <img src={imageUrl} alt={`${name}`} />
        //     <div className='footer' >
        //         <span className='name'>{name}</span>
        //         <span className='price'>{price}</span>
        //     </div>
        //     <Button buttonType='inverted' >Add to cart</Button>
        //  </div>
         <div className="partner-card-container">
            <div className="card">
            <img src={imageUrl} alt={`${name}`} />
                <h4>{name}</h4>
                <h5>{job}</h5>
                <div className="details">
                    <div className="column">
                        <h2>1.6K</h2>
                        <span>Followers</span>
                    </div>
                    <div className="column">
                        <h2>852</h2>
                        <span>Following</span>
                    </div>
                </div>
                <div className="buttons">
                    <button>Profile</button>
                    <button>Contact</button>
                </div>
            </div>
        </div>
        
    );
}

export default PartnerCard;