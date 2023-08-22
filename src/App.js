
import { useEffect, useState } from 'react';
import MainContext from './MainContext'
import Content from './components/Content';
import BrandsData from './brand.json'
import Sidebar from './components/Sidebar';
import Copied from './components/Copied';

function App() {

  const brandsArray = []
  Object.keys(BrandsData).map( key => {
      brandsArray.push(BrandsData[key])
  } )

  const [brands, setbrands] = useState(brandsArray)
  const [selectedBrands, setselectedBrands] = useState([])
  const [copied, setcopied] = useState(false)
  const [search, setsearch] = useState('')


  useEffect (() => {
    if(copied){
  setTimeout(() =>{
    setcopied(false)
  },800)
}
  },[copied])

  useEffect (() => {
    setbrands(brandsArray.filter(brand => brand.title.toLowerCase().includes(search)))
  },[search])

  const data = {
    brands,
    selectedBrands,
    setselectedBrands,
    setcopied,
    search,
    setsearch
  }

  return (
    <div>
    <MainContext.Provider value={data}>
     <Sidebar/>
     <Content/>
     {copied && <Copied color={copied}/>}
     </MainContext.Provider>
    </div>
  );
}

export default App
