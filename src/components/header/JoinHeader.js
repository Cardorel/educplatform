import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function JoinHeader({ user, JoinIcon, logIcon, handleLogOut }) {
  return user ? (
    <button to="/signin" className="authBtn logOutBtn">
      <span className="join-text">Sign out</span>
      <Image src={logIcon} alt="logIcon" />
    </button>
  ) : (
    <Link to="/signin" className="authBtn">
      <span className="join-text">Join us</span>
      <Image src={JoinIcon} alt="JoinIcon" />
    </Link>
  );
}
