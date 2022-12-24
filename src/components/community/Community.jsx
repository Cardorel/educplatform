import React from "react";
import CommunityHeader from "./CommunityHeader";
import "./community.scss";
import { communityData } from "../../assets/consts/data";
import CommunityCondition from "./CommunityCondition";
import CommunityMessage from "./CommunityMessage";
import { useDispatch, useSelector } from "react-redux";
import { getModalData } from "../../toolkit/reducers/getModalSlice";
import CommunityModalContent from "./CommunityModalContent";
import MainModal from "../modal/MainModal";

export default function Community() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state?.modal);
  const { conditions, messages } = communityData;

  const handleClickMessage = (data, index) => {
    dispatch(getModalData({ ...data, index }));
  };

  const handleCloseModal = () => dispatch(getModalData(null));

  return (
    <div className="community">
      <h2 className="community-title">Політика для спільноти</h2>
      <CommunityHeader />
      <CommunityCondition conditions={conditions} />
      <CommunityMessage
        messages={messages}
        handleClickMessage={handleClickMessage}
      />
      {data && (
        <MainModal>
          <CommunityModalContent
            handleCloseModal={handleCloseModal}
            {...data}
          />
        </MainModal>
      )}
    </div>
  );
}
