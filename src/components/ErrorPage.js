import React from 'react'
import Header from './Header'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError();
  // console.log(error);

  
  return (
    <>
      {/* <Header /> */}
      <div className='flex flex-col min-h-[700px] justify-center items-center'>
        <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
        <br />
        {
          error && (
            <div>
              <p className='text-red-500'>{error.statusText || error.message}</p>
              <p>{error.status}</p>
            </div>
          )
        }
      </div>
    </>
  )
}

export default ErrorPage


/**
 ki error , ki karone error dekacche ta useRouteError hook er maddome jana jay
 kuno page e jete chaile and oi tym e kuno error hoile tkn oi error er details oi hook er modde takbe 
 and oi component teke oi error access krte parbo

 kun error hoise ta deka jay
 jkn e ui e kuno page  ejawar smy error ashbe tkn ai page render hobe and error variable er modde ki error hoise ta chole ashbe
 ai error dekay bola jabe j ai error hoise tar jarone ai page dekteso
 */
