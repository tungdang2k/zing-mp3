import actionTypes from "../action/actionTypes"

const initState = {
    banner: [],
    friday: {},
    newEveryday: {},
    top100: {},
    xone: {},
    newMusic: {},
    isLoading: false,
    newRelease: {},
    weekChart: [],
    favoritedArtist: {},
    artistTheme: {},
    chart: {},
    rank: [],
    singers: null,
    livestream: null,
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return {
                ...state,
                banner: action.homeData?.find(item => item.sectionId === 'hSlider')?.items || null,
                friday: action.homeData?.find(item => item.sectionId === 'hAutoTheme1') || null,
                newEveryday: action.homeData?.find(item => item.sectionId === 'hAutoTheme2') || null,
                top100: action.homeData?.find(item => item.sectionId === 'h100') || null,
                xone: action.homeData?.find(item => item.sectionId === 'hXone') || null,
                newMusic: { ...action.homeData?.find(item => item.sectionId === 'hAlbum'), title: 'Nhạc mới' } || null,
                newRelease: action.homeData?.find(item => item.sectionType === 'new-release') || null,
                weekChart: action.homeData?.find(item => item.sectionType === 'weekChart')?.items || null,
                favoritedArtist: action.homeData?.find(item => item.sectionId === 'hMix') || null,
                artistTheme: action.homeData?.find(item => item.sectionId === 'hArtistTheme') || null,
                chart: action.homeData?.find(item => item.sectionId === 'hZC')?.chart || null,
                rank: action.homeData?.find(item => item.sectionId === 'hZC')?.items || null,
                singers: action.homeData?.find(item => item.sectionType === 'artistSpotlight')?.items || null,
                livestream: action.homeData?.find(item => item.sectionType === 'livestream')?.items || null,
            }

        case actionTypes.LOADING:
            return {
                ...state,
                isLoading: action.flag
            }
        default:
            return state;
    }

}

export default appReducer