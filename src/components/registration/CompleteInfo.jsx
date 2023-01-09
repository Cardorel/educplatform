import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { completeInfo } from "../../assets/consts/data";
import { createUser } from "../../firebase/config";
import Button from "../common/Button";
import InputCheckBox from "../common/InputCheckBox";
import InputText from "../common/InputText";
import Select from "../common/Select";
import JoinContainer from "../joinUs/JoinContainer";

export default function CompleteInfo() {
  const navigate = useNavigate();
  const data = useSelector((state) => state?.setUser?.data);
  const { countries, days, months, languages, years } = completeInfo;
  const [info, setInfo] = useState({
    day: "01",
    month: "січень",
    year: 2009,
    country: "Афганістан",
    language: "англійська",
    interest: "",
    character: "",
  });
  const [sex, setSex] = useState({
    male: "",
    femele: "",
  });
  const [whichSex, setWhichSex] = useState({
    isMale: false,
    isFemele: false,
  });

  const handleChangeDay = (e) =>
    setInfo((i) => ({ ...i, day: e.target.value }));
  const handleChangeMonth = (e) =>
    setInfo((i) => ({ ...i, month: e.target.value }));
  const handleChangeYear = (e) =>
    setInfo((i) => ({ ...i, year: e.target.value }));
  const handleChangeCountry = (e) =>
    setInfo((i) => ({ ...i, country: e.target.value }));
  const handleChangeInterest = (e) =>
    setInfo((i) => ({ ...i, interest: e.target.value }));
  const handleChangeCharacter = (e) =>
    setInfo((i) => ({ ...i, character: e.target.value }));
  const handleChangeLanguage = (e) =>
    setInfo((i) => ({ ...i, language: e.target.value }));
  const handleChangeMale = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setSex((d) => ({ femele: "", male: "Чоловіча" }));
      setWhichSex(() => ({ isFemele: false, isMale: true }));
    } else {
      setSex((d) => ({ femele: "", male: "" }));
      setWhichSex((s) => ({ ...s, isMale: false }));
    }
  };
  const handleChangeFemele = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setSex(() => ({ male: "", femele: "Жіноча" }));
      setWhichSex(() => ({ isMale: false, isFemele: true }));
    } else {
      setSex((d) => ({ femele: "", male: "" }));
      setWhichSex((s) => ({ ...s, isMale: false }));
    }
  };

  const handleSubmitCompleteInfo = async () => {
    const {
      name,
      user,
      displayName: userName,
      email,
      phone: number,
      status,
      imageUrl,
    } = data;
    try {
      await createUser(user, {
        name,
        displayName: userName,
        email,
        phone: number,
        status,
        imageUrl,
        info,
        sex,
      });
      navigate("/success-message", { replace: true });
    } catch (error) {}
  };

  return (
    <JoinContainer>
      <div className="complete-info">
        <h4>Доповніть інформацію про себе</h4>
        <p className="text">
          Ця інформація потрібна для кращої роботи системи автоматичного підбору
          курсів. Вони будуть відповідати віднині Вашим смакам та вимогам.
        </p>
        <div className="complete-content">
          <div className="complete-row">
            <h3>Дата народження:</h3>
            <Select
              selectValue={info?.day}
              data={days}
              handleChangeSelect={handleChangeDay}
            />
            <Select
              selectValue={info?.month}
              data={months}
              handleChangeSelect={handleChangeMonth}
            />
            <Select
              selectValue={info?.year}
              data={years}
              handleChangeSelect={handleChangeYear}
            />
          </div>
          <div className="complete-row">
            <div className="status-content">
              <h3 className="status">Ваша стать:</h3>
              <div className="inputs">
                <InputCheckBox
                  isChecked={whichSex?.isMale}
                  labelText="Чоловіча"
                  handleChangeByChecking={handleChangeMale}
                  value={sex?.male}
                />
                <InputCheckBox
                  isChecked={whichSex?.isFemele}
                  labelText="Жіноча"
                  handleChangeByChecking={handleChangeFemele}
                />
              </div>
            </div>
            <div>
              <div className="complete-col">
                <h3>Я з:</h3>
                <Select
                  selectValue={info?.country}
                  data={countries}
                  handleChangeSelect={handleChangeCountry}
                />
              </div>
              <div className="complete-col-l">
                <h3>Я спілкуюся:</h3>
                <Select
                  selectValue={info?.language}
                  data={languages}
                  handleChangeSelect={handleChangeLanguage}
                />
              </div>
              <p className="text-l">
                Тут Ви можете додати кілька мов. Це допоможе нам рекомендувати
                Вам цікаві курси іншими мовами.
              </p>
            </div>
          </div>
          <div className="complete-row">
            <h3 className="input-title">Мої інтереси:</h3>
            <InputText
              value={info?.interest}
              color="#FF5600"
              placeholder="Почніть вводити інтереси"
              handleOnChange={handleChangeInterest}
            />
          </div>
          <div className="complete-row">
            <h3 className="input-title">Риси характеру:</h3>
            <InputText
              color="#FF5600"
              value={info?.character}
              placeholder="Почніть вводити риси характеру"
              handleOnChange={handleChangeCharacter}
            />
          </div>
          <p className="text-help">
            Це потрібно для пошуку нових співрозмовників. Наша розумна система
            проаналізує та запропонує найкращі варіанти. Так Ви уникнете
            нецікавих Вам людей та швидше розширите коло друзів.
          </p>
          <div className="btn-content">
            <Button
              handleClick={handleSubmitCompleteInfo}
              text="ПРОДОВЖИТИ"
              padding="15px 200px"
            />
          </div>
        </div>
      </div>
    </JoinContainer>
  );
}
