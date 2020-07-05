import axios from "axios";

import { swapCoverPictureSize } from "../../utils/utils";

const fetchBangumiSubjectData = async (id) => {
  const response = await axios
    .get(`https://cdn.jsdelivr.net/gh/czy0729/Bangumi-Subject@master/data/${parseInt(id / 100)}/${id}.json`)
    .catch((err) => console.log(`FAILED TO FETCH ID ${id} `));
  
  return response ? response.data : null;
};

const reassembleBasicData = (data) => {
  let reassembledData = {};
  reassembledData.name = data ? data.name : null;
  reassembledData.nameCn = null;
  reassembledData.image = data ? swapCoverPictureSize(data.image, "l") : "";
  reassembledData.score = data ? (data.rating ? data.rating.score : 0) : 0;
  return reassembledData;
};

export const getBangumiSubjectDataFull = async (id) => {
  return await fetchBangumiSubjectData(id);
};

export const getBangumiSubjectDataBasic = async (id) => {
  let rawData = null;
  await fetchBangumiSubjectData(id).then((data) => (rawData = data));
  const basicData = reassembleBasicData(rawData);
  return basicData;
};
