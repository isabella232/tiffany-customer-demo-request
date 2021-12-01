import React, {useState, useRef, useEffect} from 'react';
import { connectMenu } from 'react-instantsearch-dom';




const MenuSelect = ({ items, currentRefinement, refine }) => {
    const [openMenu, setOpenMenu] = useState(false)
    // me permet de faire une sorte de Query selector sur l'input et sur la div qui me sert de btn
    const shopMenuRef = useRef()
    const itemRef = useRef([])
    const [inputValue, setInputValue] = useState('')
   
    useEffect(() => {  
        // Check si la modal est ouverte et change le state en fonction
        const checkClickOutsideMenu = (e) => {
            if(openMenu && shopMenuRef.current && !shopMenuRef.current.contains(e.target)) {
                setOpenMenu(!openMenu)
                setInputValue('')
            }
        }
        // ecoute l'évenement click sur toute la page
        document.addEventListener('click', checkClickOutsideMenu) 
        
        // clean l'évenement
        return () => {
            document.removeEventListener('click', checkClickOutsideMenu)
            } 
    }, [openMenu, items])
   
      
    return(
    <>
        <div className="menuSelect__btn" ref={shopMenuRef} onClick={()=> {
            setOpenMenu(!openMenu)
        }}>
            <p>Select your location</p>
            <svg width="38" height="50" viewBox="0 0 38 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0C8.5 0 0 8.5 0 19C0 38 19 50 19 50C19 50 38 38 38 19C38 8.5 29.5 0 19 0ZM19 26C15.1 26 12 22.9 12 19C12 15.1 15.1 12 19 12C22.9 12 26 15.1 26 19C26 22.9 22.9 26 19 26Z" fill="black"/>
            </svg>
        </div>
        {openMenu && (
               <div className="menuSelect__wrapper">
                   <input type="text" className="searchBoxMenu" placeholder="Search for a location" ref={shopMenuRef} 
                   onChange={(e)=> {
                       // stock la valeur de l'input dans un state
                       setInputValue(e.currentTarget.value)
                   }} 
                   />
               {items.map(item => {
                   // Je crée un nouveau composant et je lui fais passer ce dont j'ai besoin pour faire le tri à la recherche et pour refine
                   return(
                    <Shop item={item} inputValue={inputValue} refine={refine} />
                   )
                })}
               </div>
        )}
     
    </>
    )
}

const ShopDropdown = connectMenu(MenuSelect);

const ShopChoice = () => {
    return (
        <ShopDropdown
            attribute="storeNameShopNumberV2"
            limit={150}
            sortBy="label:asc"
            searchable={true}
            
        />
    );
};


const Shop  = ({item, inputValue, refine}) => {

    // split après les *//*
    let words = item.label.split('//')[1] 
    
    
    return ( 
        <div className="menuSelect__item">
            
            {
            // Check si l'utilisateur a taper dans la barre de recherche
            inputValue ? 
            // Si oui on fait le trie avec les items que l'on a dans la liste
                (words.toLowerCase().includes(inputValue.toLowerCase())  && 
                (<p value={item.label} onClick={(e) => {
                    refine(item.label)
                }}>{words}</p>)) 
                : 
                // Si non on appel tout les shops
                (<p  value={item.label} onClick={(e) => {
                    refine(item.label)
                }}>{words}</p>) 
            }
        </div>
        );
}
 

export default ShopChoice;









// const MenuSelect = ({ items, currentRefinement, refine }) => {
//     const dispatch = useDispatch();
//     return (
//         <div className="shop-search">
//             <input
//                 list="brow"
//                 type="search"
//                 onChange={e => {
//                     // console.log(e.currentTarget)
//                     refine(e.currentTarget.value);
//                     dispatch(selectShop(e.currentTarget.value.split('//')[0]));
//                 }}
//                 placeholder="Shop by location"
//             />
//             <datalist id="brow">
//                 {items.map(item => {
//                     // console.log(item)
//                     return( 
//                     <option
//                         onClick={(e) => {
//                             console.log(e)
//                         }}
//                         key={item.label}
//                         value={
//                             item.isRefined
//                                 ? currentRefinement
//                                 : splitFuntion(item.value)
//                         }
//                     >
//                         {/* {splitFuntion(item.label)} */}
//                     </option>
//                     )
//                 })}
//             </datalist>
//         </div>
//     );
// };


// const MenuSelect = ({ items, currentRefinement, refine }) => {
//     const dispatch = useDispatch();
//     return(
//       <select
//         value={currentRefinement || ''}
//         onChange={
//             (event) => {
//                 refine(event.currentTarget.value)
//                 dispatch(selectShop(event.currentTarget.value))
//             }}
//         className="shopSelection"
//       > 
//         <option value="">Shop by location</option>
//         {items.map(item => (
//           <option
//             key={item.label}
//             value={item.isRefined ? currentRefinement : item.value}
//           >
//             {splitFuntion(item.label)}
//           </option>
//         ))}
//       </select>
//     )};