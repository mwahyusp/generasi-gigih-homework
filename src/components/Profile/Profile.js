import React from "react";
import { useSelector } from "react-redux";
import Style from "./style.module.css";

function Profile() {
  const User = useSelector(state => state.user.user);

  return (
    <div className={Style.profile}>
      {/* <div className={Style.image}>
        <img
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
          alt=""
        />
      </div> */}
      <p>{User.display_name}</p>
    </div>
  );
}

export default Profile;
