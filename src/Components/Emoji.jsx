import React, { useEffect, useState } from 'react'
import emoji from './emoji.json';
const Emoji = () => {
    const [search,setSearch]=useState('');
    const [data,setData]=useState([]);
    useEffect(()=>{
        const filterData=emoji.filter(emoData=>emoData.title.toLowerCase().includes(search.toLowerCase()))
         setData(filterData);
        console.log(search);

    },[search])
  return (
    <div className='container-fluid'>
        <center>
          <h1 className='text-primary mt-2'> Search Emoji</h1>
          <form>
            <input type="text" name='search' value={search} onChange={e=>setSearch(e.target.value)} className='form-control input-field' />
          </form>

          <div className="row">
             {
                data.map((emo)=>(
                    <div className="col">
                         <li>{emo.symbol}</li>
                    </div>
                ))
             }
          </div>
          </center>
    </div>
  )
}

export default Emoji
