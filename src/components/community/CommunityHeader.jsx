import BigLogo from "../logo/BigLogo";

export default function CommunityHeader() {
  return (
    <div className="community-header">
      <div className="community-header-title">
        <BigLogo />
      </div>
      <div className="community-header-right">
        <h2>
          Ми хочемо, щоб платформа uCs була відображенням найкращої версії
          професійного життя
        </h2>
        <p>
          Це співтовариство, в якому всі ставляться один до одного з повагою і
          допомагають один одному досягти успіху.
        </p>
      </div>
    </div>
  );
}
