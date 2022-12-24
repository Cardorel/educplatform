import { HelpItemContent } from "./HelpItemContent";

export function HelpListContent({ title, sub_data }) {
  return (
    <div className="help-content-A-content">
      <h5 className="title">{title}</h5>
      <ol className="list">
        {sub_data.map(({ sub_title, isActive, description, id }) => (
          <HelpItemContent
            key={id}
            sub_title={sub_title}
            isActive={isActive}
            description={description}
          />
        ))}
      </ol>
    </div>
  );
}
