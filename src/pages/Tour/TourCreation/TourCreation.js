import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { createTourRequest } from "@/store/slices/tour";

import FormLayout from "../FormLayout";
import styles from "./TourCreation.module.less";

const TourCreation = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (values) => {
    setIsLoading(true);
    dispatch(createTourRequest(values))
      .then(() => {
        history.push("/tours");
      })
      .catch(() => {
        setIsLoading(false);
      });
  };
  return (
    <div>
      <div className={styles.title}>Thêm Tour</div>
      <FormLayout onSubmit={onSubmit} isLoading={isLoading} />
    </div>
  );
};

TourCreation.propTypes = {};

export default TourCreation;
