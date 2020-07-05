import axios from "axios";

const fetchBangumiApiData = async (id, size, corsUrl) => {
  const response = await axios
    .get(`${corsUrl}https://api.bgm.tv/subject/${id}?responseGroup=${size}`)
    .catch((err) => console.log(err));
    
  return response.data.code !== "404" ? response.data : null;
};

const reassembleBasicData = (data) => {
  let reassembledData = {};
  reassembledData.name = data ? data.name : null;
  reassembledData.nameCn = data ? (data["name_cn"] !== "" ? data["name_cn"] : null) : null;
  reassembledData.image = data ? (data.images ? data.images.large : "") : "";
  reassembledData.score = data ? (data.rating ? data.rating.score : 0) : 0;
  return reassembledData;
};

export const getBangumiApiDataFull = async (id, corsUrl) => {
  return await fetchBangumiApiData(id, "large", corsUrl);
};

export const getBangumiApiDataBasic = async (id, corsUrl) => {
  let rawData = null;
  await fetchBangumiApiData(id, "small", corsUrl).then((data) => (rawData = data));
  const basicData = reassembleBasicData(rawData);
  return basicData;
};
