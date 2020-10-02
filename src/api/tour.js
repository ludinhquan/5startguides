export const createTourApi = (params) =>
  new Promise((res) => {
    setTimeout(() => {
      res({ ...params, id: Math.random() });
    }, 500);
  });

export const updateTourApi = (tourId, values) =>
  new Promise((res) => {
    setTimeout(() => {
      res(values);
    }, 500);
  });

export const deleteTourApi = (id) =>
  new Promise((res) => {
    setTimeout(() => {
      res(id);
    }, 500);
  });

export const getTourDetailApi = (id) =>
  new Promise((res) => {
    setTimeout(() => {
      res(id);
    }, 500);
  });
