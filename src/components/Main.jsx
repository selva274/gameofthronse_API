import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';


const Main = () => {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        getcharacter();
    }, [])
    const getcharacter = async () => {
        const api = await fetch("https://thronesapi.com/api/v2/characters")
        const data = await api.json();
        setCharacters(data)
        console.log(data);
    }

    return (
        <div className='main'>
       <div className='trend'>
       <h1 style={{textTransform:"uppercase"}}>Trending Characters</h1>
       </div>
       <div className='row'>
            {
                <div className='char-card'>{
                characters.map((item) => (                   
                    <div className='col-lg-4 col-md-6'>
                    <div className='projectCard' key={item.id}>
                    <NavLink to={`/characters/${item.id}`} style={{textDecoration:"none",color:"black"}}>                     
                        <img src={item.imageUrl} alt='' />
                        <div className='info'>
                            <h1>{item.title}</h1>
                            <p>{item.fullName}</p>
                        </div>
                        </NavLink> 
                    </div>   
                    </div>              
                 ) )
                }
             </div>
            }
            </div>
        </div>
    )
}

export default Main