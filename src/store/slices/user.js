import { updateProfileApi } from "@/api/user";
import { createSlice } from "@reduxjs/toolkit";

const initialProfile = {
  userName: "",
  firstName: "Glover",
  lastName: "Maria",
  dateOfBirth: "14/08/2000",
  email: "maria.tourguide@gmail.com",
  phoneNumber: "8491570156",
  yearsOfExperience: "5",
  area: "Sydney",
  tripType: "Trọn gói · Đi về trong ngày",
  tourRegular: "Tham quan ngắm cảnh · Ẩm thực · Mạo hiểm ngoài trời",
  fee: "$30 - 39",
  licence: "",
  Clearance: "",
  validWorkingwithChildren: "",
  validFirstaidCertificate: "",
  selfIntro: "Hello 👋 my name is Maria (24 years old) and am Russian, but ...",
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: initialProfile,
  },
  reducers: {
    updateProfile(state, action) {
      const { fields, values } = action.payload;
      fields.forEach((key) => {
        state.profile[key] = values[key];
      });
    },
  },
});

export const { updateProfile } = userSlice.actions;

export const updateProfileRequest = (params) => async (dispatch) => {
  try {
    const results = await updateProfileApi(params);
    dispatch(userSlice.actions.updateProfile(results));
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
};

export default userSlice.reducer;
