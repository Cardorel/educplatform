import Interest from "./Interest";

export default function InterestContent({ title, data }) {
  return (
    <div className="interest-user">
      <h4 className="title-user">{title}</h4>
      <div className="row">
        {data?.map((d) => (
          <Interest key={d.id} {...d} />
        ))}
      </div>
    </div>
  );
}
