import axios from "axios";

import { forceHttps } from "../../utils/utils";

const fetchBangumiGaData = async (id) => {
  const response = await axios
    .get(
      `https://cdn.jsdelivr.net/gh/developer-haku/bangumi-ga@latest/data/${
        parseInt(id / 100)
      }/${id}.json`
    )
    .catch((err) => console.log(`FAILED TO FETCH ID ${id} `));

  return response ? response.data : null;
};

const reassembleBasicData = (data) => {
    let reassembledData = {};
    reassembledData.name = data ? data.name : null;
    reassembledData.nameCn = data ? (data["name_cn"] !== "" ? data["name_cn"] : null) : null;
    reassembledData.image = data ? (data.images ? forceHttps(data.images.large) : "") : "";
    reassembledData.score = data ? (data.rating ? data.rating.score : 0) : 0;
    return reassembledData;
  };
  
  export const getBangumiGaDataFull = async (id) => {
    return await fetchBangumiGaData(id);
  };
  
  export const getBangumiGaDataBasic = async (id) => {
    let rawData = null;
    await fetchBangumiGaData(id).then((data) => (rawData = data));
    const basicData = reassembleBasicData(rawData);
    return basicData;
  };
  