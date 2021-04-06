import {Link} from 'react-router-dom';
import { Button } from 'antd';

const Trailer = ({movielist,match}) => {
    let movie = movielist.find(el => el.title === match.params.id);
    let descriptionData;
    let trailerData;
    if(movie)
        descriptionData = <><p>{movie.description}</p></>
        trailerData = <><iframe title={movie.title} width="560" height="315" src={movie.trailer} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></>
    return (
        <div className='movie-page' style={{textAlign:'center'}}>
            <Link to='/'>
                <Button style={{marginBottom:20,width:200, height:50, color:'black', fontSize: 16, fontWeight:'600'}}>Close Trailer Page</Button>
            </Link>
            <div style={{color:'white', fontSize:20, fontWeight:'600', borderRadius:'4px solid black', backgroundColor: 'black'}}>
                <h1>Description :</h1>
                {descriptionData}
                <br></br>
                {trailerData}
            </div>
        </div>
    )
}

export default Trailer
