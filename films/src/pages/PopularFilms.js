import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import styled from 'styled-components';
import {motion} from 'framer-motion';


const PopularFilms = () => {
    // default year
  const year=new Date().getFullYear();
  // get movies
  const [movies,setMovies] = useState([])
  // fill url 
  const [currentYear,setCurrentYear] = useState(year)
  // fetching from user
  const [userYear,setUserYear] = useState();

  console.log(year);

  useEffect(()=>{
    async function getApi () {
        const url = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=${currentYear}&api_key=bdd6a290202b053fbed3da96bfba9943&page=1`);
      setMovies(url.data.results);
    }
    getApi();
    },[currentYear])

    // change year dynamic from input
    const handleNewYear = e => setUserYear(e.target.value);
    // change year in url
    const handleYear = () => setCurrentYear(userYear);

    return (
      <>    
      <Title>Best Dramas Current Year</Title>
      <Search>
        <input type="number" onChange={handleNewYear} value={userYear} placeholder="Choose Year"/> <button onClick={handleYear}>Search</button>
      </Search> 
<Wrapper>
    <MoviesBoxes>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
      ))}
    </MoviesBoxes>
</Wrapper>

      </>
  );
}

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const MoviesBoxes = styled(motion.div)`
    display: flex;
    justify-content: space-around;
    padding: .4rem .2rem;
    max-width: 1600px;
    flex-wrap: wrap;;
`;

const Title = styled(motion.h1)`
  font-size: 2rem;
  text-align: center;
  padding: 1rem 0rem;
  @media(max-width: 560px){
        font-size: 1.4rem;
    }
`;

const Search = styled.div`
    display: flex;
    justify-content: center;
    button{
        background: none;
        border: 2px solid black;
        padding: .48rem;
        cursor: pointer;
        font-weight: bold;
        margin-left: .3rem;
    }
    input{
        padding: .3rem;
        font-size: 1.1rem;
        font-weight: bold;
    }
`;
 
export default PopularFilms;