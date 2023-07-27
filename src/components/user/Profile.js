import React, { useEffect } from "react";
import "./Profile.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useSelector((state) => state.authState);
  return (
    <div className="row justify-content-around mt-5 user-info">
      <div className="col-12 col-md-3 text-center">
        <figure className="avatar-profile">
          <img
            className="rounded-circle img-fluid"
            src={user.avatar ?? "/images/default_avatar.png"}
            alt=""
          />
        </figure>
        <Link
          to={"/myProfile/update"}
          id="edit_profile"
          className="btn btn-primary btn-block my-5"
        >
          Edit Profile
        </Link>
      </div>

      <div className="col-12 col-md-5">
        <h4>Full Name</h4>
        <p>{user.name}</p>

        <h4>Email Address</h4>
        <p>{user.email}</p>

        <h4>Joined</h4>
        <p>{String(user.createdAt).substring(0, 10)}</p>

        <div className="text-center">
          <Link
            to="/myProfile/update/password"
            className="btn btn-primary btn-block mt-3"
          >
            Change Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
