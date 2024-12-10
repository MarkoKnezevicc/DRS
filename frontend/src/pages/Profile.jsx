import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  return (
    <div>
      <div>Email: {user.data.email}</div>
      <div>First name: {user.data.firstName}</div>
      <div>Last name: {user.data.lastName}</div>
      <div>Address: {user.data.address}</div>
      <div>City: {user.data.city}</div>
      <div>Country: {user.data.country}</div>
      <div>Phone: {user.data.phone}</div>
      <br></br>
      <Link to="/profile/edit">
        <button type="button" className="subBtn">
          Edit
        </button>
      </Link>
    </div>
  );
};

export default Profile;
