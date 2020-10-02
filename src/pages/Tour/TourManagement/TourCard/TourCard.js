import React, { useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, Avatar, Space, Col, Row, Divider } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  HeartOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

import imageDefault from "@/assets/images/default_image.webp";
import { deleteTourRequest } from "@/store/slices/tour";
import { profileSelector } from "@/store/selectors/user";

import styles from "./TourCard.module.less";

const { Meta } = Card;

const TourCard = (props) => {
  const dispatch = useDispatch();
  const [isloading, setIsLoading] = useState(false);

  const profile = useSelector(profileSelector);

  const { id, name, images, rangeFee, createdAt } = props;

  const onDeleteTour = () => {
    setIsLoading(true);
    dispatch(deleteTourRequest(id)).finally(() => setIsLoading(true));
  };

  return (
    <Card
      className={styles.card}
      cover={<img src={images?.[0] || imageDefault} alt="" />}
      actions={[
        <Link to={`/edit-tour/${id}`} className={styles.edit}>
          <Space>
            <EditOutlined key="edit" />
            Chỉnh sửa
          </Space>
        </Link>,
        <Space className={styles.delete} onClick={onDeleteTour}>
          {isloading ? (
            <LoadingOutlined key="delete" />
          ) : (
            <DeleteOutlined key="delete" />
          )}
          Xóa Tour
        </Space>,
      ]}
    >
      <div className={styles.title}>{name}</div>
      <Meta
        className={styles.meta}
        avatar={<Avatar size="large" src={profile?.avatar} />}
        title={
          <Row justify="space-between">
            <Col className={styles.name}>Maria</Col>
            <Col className={styles.time}>{moment(new Date(createdAt)).fromNow()}</Col>
          </Row>
        }
      />
      <Divider />
      <Row className={styles.price} justify="space-between" align="middle">
        <Col>
          <span className={styles.priceText}>${rangeFee?.[1] || 0}</span>
          <span className={styles.unit}> / người</span>
        </Col>
        <Col>
          <HeartOutlined className={styles.heartIcon} />
        </Col>
      </Row>
    </Card>
  );
};

TourCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  images: PropTypes.array,
  rangeFee: PropTypes.array,
  createdAt: PropTypes.string,
};

export default TourCard;
