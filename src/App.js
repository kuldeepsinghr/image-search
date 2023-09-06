import React from "react";

import Images from "./Components/Images";
import Search from "./Components/Search";
import { useGlobalContext } from "./data/context";

import {InfinitySpin} from 'react-loader-spinner'

function App() {

  const {isLoading, ImagesData} = useGlobalContext()

  return (
    <>
      <Search/>
      {
        !isLoading && ImagesData.length==0 && <h1 className='text-5xl text-center mx-auto mt-32'>Images Not Found</h1>
      }
      {
        isLoading ? 
        <div className="w-full h-full flex items-center justify-center mx-auto mt-32">
        <InfinitySpin width='200'color="#4fa94d"/> 
        </div>:
        <Images/>
      }
    </>
  );
}

export default App;
