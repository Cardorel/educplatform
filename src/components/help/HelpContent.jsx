import React from "react";
import { HelpListContent } from "./HelpListContent";

export default function HelpContent({ title, data }) {
  return (
    <div className="help-content-A">
      <h4 className="help-content-A-title">{title}</h4>
      {data.map(({ title, id, sub_data }) => (
        <HelpListContent key={id} title={title} sub_data={sub_data} />
      ))}
    </div>
  );
}
