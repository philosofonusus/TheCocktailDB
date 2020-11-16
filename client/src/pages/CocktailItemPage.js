import React from 'react'
import {Link} from "react-router-dom";

const CocktailItemPage = (props) => {
    const cocktail = props.cocktail
    const ingridients = []
    for(let i in cocktail){
        if(i.startsWith("strIngredient")) ingridients.push(cocktail[i])
    }
    return(
        <section className='section cocktail-section'>
            <Link to="/" onClick={() => props.nullCurrent(null)} className='btn btn-primary'>
                back home
            </Link>
            <h2 className='section-title'>{cocktail.strDrink}</h2>
            <div className='drink'>
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                <div className='drink-info'>
                    <p>
                        <span className='drink-data'>name :</span> {cocktail.strDrink}
                    </p>
                    <p>
                        <span className='drink-data'>category :</span> {cocktail.strCategory}
                    </p>
                    <p>
                        <span className='drink-data'>info :</span> {cocktail.strAlcoholic}
                    </p>
                    <p>
                        <span className='drink-data'>glass :</span> {cocktail.strGlass}
                    </p>
                    <p>
                        <span className='drink-data'>instructons :</span> {cocktail.strInstructions}
                    </p>
                    <p>
                        <span className='drink-data'>ingredients :</span>
                        {ingridients.map((item, index) => {
                            return item ? <span key={index}> {item}</span> : null
                        })}
                    </p>
                </div>
            </div>
        </section>
    )
}
export default CocktailItemPage