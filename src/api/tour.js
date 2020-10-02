export const createTourApi = (params) =>
  new Promise((res) => {
    setTimeout(() => {
      res(params);
    }, 500);
  });
