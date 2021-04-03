import {MovieCard} from './MovieCard';
import {AddMovie} from './AddMovie';

export const MovieList = ({movielist, setmovie}) => {
    const handleOk = (addTerm) => {
        setmovie([...movielist, addTerm]);
    };
    return (
        <div>
            <AddMovie onOk={handleOk}/>
            <div className='movie-container'>
                {movielist.map((el,i) => (
                    <MovieCard key={i} item={el}/>
                ))}
            </div>
        </div>
    );
}