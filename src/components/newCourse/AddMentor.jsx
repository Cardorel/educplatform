import { Image } from "react-bootstrap";
import InputContent from "../common/InputContent";
import SearchIco from "../../assets/svg/course/search.svg";

export default function AddMentor({ mentor, handleMentorOnChange }) {
  return (
    <div className="add-mentor">
      <InputContent
        text="Додайте лекторів:"
        color="#EDEDED"
        placeholder="Почніть вводити прізвище, ім’я ментора/викладача"
        type="text"
        imageUrl={SearchIco}
        value={mentor}
        handleOnChange={handleMentorOnChange}
      />
      <div className="mentor-img">
        <Image src="https://i.ibb.co/sJVP8ZL/teacher1.png" alt="mentor" />
        <Image src="https://i.ibb.co/2ZGng7b/teacher2.png" alt="mentor" />
        <Image src="https://i.ibb.co/bW6yfPf/teacher4.png" alt="mentor" />
        <Image src="https://i.ibb.co/h22fpx5/teacher5.png" alt="mentor" />
      </div>
    </div>
  );
}
