import React from "react";
import { Col, Row } from "antd";
import { useSelector } from "react-redux";

import { toursSelector } from "@/store/selectors/tour";

import TourCard from "./TourCard";
import styles from "./TourManagement.module.less";

const TourManagement = (props) => {
  const tours = useSelector(toursSelector);

  return (
    <div>
      <div className={styles.title}>Quản lí Tour</div>
      <Row gutter={32}>
        {tours.map((tour) => (
          <Col key={tour.id} md={12}>
            <TourCard {...tour} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

TourManagement.propTypes = {};

export default TourManagement;
