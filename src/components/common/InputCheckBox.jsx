import "./common.scss";

export default function InputCheckBox({ labelText, value }) {
  return (
    <div className="checkbox-wrapper-40">
      <label>
        <input type="checkbox" value={value} />
        <span className="checkbox">{labelText}</span>
      </label>
    </div>
  );
}
