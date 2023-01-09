export default function TabParagraph({ text, isActive, id, handleClickTab }) {
  return (
    <p
      className={isActive ? "active" : ""}
      style={{ borderRadius: id === 2 ? "0 15px 15px 0" : "15px 0 0 15px" }}
      onClick={() => handleClickTab(id)}
    >
      {text}
    </p>
  );
}
