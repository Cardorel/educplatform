import { useRef, useState, useEffect } from "react";
import { BigPlayButton, ControlBar, Player } from "video-react";
import BottomVideoContent from "./BottomVideoContent";
import TopVideoContent from "./TopVideoContent";
import { formatTime } from "../common/formatingTime";

export default function VideoContent({
  videoInfo,
  handleEnded,
  setIndex,
  setIsClear,
  setIsResult,
}) {
  const [range, setRange] = useState(50);
  const [isFull, setIsFull] = useState(true);
  const [isActived, setIsActived] = useState(false);
  const [videoTime, setVideoTime] = useState(0);
  const { title, image, video, indx } = videoInfo;
  const refPlayer = useRef(null);
  useEffect(() => {
    const intervalID = setInterval(() => {
      const currentTime = refPlayer?.current?.video?.props?.player.currentTime;
      setVideoTime(formatTime(+currentTime));
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  const handlePlay = () => refPlayer.current.actions.play();
  const handleRange = (e) => {
    setRange(e.target.value);
    refPlayer.current.actions.changeVolume(+range);
  };
  const handleVolum = () => setIsActived((d) => !d);
  const handleFull = () => {
    refPlayer.current.actions.toggleFullscreen();
    setIsFull(false);
  };
  const handleLess = () => refPlayer.current.actions.forward(-10);
  const handleMore = () => refPlayer.current.actions.forward(10);
  const handleReset = () => refPlayer.current.actions.replay();
  const handleNext = () => {
    setIndex((n) => n + 1);
    setIsClear(true);
    setIsResult(false);
  };
  const handlePause = () => refPlayer.current.actions.pause();
  const handlePrev = () => {
    setIndex((n) => n - 1);
    setIsClear(true);
    setIsResult(false);
  };
  const handleCloseRange = () => "";
  const duration = refPlayer?.current?.video?.props.player.duration || 0;

  return (
    <div className="video-content" onClick={handleCloseRange}>
      <TopVideoContent title={title} indx={indx} />
      <Player
        poster={image}
        fluid={false}
        height={544}
        width="100%"
        ref={refPlayer}
        onEnded={handleEnded}
      >
        <source src={video} />
        <BigPlayButton position="center" />
        <ControlBar autoHide={false} disableDefaultControls={isFull} />
      </Player>
      <BottomVideoContent
        handlePlay={handlePlay}
        isActived={isActived}
        range={range}
        handleRange={handleRange}
        handleVolum={handleVolum}
        handleFull={handleFull}
        handleLess={handleLess}
        handleMore={handleMore}
        handleReset={handleReset}
        handleNext={handleNext}
        handlePause={handlePause}
        handlePrev={handlePrev}
        currentTime={videoTime}
        duration={formatTime(+duration)}
      />
    </div>
  );
}
