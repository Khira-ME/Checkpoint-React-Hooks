import './App.css';
import {Data} from './data';
import {MovieList} from './Component/MovieList';
import {FilterV2} from './Component/FilterV2';
import {useState} from 'react';
import Trailer from './Component/Trailer';
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
  const [movie, setMovie] = useState(Data);
  const [rateValue, setRateValue] = useState(5);
  const [inputFilter, setInputFilter] = useState('');
  const filterHandler = (searchTerm) => {
    setInputFilter(searchTerm);
  }

return (
  <div className="App">
    <h1 className="mekymovies">MeKy Movies</h1>
    <BrowserRouter>
      <FilterV2 ratevalue={rateValue} setratevalue={setRateValue} searching={filterHandler}/>
      <Route
        path="/movie/:id"
        render={(props) => <Trailer {...props} movielist={movie} />}
      />
      <MovieList movielist={movie.filter(el => el.rate <= rateValue && el.title.toLocaleLowerCase().includes(inputFilter.toLocaleLowerCase()))} setmovie={setMovie}/>
    </BrowserRouter>
  </div>

  );
}

export default App;
