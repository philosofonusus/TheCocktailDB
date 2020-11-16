import React from 'react'
import {useRoutes} from "./routes";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    const routes = useRoutes()

    return(
        <BrowserRouter>
            { routes }
        </BrowserRouter>
    )
}
export default App