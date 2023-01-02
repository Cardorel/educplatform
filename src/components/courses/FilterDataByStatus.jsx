export const filterDataByStatus = (data, status) =>
  data?.filter((d) => d.status.toLowerCase() === status.toLowerCase());
