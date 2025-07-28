import React from "react";
import "./Profile.css";

const Profile = () => {
  const user = {
    name: "Jane Doe",
    title: "Frontend Developer",
    bio: "Passionate about building user-friendly web applications using modern technologies.",
    avatar:
      "https://c.pxhere.com/photos/93/c7/businessman_man_portrait_male_costume_business_office_office_style-815849.jpg!d",
    location: "San Francisco, CA",
    email: "jane.doe@example.com",
    social: {
      github: "https://github.com/janedoe",
      linkedin: "https://linkedin.com/in/janedoe",
    },
  };

  return (
    <div className="profile">
      <div className="profile-card">
        <img className="avatar" src={user.avatar} alt={`${user.name} avatar`} />
        <h2>{user.name}</h2>
        <p className="title">{user.title}</p>
        <p className="location">{user.location}</p>
        <p className="bio">{user.bio}</p>
        <p className="email">
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </p>
        <div className="social-links">
          <a
            href={user.social.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={user.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
