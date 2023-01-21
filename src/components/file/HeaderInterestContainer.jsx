import InterestContent from "../common/InterestContent";
import CoursesHeader from "../courses/CoursesHeader";

export default function HeaderInterestContainer({ interests, children }) {
  return (
    <div className="header-interest-container">
      <CoursesHeader />
      <div className="header-interest-content">
        <div className="content">
          <InterestContent data={interests} title="Категорії інтересів:" />
          <InterestContent data={interests} title="Категорії інтересів:" />
        </div>
        {children}
      </div>
    </div>
  );
}
