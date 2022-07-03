import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
  {
    name: "Facebook",
    icon: iconStyle(FaFacebook),
  },
  {
    name: "Instagram",
    icon: iconStyle(FaInstagram),
  },
  {
    name: "Twitter",
    icon: iconStyle(FaTwitter),
  },
];

export const footerData = [
  {
    title: "Company",
    links: [
      "About Us",
      "Blog",
      "Careers",
      "Terms and Conditions",
      "Privacy Policy",
      "FAQs",
    ],
  },
  {
    title: "Products",
    links: [
      "Savings",
      "Investment",
      "Group Savings",
      "Stash",
      "Learn more",
      "---",
    ],
  },
];
