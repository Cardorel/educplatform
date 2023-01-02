export const filterDataByGender = (data, gender, defaultNumber) =>
  data?.filter((d) => d.gender === gender)?.slice(0, defaultNumber);
