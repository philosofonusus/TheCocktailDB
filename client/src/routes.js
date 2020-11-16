import React, {useState} from 'react'
import CocktailSearch from "./Components/CocktailSearch";
import CocktailList from "./Components/CocktailList";
import { Route, Switch } from "react-router-dom";
import CocktailItemPage from "./pages/CocktailItemPage";

export const useRoutes = () => {
    const [list, setList] = useState(null)
    const [current, setCurrent] = useState(null)
    return (
        <>
            <Switch>
                {current ?
                    <CocktailItemPage cocktail={current} nullCurrent={setCurrent}/> :
                    <Route path="/" exact>
                        <CocktailSearch setList={setList}/>
                        <CocktailList list={list} setCurrent={setCurrent}/>
                    </Route>
                 }
            </Switch>
            </>
    )
}