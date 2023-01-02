import "./common.scss";

export default function InputCheckBox({
  labelText,
  value,
  handleChangeByChecking,
  isChecked,
}) {
  return (
    <div className="checkbox-wrapper-40">
      <label>
        <input
          type="checkbox"
          value={value}
          checked={isChecked}
          onChange={handleChangeByChecking}
        />
        <span className="checkbox">{labelText}</span>
      </label>
    </div>
  );
}
