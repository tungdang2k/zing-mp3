import { useSelector, useDispatch } from "react-redux";
import { Home, Public, Login, Album,WeekRank } from "./containers/public"
import { Route, Routes } from 'react-router-dom';
import { useEffect } from "react";

import path from "../src/untils/path";
import * as action from './store/action'

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(action.getHome())
  },[])
  // const { homeData } = useSelector(state => state.app)

  return (
    <>
      <div className="App">
        <Routes>
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.LOGIN} element={<Login />} />
            <Route path={path.ALBUM__TITLE__PID } element={<Album/>}/>
            <Route path={path.PLAYLIST__TITLE__PID } element={<Album/>}/>
            <Route path={path.WEEKRANK__TITLE__PID } element={<WeekRank/>}/>

            <Route path={path.STAR} element={<Home />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
