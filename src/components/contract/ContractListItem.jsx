export function ContractListItem({ sub_title, sub_data }) {
  return (
    <div className="contract-sub-list-content">
      {sub_title && <p className="sub-title">{sub_title}</p>}
      {sub_data.map(({ id, description, textNum, textColor }) => (
        <ContractListItemContent
          key={id}
          textNum={textNum}
          textColor={textColor}
          description={description}
        />
      ))}
    </div>
  );
}
function ContractListItemContent({ textNum, textColor, description }) {
  return (
    <div className="contract-sub-list-item-content">
      <p className="title">{textNum}</p>
      <p className="paragraph">
        {textColor && <span className="text-color">{textColor}</span>}{" "}
        <span>{description}</span>
      </p>
    </div>
  );
}
