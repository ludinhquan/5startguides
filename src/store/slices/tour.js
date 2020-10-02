import { createTourApi } from "@/api/tour";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "tour",
  initialState: {
    tourDetail: {},
    tourList: [],
  },
  reducers: {
    createTour(state, action) {
      const tour = action.payload;
      state.tourList = [...state.tourList, tour];
    },
  },
});

export const { updateProfile } = userSlice.actions;

export const createTourRequest = (params) => async (dispatch) => {
  try {
    const results = await createTourApi(params);
    dispatch(userSlice.actions.createTour(results));
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
};

export default userSlice.reducer;
