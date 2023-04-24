import './search-box.styles.css';


const Searchbox = (props) => {
        return(
            <div>
                
                <input
                    className='search-box'  
                    type='search' 
                    placeholder='partners'
                    onChange={props.inputHandler}
                /> 
            </div>
        );
}

export default Searchbox;