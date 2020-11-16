import React, {useEffect, useRef, useState} from 'react'
import {useHttp} from "../hooks/http.hook";

const CocktailSearch = (props) => {
    const searchValue = useRef()
    const {request, clearError, error} = useHttp()
    const [searchVal, setSearchVal] = useState("")
    useEffect(() => {
        searchValue.current.focus()
        if(error){
            clearError()
        }
    }, [error, clearError])
    const onValChange = (e) => {
        setSearchVal(e.target.value)
    }
    const searchValHandler = async() => {
        const data = await request(`api/cocktails/search`, "POST", {searchVal})
        if(data){
            props.setList(data)
        }
    }
    return(
        <section className='section search'>
            <div className='search-form'>
                <div className='form-control'>
                    <label htmlFor='name'>search your favorite cocktail</label>
                    <input
                        type='text'
                        name='searchVal'
                        value={searchVal}
                        id='searchVal'
                        ref={searchValue}
                        onChange={onValChange}
                    />
                    <button className="search-btn" type="submit" onClick={() => searchValHandler()}>Search</button>
                </div>
            </div>
        </section>
    )
}
export default CocktailSearch