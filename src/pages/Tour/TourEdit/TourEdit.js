import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { tourDetailSelector } from "@/store/selectors/tour";
import { updateTourRequest, getTourDetailRequest } from "@/store/slices/tour";

import FormLayout from "../FormLayout";
import styles from "./TourEdit.module.less";

const TourEdit = () => {
  const params = useParams();
  const history = useHistory();
  const formRef = useRef();
  const dispatch = useDispatch();

  const tourId = params.id;
  const [isLoading, setIsLoading] = useState(false);
  const tourDetail = useSelector(tourDetailSelector);

  useEffect(() => {
    dispatch(getTourDetailRequest(tourId));
  }, [dispatch, tourId]);

  useEffect(() => {
    formRef.current.setFieldsValue({
      name: tourDetail.name,
      tourType: tourDetail.tourType,
      activities: tourDetail.activities,
      rangeFee: tourDetail.rangeFee,
      images: tourDetail.images,
      description: tourDetail.description,
    });
  }, [tourDetail, formRef]);

  const onSubmit = (values) => {
    setIsLoading((pre) => !pre);
    dispatch(updateTourRequest(tourId, values))
      .then(() => {
        history.push("/tours");
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <div className={styles.title}>Sửa Tour</div>
      <FormLayout ref={formRef} onSubmit={onSubmit} isLoading={isLoading} />
    </div>
  );
};

TourEdit.propTypes = {};

export default TourEdit;
