import { natiyjaValuesSuccess } from "../Reducer/ValueList2";
import { dataFetching } from "../Service";

export const calculateTypes = async (
  jadvalQiymatlari2,
  setNatiyjaValues,
  dispatch,
  factors
) => {
  const newArray = jadvalQiymatlari2.map(
    (row) => row.map((num, index) => num / factors[index]) // newArrayga bolinmalarni kiritish
  );
  setNatiyjaValues(newArray);
  dispatch(natiyjaValuesSuccess(newArray));
  // Tipning solishtirib turini sozlar bilan hisoblash
};

export const calculatevaluesResult = async (
  jadvalQiymatlari2,
  factors,
  setNatiyjaValues,
  dispatch
) => {
  const newArray = jadvalQiymatlari2.map(
    (row) => row.map((num, index) => num / factors[index]) // newArrayga bolinmalarni kiritish
  );
  await dataFetching(
    "valuesNatiyjaList2",
    "updateData",
    { id: 0, data: newArray },
    0
  );
  setNatiyjaValues(newArray);
  dispatch(natiyjaValuesSuccess(newArray));
};
