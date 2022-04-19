import MoviesComingList from "./components/MoviesComingList";
import MoviesInTheatreList from "./components/MoviesInTheatreList";
import TopRatedIndianList from "./components/TopRatedIndianList";
import TopRatedMoviesList from "./components/TopRatedMoviesList";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationMenu from "./components/common/navigationMenu";
import { Route, Routes, BrowserRouter} from 'react-router-dom';


function App(){
  return(
    
    <BrowserRouter>
     <NavigationMenu/>
    <Routes>
      <Route path="/Coming-Soon" element={<MoviesComingList />}></Route>
      <Route path="/Movies-in-Theaters" element={<MoviesInTheatreList />}></Route> 
      <Route path="/Top-Rated-Indian" element={<TopRatedIndianList />}></Route> 
      <Route path="/Top-Rated-Movies" element={<TopRatedMoviesList />}></Route>  
      <Route path="/" element={<MoviesInTheatreList />}></Route>     
    </Routes>
  </BrowserRouter>
  );
};

export default App;