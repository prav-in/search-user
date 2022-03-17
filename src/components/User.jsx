import React from "react";
import "./User.css";

const User = ({ userData: u }) => {
  let { street, city, state, country, postcode } = u.location;

  return (
    <div class="user">
      <img class="user__image" src={u.picture.medium} alt="user" />
      <div class="user__details">
        <h1 class="user__details__name">
          {u.name.title}. {u.name.first} {u.name.last} | {u.dob.age}
        </h1>
        <span class="user__details__mail">{u.email}</span>
        <p>
          {street.number} {street.name}, {city}, {state}, {country}, {postcode}
        </p>
      </div>
      <span class="user__nat">{u.nat}</span>
    </div>
  );
};

export default User;
