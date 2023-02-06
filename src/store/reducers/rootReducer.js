import { combineReducers } from "redux"
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

import appReducer from "./appReducer";
import musicReducer from "./musicReducer";

const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2
}

const mucsicConfig ={
    ...commonConfig,
    key:'music',
    whitelist:['currentSongId']
}

const rootReducer = combineReducers({
    app: appReducer,
    music: persistReducer(mucsicConfig, musicReducer),
})

export default rootReducer

