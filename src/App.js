import { useSelector, useDispatch } from "react-redux";
<<<<<<< HEAD
import { Home, Public, Login } from "./containers/public"
=======
import { Home, Public, Login, Album, WeekRank, ZingChart, Search, SearchSongs, SearchAll, Singer, SearchPlaylist } from "./containers/public"
>>>>>>> 91464eb50fac1167e8cff16304bc0d04aff6fdf9
import { Route, Routes } from 'react-router-dom';
import { useEffect } from "react";

import path from "../src/untils/path";
import * as action from './store/action'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(action.getHome())
<<<<<<< HEAD
  },[])
  const { homeData } = useSelector(state => state.app)
=======
  }, [])
  // const { homeData } = useSelector(state => state.app)
>>>>>>> 91464eb50fac1167e8cff16304bc0d04aff6fdf9

  return (
    <>
      <div className="App">
        <Routes>
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.LOGIN} element={<Login />} />
<<<<<<< HEAD
=======
            <Route path={path.ALBUM__TITLE__PID} element={<Album />} />
            <Route path={path.PLAYLIST__TITLE__PID} element={<Album />} />
            <Route path={path.WEEKRANK__TITLE__PID} element={<WeekRank />} />
            <Route path={path.ZING_CHART} element={<ZingChart />} />
            <Route path={path.HOME__SINGER} element={<Singer />} />
            <Route path={path.HOME_ARTIST__SINGER} element={<Singer />} />

            <Route path={path.SEARCH} element={<Search />}>
              <Route path={path.ALL} element={<SearchAll />} />
              <Route path={path.SONG} element={<SearchSongs />} />
              <Route path={path.PLAYLIST_SEARCH} element={<SearchPlaylist />} />
            </Route>


>>>>>>> 91464eb50fac1167e8cff16304bc0d04aff6fdf9

            <Route path={path.STAR} element={<Login />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
