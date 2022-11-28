import { skills } from "../../assets/consts/data";

export default function Skills() {
  return (
    <div className="skill-content">
      <h3 className="skill-title">Навички, якими Ви володієте</h3>
      <div className="skill-paragraphs">
        {skills.map((skill, idx) => (
          <p className="skill-text" key={idx}>
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
}
