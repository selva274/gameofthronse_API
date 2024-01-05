import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../App.css"
import { Person } from '@mui/icons-material';

const Search = () => {
  const {search}=useParams();
  const [searchedCharacter,setSearchCharacter]=useState('');
  
  useEffect(() => {
    getcharacter(search);
}, [search])
const getcharacter = async (search) => {
    const api = await fetch(`https://thronesapi.com/api/v2/characters/${search}`)
    const data = await api.json();
    setSearchCharacter(data)
    
}
  return (
    <div className='searchedItem'>
    <div className='container'>
      <div className='container-content'>
        <img src={searchedCharacter.imageUrl} alt=''/>
        <h2>{searchedCharacter.title}</h2>
        <p><Person/>{searchedCharacter.fullName}</p>
      </div>
    </div>
    </div>

  )
}

export default Search