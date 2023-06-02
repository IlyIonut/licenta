import './directory-item.styles.scss';

const DirectoryItem = ({category}) => {
    const {imageUrl,title} = category;
    return(
        <div className="directory-item-container">
            <div className="background-image" style={{
             backgroundImage: `url(${imageUrl})`}}/>
            <div className="body">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
         </div>
   ) 
//   {/* daca punem () inseamna single line return si nu mai avem nevoie de return, 
//    daca punem {} atunci avem nevoie de return */}
    
}

export default DirectoryItem