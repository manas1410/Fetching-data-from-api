import './App.css';
import { useState, useEffect} from 'react';

function GithubUser({name,username, avatar}){
  return (
    <div>
      <h1>{name}</h1>
      <p>{username}</p>
      <img src={avatar} height={150} alt = {name}/>
    </div>
  )
}

function App() {
  const [data,setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/manas1410`)
      .then((response) => response.json())
      .then(setData);
  }, []);
  if (data) return (<GithubUser name={data.name} username={data.login} avatar={data.avatar_url}/>);
  return <h1>Data</h1>;
}

export default App;
