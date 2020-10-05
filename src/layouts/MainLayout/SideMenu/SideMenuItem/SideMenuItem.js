import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

import styles from "./SideMenuItem.module.less";

const customStyles = {
  badgeStyle: {
    default: { backgroundColor: "#FF79A9", color: "#ffffff" },
    secondary: { backgroundColor: "#eeeeee", color: "#9B9B9B" },
  },
  borderStyles: { borderBottom: "1px solid #eeeeee" },
  active: { background: "#f5f5f5" },
};

const SideMenuItem = ({ to, icon, text, badge, border, onClick }) => {
  const location = useLocation();
  const { pathname } = location;
  const isActive = pathname === to;
  return (
    <Link
      to={to}
      onClick={onClick}
      className={styles.sideItem}
      style={isActive ? customStyles.active : null}
    >
      {icon}
      <div
        className={cx(styles.text, isActive ? styles.active : null)}
        style={border ? customStyles.borderStyles : null}
      >
        <span>{text}</span>
        {badge && (
          <span
            className={styles.badge}
            style={customStyles.badgeStyle[badge.type || "default"]}
          >
            {badge.count}
          </span>
        )}
      </div>
    </Link>
  );
};

export default SideMenuItem;
SideMenuItem.propTypes = {
  border: PropTypes.bool,
  to: PropTypes.string,
  icon: PropTypes.element,
  text: PropTypes.string,
  badge: PropTypes.object,
};

SideMenuItem.defaultProps = {
  to: "",
  border: true,
};
