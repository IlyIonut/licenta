import {BackgroundImage,Body, DirectoryItemContainer} from './directory-item.styles';
import { useNavigate } from 'react-router-dom';


const DirectoryItem = ({category}) => {
    const {imageUrl,title,route} = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return(
        <DirectoryItemContainer onClick={onNavigateHandler} >
            <BackgroundImage imageUrl = {imageUrl}/>
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
         </DirectoryItemContainer>
   ) 
//   {/* daca punem () inseamna single line return si nu mai avem nevoie de return, 
//    daca punem {} atunci avem nevoie de return */}
    
}

export default DirectoryItem