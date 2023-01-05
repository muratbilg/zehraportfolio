import React from "react";
import {
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";

const SocialShare = [
  {
    iconName: <FiInstagram />,
    link: "https://www.instagram.com/pskzehraguler/",
  },
  {
    iconName: <FiLinkedin />,
    link: "https://www.linkedin.com/in/zehraguler/",
  },
];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
