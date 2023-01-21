import { useRef, useState } from "react";
import { BigPlayButton, ControlBar, Player } from "video-react";
import BottomVideoContent from "./BottomVideoContent";
import TopVideoContent from "./TopVideoContent";

export default function VideoContent() {
  const [range, setRange] = useState(50);
  const [isFull, setIsFull] = useState(true);
  const [isActived, setIsActived] = useState(false);
  const refPlayer = useRef(null);
  console.log(refPlayer.current);
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
  const handleNext = () => {};
  const handlePause = () => refPlayer.current.actions.pause();
  const handlePrev = () => {};
  const handleCloseRange = () => "";
  return (
    <div className="video-content" onClick={handleCloseRange}>
      <TopVideoContent />
      <Player
        poster="https://i.ibb.co/sgbkXJR/pexels-moose-photos-1037999.jpg"
        fluid={false}
        height={544}
        width={1000}
        ref={refPlayer}
      >
        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
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
      />
    </div>
  );
}
