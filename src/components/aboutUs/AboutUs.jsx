import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { aboutUsData } from "../../assets/consts/data";
import { getModalData } from "../../toolkit/reducers/getModalSlice";
import MainModal from "../modal/MainModal";
import AboutUsSwiper from "../swiper/AboutUsSwiper";
import "./aboutUs.scss";
import AboutUsHeader from "./AboutUsHeader";
import AboutUsPartner from "./AboutUsPartner";
import ModalContent from "./ModalContent";

export default function AboutUs() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state?.modal);
  const { users, aboutUs, experts } = aboutUsData;
  const [isClicked, setISclicked] = useState(false);
  const handleClickModalExpert = (data) => {
    setISclicked(true);
    dispatch(getModalData(data));
  };
  const handleClickModalUser = (data) => {
    setISclicked(true);
    dispatch(getModalData(data));
  };

  const handleClickCloseModal = () => {
    setISclicked(false);
    dispatch(getModalData(null));
  };

  return (
    <div className="about-us">
      <AboutUsHeader aboutUs={aboutUs} />
      <div className="about-us-swiper-content">
        <div>
          <h4 className="title">Експерти про нас:</h4>
          <AboutUsSwiper
            lists={experts}
            handleClickModal={handleClickModalExpert}
          />
        </div>
        <div>
          <h4 className="title">Користувачі про нас:</h4>
          <AboutUsSwiper
            lists={users}
            handleClickModal={handleClickModalUser}
          />
        </div>
      </div>
      <AboutUsPartner />
      {data && isClicked && (
        <MainModal>
          <ModalContent
            handleClickCloseModal={handleClickCloseModal}
            {...data}
          />
        </MainModal>
      )}
    </div>
  );
}
