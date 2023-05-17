import React from 'react'

import { RouterProvider} from 'react-router-dom'
import router from './Routes'

function App() {

  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  )
}

export default App


//nested routing e outlet use krbo
// by default outlet er jaygay kuno akta component k surute  initially render kore rakte pari
/*
        {
          index: true, //by default eta render kore boshe takbe( by defualt outlet e takbe)
          element: <Home />
        },

*/