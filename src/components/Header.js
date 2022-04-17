import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Header() {
    
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate()

    const handleOnClick = (e) => {
      if(window.location.pathname === "/"){
        return window.location.reload();
      } else {
        navigate(`/`)
        window.location.reload();
      }
    }

    const handleOnSubmit = (e) => {
      e.preventDefault();
      
      if(searchTerm.trim()) {
        navigate(`/query_parameter=${searchTerm.trim()}`)
        setSearchTerm('');        
      } else { 
        if(window.location.pathname === "/"){
          return window.location.reload();
        }        
         navigate(`/`);
         window.location.reload();
      };
    };

    const handleOnChange = (e) => {
      setSearchTerm(e.target.value);
    }

  return (
    <header className='header'>
        <div>
        <img onClick={handleOnClick} className='logo' src='https://www.logolynx.com/images/logolynx/57/57fea35f0892fbf23dc01bf2f96544e6.png' alt="logo"></img>
        </div>
        <form onSubmit={handleOnSubmit}>
            <input className='search' type="search" placeholder='Search...' value={searchTerm} onChange={handleOnChange}/>
        </form>
    </header>
  )
}

export default Header
