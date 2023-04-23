import { useSelector, useDispatch } from "react-redux";
import { Home, Public, Login, Album, WeekRank, ZingChart, Search, SearchSongs, SearchAll, Singer, SearchPlaylist } from "./containers/public"
import { Route, Routes } from 'react-router-dom';
import { useEffect } from "react";

import path from "../src/untils/path";
import * as action from './store/action'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(action.getHome())
  }, [])
  // const { homeData } = useSelector(state => state.app)

  return (
    <>
      <div className="App">
        <Routes>
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.LOGIN} element={<Login />} />
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



            <Route path={path.STAR} element={<Home />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
