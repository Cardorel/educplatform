import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { aboutUsData } from "../../assets/consts/data";
import { getModalData } from "../../toolkit/reducers/getModalSlice";
import ModalContent from "../aboutUs/ModalContent";
import Button from "../common/Button";
import ButtonWithArrow from "../common/ButtonWithArrow";
import MainModal from "../modal/MainModal";
import AboutUsSwiper from "../swiper/AboutUsSwiper";
import "./tutor.scss";
import TutorContent from "./TutorContent";
import AddIco from "../../assets/svg/course/cross.svg";
import { useNavigate } from "react-router-dom";
import { authentification } from "../../firebase/config";
import { useIdToken } from "react-firebase-hooks/auth";
import { getCoursesAsync } from "../../toolkit/reducers/setCourseContentSlice";

export default function Tutor() {
  const [user] = useIdToken(authentification);
  const { users } = aboutUsData;
  const [isClicked, setISclicked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state?.modal);
  const collection = useSelector((s) => s.collection?.data);

  useEffect(() => {
    dispatch(getCoursesAsync(user?.email));
  }, [dispatch, user?.email]);

  const handleClickModalUser = (data) => {
    setISclicked(true);
    dispatch(getModalData(data));
  };

  const handleClickCloseModal = () => {
    setISclicked(false);
    dispatch(getModalData(null));
  };
  return (
    <div className="tutor">
      <div className="tutor-container">
        <h3>Перегляньте створені Вами курси</h3>
        <div>
          {collection?.map((d, idx) => (
            <TutorContent idx={idx} key={d.id} {...d} />
          ))}
        </div>
      </div>
      <div className="add-btn-content">
        <ButtonWithArrow text="Перегляньте статистику відвідуваності" />
        <Button
          text="Створіть новий курс"
          imageUrl={AddIco}
          padding="20px 200px"
          handleClick={() => navigate("/new-course")}
        />
      </div>
      <div className="tutor-swiper">
        <h4 className="title">Користувачі про нас:</h4>
        <AboutUsSwiper
          init={2}
          lists={users}
          handleClickModal={handleClickModalUser}
        />
      </div>
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
