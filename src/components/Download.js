import React, { useContext, useEffect, useState } from 'react'
import MainContext from '../MainContext'
import {GrLink, GrDownload, GrClose} from 'react-icons/gr'

function Download() {

const {selectedBrands, brands, setselectedBrands} = useContext(MainContext)
const [downloadURL, setdownloadURL] = useState()
const [cssMethod, setcssMethod] = useState('css')

useEffect(() => {
if (selectedBrands.length > 0) {

  let output = ''
  switch(cssMethod){
    case 'css':
      selectedBrands.map(slug => {
        let brand = brands.find(brand => brand.slug === slug)
        brand.colors.map((color,key) => {
          output += `--${slug}-${key} : #${color};\n`
        })
      })
    break;
    case 'scss':
      selectedBrands.map(slug => {
        let brand = brands.find(brand => brand.slug === slug)
        brand.colors.map((color,key) => {
          output += `\$${slug}-${key} : #${color};\n`
        })
      })
    break;
    case 'less':
      selectedBrands.map(slug => {
        let brand = brands.find(brand => brand.slug === slug)
        brand.colors.map((color,key) => {
          output += `@${slug}-${key} : #${color};\n`
        })
      })
  } 



 
  
  const blob = new Blob
  const Url = URL.createObjectURL(blob)
  setdownloadURL(Url)
  return () => {
    URL.revokeObjectURL(Url)
    setdownloadURL('')
  }
} 
}, [selectedBrands, cssMethod])

const getLink = () => {
    prompt('Here is the URL share', `http://localhost:3000/collection/${selectedBrands.join(',')}`)
}

  return (
    <div className='download'>
        <div className='actions'>
        <select onChange={e => setcssMethod(e.target.value)}>
          <option value='css'>CSS</option>
          <option value='scss'>SCSS</option>
          <option value='less'>LESS</option>
        </select>
        <a download={`brands.${cssMethod}`} href={downloadURL}>
            <GrDownload/>
        </a>
        
        <button onClick={getLink}>
            <GrLink/>
        </button>
        </div>
        <div className='selected' onClick={() => setselectedBrands([])}>
        <button><GrClose/></button>
        {selectedBrands.length} brands collected
        
        </div>
      
    </div>
  )
}

export default Download
