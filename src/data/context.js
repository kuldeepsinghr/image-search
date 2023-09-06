import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AppContext = createContext()


const AppProvider = ({children})=>{
    
    const [ImagesData, setImagesData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('')

    const API_URL = `https://pixabay.com/api/?key=29194071-e6a1d8096f79ed2e27e927c64&q=${query}&image_type=photo&pretty=true`

    const getImageData = async (url)=>{
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        setImagesData(data?.hits)
        setIsLoading(false)
    }

    useEffect(()=>{
        setIsLoading(true)
        setTimeout(()=>{
            getImageData(API_URL)
        }, 500)
    }, [query])

    return <AppContext.Provider value={{ImagesData, isLoading, query, setQuery}}>
        {children}
        </AppContext.Provider>
}

const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext}