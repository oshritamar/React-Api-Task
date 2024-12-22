import './App.css';
import './components/ExpenseDate.css';
import Expenses from './components/Expenses';
import {useEffect, useState} from 'react';

function App() {
  const [shows, setShows]=useState([]);
  useEffect(()=> {
    const fetchShows= async()=>{
      try{
      const response= await fetch("https://api.tvmaze.com/shows");
      const data= await response.json();
      const shows = data.filter(show => show.type === "Reality");
      const formatShows= shows.map(show=>({
        name:show.name,
        date:show.premiered,
        image:show.image.original,
        summary:show.summary
      }));
      setShows(formatShows);
    } catch(error){
      console.log(error);
    }
  }
  fetchShows();
   },[]);

  return (
    <div className="App">
      <h1>TV Shows</h1>
      <Expenses items={shows}/>
    </div>
  )
}
export default App;