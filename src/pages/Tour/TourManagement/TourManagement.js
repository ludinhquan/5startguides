import React from "react";
import { Col, Row } from "antd";
import { useSelector } from "react-redux";

import { toursSelector } from "@/store/selectors/tour";

import TourCard from "./TourCard";
import styles from "./TourManagement.module.less";

const TourManagement = (props) => {
  const tours = useSelector(toursSelector);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Quản lí Tour</div>
      <Row gutter={32}>
        {tours.map((tour) => (
          <Col key={tour.id} sm={12} md={12} xxl={8} xs={24}>
            <TourCard {...tour} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

TourManagement.propTypes = {};

export default TourManagement;
