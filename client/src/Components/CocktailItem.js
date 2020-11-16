import React from 'react'

const CocktailItem = (props) => {
     const cocktail = props.cocktail
        return (
            <article className='cocktail'>
                <div className='img-container'>
                    <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                </div>
                <div className='cocktail-footer'>
                    <h3>{cocktail.strDrink}</h3>
                    <h4>{cocktail.strGlass}</h4>
                    <p>{cocktail.strCategory}</p>
                        <button onClick={() => props.setCurrent(cocktail)} className='btn btn-primary btn-details'>
                            details
                        </button>
                </div>
            </article>
        )
}
export default CocktailItem