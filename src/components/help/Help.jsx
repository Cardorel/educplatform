import { useState } from "react";
import { helpData } from "../../assets/consts/data";
import ContactHelp from "../contact/ContactHelp";
import "./help.scss";
import HelpBar from "./HelpBar";
import HelpContent from "./HelpContent";

export default function Help() {
  const [helpDatas] = useState(helpData);
  return (
    <div className="help">
      <h2 className="help-title">Q&A</h2>
      <div className="help-content">
        {helpDatas.map(({ id, title, data }) => (
          <HelpContent key={id} title={title} data={data} />
        ))}
      </div>
      <HelpBar />
      <ContactHelp />
    </div>
  );
}
