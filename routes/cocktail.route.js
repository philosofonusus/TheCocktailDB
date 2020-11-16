const express = require('express')
const router = express.Router()
const fetch = require("node-fetch");

const clean = obj => {
    for (let key in obj) {
        if (obj[key] === null || obj[key] === undefined || key === "strInstructionsDE" || obj[key] === '') {
            delete obj[key];
        }
    }
    return obj
}

// /api/cocktails/search

router.post('/search', async(req, res) => {
    const { searchVal } = req.body
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchVal}`)
    const data = await response.json()
    if(!data.drinks) return res.status(200).json({message: "No results"})
    const cleaned_data = data.drinks.map(el => {return clean(el)})
    return res.status(200).json({drinks: cleaned_data})
})
module.exports = router