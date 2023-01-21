import Content from "./Content";

export default function CourseContent({ title, data }) {
  return (
    <div className="course-user">
      <h4 className="title-user">{title}</h4>
      <div className="row">
        {data?.map((d) => (
          <Content key={d.id} {...d} />
        ))}
      </div>
    </div>
  );
}
