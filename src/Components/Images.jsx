import React from 'react'
import { useGlobalContext } from '../data/context'


function Images() {

    const {ImagesData} = useGlobalContext()

  return (
    <>
      <div className='grid grid-cols-1 container mx-auto px-3 md:grid-cols-3 gap-4'>
        {
            ImagesData.map((item)=>{
                const tags = item?.tags.split(',')
                return (
                    <div className='max-w-sm rounded overflow-hidden shadow-lg' key={item?.id}>
                        <img src={item?.webformatURL} alt="images" className='w-full'/>
                        <div className='px-6 py-4'>
                            <div className='font-bold text-purple-500 text-xl mb-2'>
                                Photo by {item?.user}
                            </div>
                            <ul>
                                <li>
                                    <strong>Views:</strong>{item?.views}
                                </li>
                                <li>
                                    <strong>Downloads:</strong>{item?.downloads}
                                </li>
                                <li>
                                    <strong>Likes:</strong>{item?.likes}
                                </li>
                            </ul>
                        </div>
                        <div className='px-6 py-4'>
                            {
                                tags.map((tags, index)=>{
                                    return (
                                        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2' key={index}>#{tags}</span>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            })
        }
      </div>
    </>
  )
}

export default Images
