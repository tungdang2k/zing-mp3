import React from 'react'
import { useSelector } from 'react-redux'
const Player = () => {

<<<<<<< HEAD
  const {currentSongId} = useSelector(state => state.music)
  console.log(currentSongId);
  
=======
import * as apis from "../apis";
import icons from "../untils/icons";
import * as actions from "../store/action";
import { LoadingSong } from "./";
const {
  AiOutlineHeart,
  HiDotsHorizontal,
  BiShuffle,
  BiSkipNext,
  BiSkipPrevious,
  FiRepeat,
  FaPlay,
  AiOutlinePause,
  TbRepeatOnce,
  BsMusicNoteList,
  BsVolumeMuteFill,
  BsFillVolumeUpFill,
  BsVolumeDownFill,
} = icons;

const Player = ({ setIsShowRightSidebar }) => {
  const { currentSongId, isPlaying, songs } = useSelector(
    (state) => state.music
  );
  const [songInfo, setSongInfo] = useState(null);
  const [curSeconds, setCurSeconds] = useState(0);
  const [isShuffle, setIsShuffle] = useState(false);
  const [repeatMode, setRepeatMode] = useState(0);
  const [isLoadedSource, setIsLoadedSource] = useState(true);
  const [audio, setAudio] = useState(new Audio());
  const [volume, setVolume] = useState(100);

  const dispatch = useDispatch();
  const thumbRef = useRef();
  const trackRef = useRef();
  useEffect(() => {
    const fetchDetailtSong = async () => {
      setIsLoadedSource(false);

      const [res1, res2] = await Promise.all([
        apis.apiGetDetailSong(currentSongId),
        apis.apiGetSong(currentSongId),
      ]);
      setIsLoadedSource(true);
      if (res1.data.err === 0) {
        setSongInfo(res1?.data?.data);
        dispatch(actions.setCurSongData(res1?.data?.data))
      }
      if (res2.data.err === 0) {
        audio.pause();
        setAudio(new Audio(res2?.data?.data["128"]));
      } else {
        audio.pause();
        setAudio(new Audio());
        dispatch(actions.play(false));
        setCurSeconds(0);
        thumbRef.current.style.cssText = `right:100%`;
        // alert('Bài hát chỉ dành cho vip')
      }
    };
    fetchDetailtSong();
  }, [currentSongId]);

  useEffect(() => {
    let intervalId;

    audio.load();
    if (isPlaying) {
      audio.play();
      intervalId = setInterval(() => {
        let percent = Math.round(
          (audio.currentTime * 10000) / songInfo?.duration / 100
        );
        thumbRef.current.style.cssText = `right:${100 - percent}%`;
        setCurSeconds(Math.round(audio.currentTime));
      }, 200);
    }

    return () => intervalId && clearInterval(intervalId);
  }, [audio]);

  useEffect(() => {
    const handleEnded = () => {
      if (isShuffle) {
        handleShuffle();
      } else if (repeatMode) {
        repeatMode === 1 ? handleRepeatOne() : handleNextSong();
      } else {
        audio.pause();
        dispatch(actions.play(false));
      }
    };
    audio.addEventListener("ended", handleEnded);

    return () => audio.removeEventListener("ended", handleEnded);
  }, [audio, isShuffle, repeatMode]);

  useEffect(()=>{
    audio.volume = volume / 100;

  },[volume])
  const handleTogglePlayMusic = () => {
    if (isPlaying) {
      audio.pause();
      dispatch(actions.play(false));
    } else {
      audio.play();
      dispatch(actions.play(true));
    }
  };

  const handleClickProgressbar = (e) => {
    const trackRect = trackRef.current.getBoundingClientRect();
    const percent =
      Math.round(((e.clientX - trackRect.left) * 10000) / trackRect.width) /
      100;
    thumbRef.current.style.cssText = `right:${100 - percent}%`;
    audio.currentTime = (percent * songInfo.duration) / 100;
    setCurSeconds(Math.round((percent * songInfo.duration) / 100));
  };

  const handleRepeatOne = () => {
    audio.play();
  };

  const handlePrevSong = () => {
    if (songs) {
      let currentSongIndex;
      songs?.forEach((item, index) => {
        if (item.encodeId === currentSongId) currentSongIndex = index;
      });
      dispatch(actions.setCurrentSongId(songs[currentSongIndex - 1].encodeId));
      dispatch(actions.play(true));
    }
  };

  const handleNextSong = () => {
    if (songs) {
      let currentSongIndex;
      songs?.forEach((item, index) => {
        if (item.encodeId === currentSongId) currentSongIndex = index;
      });
      dispatch(actions.setCurrentSongId(songs[currentSongIndex + 1].encodeId));
      dispatch(actions.play(true));
    }
  };

  const handleShuffle = () => {
    const randomIndex = Math.round(Math.random() * songs?.length) - 1;
    dispatch(actions.setCurrentSongId(songs[randomIndex].encodeId));
    dispatch(actions.play(true));
  };
>>>>>>> 91464eb50fac1167e8cff16304bc0d04aff6fdf9
  return (
    <div className='bg-main-400 px-5 h-full  flex'>
      <div className="w-[30%] flex-auto border border-red-500 ">
        details songs
      </div>
      <div className="w-[40%] flex-auto border border-red-500 "> main player</div>
      <div className="w-[30%] flex-auto border border-red-500 "> volume</div>
    </div>
  )
}

export default Player
