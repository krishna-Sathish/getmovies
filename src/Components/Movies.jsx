import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Movies = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=batman&apikey=263d22d8`)
      .then((response) => response.json())
      .then((value) => setData(value.Search));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`https://www.omdbapi.com/?s=${search}&apikey=263d22d8`)
      .then((response) => response.json())
      .then((value) => setData(value.Search));
    setSearch('');
  };

  const download = (url) => {
    fetch(url)
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'img.png');
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='container-fluid'>
      <center>
        <h1 className='text-primary mt-2'>Search Movies</h1>
        <Link to='/emoji' className='fs-4 '>Get Emoji here </Link>
        <form onSubmit={submitHandler}>
          <input
          className='form-control input-field mt-3'
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
              <br />
          <button value='Search' className='btn btn-success mb-4'>Search</button>
        </form>
        <div className="row">
          {data.length > 0 ? (
            data.map((img, i) => (
              <div className=" col-12 col-sm-6 col-md-4" key={i}>
                <div className="card mt-3" style={{width :'18rem'}}>
                  <img src={img.Poster} className="card-img-top img-fluid" alt={img.Title} />
                  <div className="card-body">
                    <h5 className="card-title">{img.Title}</h5>
                    <a
                      href=" "
                      className="btn btn-primary"
                      onClick={() => download(img.Poster)}
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      </center>
    </div>
  );
};

export default Movies;
