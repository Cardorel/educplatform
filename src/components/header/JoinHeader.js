import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function JoinHeader({ user, JoinIcon, logIcon, handleLogOut }) {
  return user ? (
    <button className="authBtn logOutBtn" onClick={handleLogOut}>
      <span className="join-text">Sign out</span>
      <Image src={logIcon} alt="logIcon" />
    </button>
  ) : (
    <Link to="/join-us" className="authBtn">
      <span className="join-text">Join us</span>
      <Image src={JoinIcon} alt="JoinIcon" />
    </Link>
  );
}
