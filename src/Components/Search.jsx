import React from 'react'
import { useState } from 'react'
import { useGlobalContext } from '../data/context'

function Search() {

    const {setQuery} = useGlobalContext()
    const [inputValue, setInputValue] = useState('')

    const handleOnClick = ()=>{
        setQuery(inputValue)
    }

  return (
    <>
      <div className='max-w-sm rounded overflow-hidden my-10 mx-auto px-3'>
        <form className='w-full max-w-sm' onSubmit={(e)=>{e.preventDefault()}}>
            <div className='flex items-center border-b-2 border-teal-500 py-2'>
                <input type="text" className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2 px-1 leading-tight focus:outline-none' placeholder='search image term...' 
                value={inputValue}
                onChange={(e)=>{setInputValue(e.target.value)}}/>
                <button className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-t-teal-700 text-sm border-4 text-white py-1 px-2 rounded' type='submit' onClick={handleOnClick}>Search</button>
            </div>
        </form>
      </div>
    </>
  )
}

export default Search
