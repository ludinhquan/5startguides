import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./SideMenuItem.module.less";

const badgeStyle = {
  default: { backgroundColor: "#FF79A9", color: "#ffffff" },
  secondary: { backgroundColor: "#eeeeee", color: "#9B9B9B" },
};
const borderStyles = { borderBottom: "1px solid #eeeeee" };

const SideMenuItem = ({ to, icon, text, badge, border }) => {
  return (
    <Link className={styles.sideItem} to={to}>
      {icon}
      <div className={styles.text} style={border ? borderStyles : null}>
        <span>{text}</span>
        {badge && (
          <span
            className={styles.badge}
            style={badgeStyle[badge?.type || "default"]}
          >
            {badge?.count}
          </span>
        )}
      </div>
    </Link>
  );
};

export default SideMenuItem;
SideMenuItem.propTypes = {
  border: PropTypes.bool,
};

SideMenuItem.defaultProps = {
  border: true,
};
