export const updateProfileApi = (params) =>
  new Promise((res) => {
    setTimeout(() => {
      res(params);
    }, 500);
  });
