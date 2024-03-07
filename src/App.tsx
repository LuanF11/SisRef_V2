import { useState } from 'react'

import CustomBar from './components/indicator_bar';


function App() {

  return (
    <>
      <CustomBar text="Hello, world!" barWidth={"200px"} backgroundColor={"#000"} />
    </>
  )
}

export default App
