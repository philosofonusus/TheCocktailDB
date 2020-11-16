import React from 'react'
import CocktailItem from "./CocktailItem";

const CocktailList = (props) => {
    if(!props?.list?.drinks || props?.list?.drinks?.length < 1) {
        return (
            <h2 className='section-title' style={{marginTop: "180px"}}>
                no cocktails matched your search criteria
            </h2>
        )
    }
    return(
    <section className='section'>
        <h2 className='section-title'>cocktails</h2>
        <div className='cocktails-center'>
            {props.list.drinks.map(el => {
                return <CocktailItem setCurrent={props.setCurrent} key={el.idDrink} cocktail={el} />
            })}
        </div>
    </section>
    )
}
export default CocktailList