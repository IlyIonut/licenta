import './category-item.styles.scss';

const CategoryItem = ({category}) => {
    const {imageUrl,title} = category;
    return(
        <div className="category-container">
            <div className="background-image" style={{
             backgroundImage: `url(${imageUrl})`}}/>
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
         </div>
   ) 
//   {/* daca punem () inseamna single line return si nu mai avem nevoie de return, 
//    daca punem {} atunci avem nevoie de return */}
    
}

export default CategoryItem