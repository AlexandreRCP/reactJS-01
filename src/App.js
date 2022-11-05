import React, { useState } from 'react';
import GitImage from './imageGit.webp';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [userData, setUserData] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${search}`)
      .then(response => response.json())
      .then(userResponse => setUserData(userResponse));
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className="container text-center">
      <h1 className="py-5 text-uppercase">Github profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              required
              value={search}
              onChange={handleChange}
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-success">
                Search
              </button>
            </span>
          </div>
        </div>
      </form>
      <div className="py-5">
        {!userData && (
          <img
            src={GitImage}
            className="responsive rounded-circle"
            alt=""
            height="200px"
          />
        )}
        {userData && (
          <div>
            <img
              src={userData.avatar_url}
              className="responsive rounded-circle"
              alt=""
              height="200px"
            />
            <h1 className="pt-5">
              <h3>Tipo de usúario:
                <span class="text-primary"> {userData.type}</span>
              </h3>
              <h3>Nome: 
                <a href={userData.html_url} target="_new">
                  {userData.name}
                </a>
              </h3>
              <h3>Cidade: 
                <span class="text-primary"> {userData.location}</span>
              </h3>
              <h3>Site:
                <a href={userData.blog} target="_new" className="text-info">
                  {userData.blog}
                </a>
              </h3>
              <h3>Email:
                <span class="text-primary"> {userData.email}</span>
              </h3>
              <h3>Empresa:
                <span class="text-primary"> {userData.company}</span>
              </h3>
              <h3>Biografia:
                <span class="text-primary"> {userData.bio}</span>
              </h3>
              <h3>Nome Twitter:
                <span class="text-primary"> {userData.twitter_username}</span>
              </h3>
              <h3>Repositórios Públicos:
                <span class="text-primary"> {userData.public_repos}</span>
              </h3>
              <h3>Repositórios Privados:
                <span class="text-primary"> {userData.public_gists}</span>
              </h3>
              <h3>Seguidores:
                <span class="text-primary"> {userData.followers}</span>
              </h3>
              <h3>Seguindo:
                <span class="text-primary"> {userData.following}</span>
              </h3>
              <h3>Criado em: 
                <span class="text-primary"> {userData.created_at}</span>
              </h3>
              <h3>Último commit:
                <span class="text-primary"> {userData.updated_at}</span>
              </h3>
            </h1>
          </div>
        )}
      </div>
    </div>
  ); 
}

export default App;