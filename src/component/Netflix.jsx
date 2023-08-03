import React from 'react';
import Row from "../component/Row";
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function Netflix() {
  return (
    <div className='netflix'>
    <Nav/>
      <Banner/>
      <Row title = "Netflix-Orignals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title = "Treanding Now" fetchUrl={requests.fetchTrending}/>
      <Row title = "Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title = "Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title = "Romance Movies" fetchUrl={requests.fetchRomanticMovies}/>
      <Row title = "Documenteries" fetchUrl={requests.fetchDocumenteries}/>
    </div>
  )
}

export default Netflix
