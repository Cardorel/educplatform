import React from "react";
import MoreIco from "../../assets/svg/video/more.svg";
import LessIco from "../../assets/svg/video/less.svg";
import PrevIco from "../../assets/svg/video/prev.svg";
import NextIco from "../../assets/svg/video/next.svg";
import PlayIco from "../../assets/svg/video/play.svg";
import PauseIco from "../../assets/svg/video/pause.svg";
import ResetIco from "../../assets/svg/video/reset.svg";
import YoutubeIco from "../../assets/svg/video/youtube.svg";
import FullIco from "../../assets/svg/video/full.svg";
import ParametersIco from "../../assets/svg/video/parameter.svg";
import VolumIco from "../../assets/svg/video/volum.svg";
import SubTitleIco from "../../assets/svg/video/subTitre.svg";
import { Image } from "react-bootstrap";

export default function BottomVideoContent({
  handlePlay,
  handlePause,
  handleReset,
  handleLess,
  handleMore,
  handleNext,
  handlePrev,
  isActived,
  range,
  handleRange,
  handleVolum,
  handleFull,
}) {
  return (
    <div className="bottom-video-content">
      <div className="bottom-video-row">
        <button className="img-ico" onClick={handlePlay}>
          <Image src={PlayIco} alt="play-ico" />
        </button>
        <button className="img-ico" onClick={handleReset}>
          <Image src={ResetIco} alt="reset-ico" />
        </button>
        <button className="img-ico" onClick={handlePause}>
          <Image src={PauseIco} alt="pause-ico" />
        </button>
        <button className="img-ico" onClick={handleLess}>
          <Image src={LessIco} alt="less-ico" />
        </button>
        <button className="img-ico" onClick={handleMore}>
          <Image src={MoreIco} alt="more-ico" />
        </button>
        <button className="img-ico" onClick={handlePrev}>
          <Image src={PrevIco} alt="prev-ico" />
        </button>
        <button className="img-ico" onClick={handleNext}>
          <Image src={NextIco} alt="next-ico" />
        </button>
        <div className="img-ico">
          <span>0:00</span>
          <span>/</span>
          <span>10:00</span>
        </div>
      </div>
      <div className="bottom-video-row">
        <div className="img-ico youtube">
          <Image src={YoutubeIco} alt="youtube-ico" />
        </div>
        <div className="bottom-video-row">
          <div>
            <select defaultValue="1">
              <option value="0.1">0.1x</option>
              <option value="0.5">0.5x</option>
              <option value="1">1x</option>
              <option value="1.5">1.5x</option>
              <option value="1.75">1.75x</option>
              <option value="2">2x</option>
            </select>
          </div>
          <button className="img-ico">
            <Image src={SubTitleIco} alt="sub-title-ico" />
          </button>
          <button className="img-ico">
            <Image src={ParametersIco} alt="parameter-ico" />
          </button>
          <button className="img-ico" onClick={handleVolum}>
            <Image src={VolumIco} alt="volume-ico" />
            {isActived && (
              <input
                className="input-range"
                value={range}
                type="range"
                max={100}
                min={0}
                onChange={handleRange}
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </button>
          <button className="img-ico" onClick={handleFull}>
            <Image src={FullIco} alt="full-ico" />
          </button>
        </div>
      </div>
    </div>
  );
}
