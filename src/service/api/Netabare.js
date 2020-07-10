import axios from "axios";

import { forceHttps } from "../../utils/utils";

const fetchNetabareData = async (id) => {
  const EMPTY_OBJECT = { subject: {}, history: [] };
  const response = await axios
    .get(`https://api.netaba.re/archive/${id}`)
    .catch((err) => console.log(err));

  return response.data !== EMPTY_OBJECT ? response.data.subject : null;
};

const reassembleBasicData = (data) => {
  let reassembledData = {};
  reassembledData.name = data ? data.name : null;
  reassembledData.nameCn = data
    ? data["name_cn"] !== ""
      ? data["name_cn"]
      : null
    : null;
  reassembledData.image = data ? (data.images ? forceHttps(data.images.large) : "") : "";
  reassembledData.score = data ? (data.rating ? data.rating.score : 0) : 0;
  return reassembledData;
};

export const getNetabareDataFull = async (id) => {
  return await fetchNetabareData(id);
};

export const getNetabareDataBasic = async (id) => {
  let rawData = null;
  await fetchNetabareData(id).then((data) => (rawData = data));
  const basicData = reassembleBasicData(rawData);
  return basicData;
};
