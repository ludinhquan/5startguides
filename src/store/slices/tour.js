import { createSlice } from "@reduxjs/toolkit";
import {
  createTourApi,
  deleteTourApi,
  getTourDetailApi,
  updateTourApi,
} from "@/api/tour";

const fakeDataList = [
  {
    id: 1,
    name: "Chocol’ART tại Úc – tạo ra tác phẩm nghệ thuật ngọt ngào",
    images: [
      {
        uid: 1,
        url:
          "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      },
    ],
    rangeFee: [20, 30],
    createdAt: "2020/09/29",
  },
  {
    id: 2,
    name: "Tập Muay Thái cùng Trí trên sân thượng tươi mát đầy cây xanh",
    images: [
      {
        uid: 1,
        url:
          "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      },
    ],
    rangeFee: [25, 35],
    createdAt: "2020/10/2 13:00:00",
  },
  {
    id: 3,
    name: "Thưởng thức xì gà, hút xì gà đúng điệu, lắng đọng và trò chuyện",
    images: [
      {
        uid: 1,
        url:
          "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      },
    ],
    rangeFee: [3, 10],
    createdAt: "2020/10/2 13:00:00",
  },
  {
    id: 4,
    name: "Tìm hiểu về nghệ thuật Vẽ",
    images: [
      {
        uid: 1,
        url:
          "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      },
    ],
    rangeFee: [25, 35],
    createdAt: "2020/10/2 13:00:00",
  },
];

const userSlice = createSlice({
  name: "tour",
  initialState: {
    tourDetail: {},
    tourList: fakeDataList,
  },
  reducers: {
    saveTourDetail(state, action) {
      const tourId = action.payload;
      state.tourDetail = state.tourList.find(
        (tour) => tour.id === Number(tourId)
      );
    },
    createTour(state, action) {
      const tour = action.payload;
      state.tourList = [tour, ...state.tourList];
    },
    updateTour(state, action) {
      const { tourId, values } = action.payload;
      const newTour = { ...state.tourDetail, ...values };
      state.tourDetail = newTour;
      state.tourList = [...state.tourList].map((tour) =>
        tour.id === Number(tourId) ? newTour : tour
      );
    },
    deleteTour(state, action) {
      const tourId = action.payload;
      state.tourList = [...state.tourList].filter(
        (tour) => tour.id !== Number(tourId)
      );
    },
  },
});

export const { updateProfile } = userSlice.actions;

export const getTourDetailRequest = (tourId) => async (dispatch) => {
  try {
    await getTourDetailApi(tourId);
    dispatch(userSlice.actions.saveTourDetail(tourId));
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
};

export const createTourRequest = (params) => async (dispatch) => {
  try {
    const results = await createTourApi(params);
    dispatch(userSlice.actions.createTour(results));
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateTourRequest = (tourId, values) => async (dispatch) => {
  try {
    const results = await updateTourApi(tourId, values);
    dispatch(userSlice.actions.updateTour({ tourId, values: results }));
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteTourRequest = (tourId) => async (dispatch) => {
  try {
    await deleteTourApi(tourId);
    dispatch(userSlice.actions.deleteTour(tourId));
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
};

export default userSlice.reducer;
