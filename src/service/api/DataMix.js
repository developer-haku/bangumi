import {
  getBangumiApiDataFull,
  getBangumiGaDataFull,
  getBangumiSubjectDataFull,
  getNetabareDataFull,
} from "./index";
import { forceHttps } from "../../utils/utils";

export const subjectApiMix = async (id, corsUrl) => {
  let data = await getBangumiApiDataFull(id, corsUrl);
  const bgmSbjData = await getBangumiSubjectDataFull(id);
  data.production = bgmSbjData ? bgmSbjData.info : "";
  data.tags = bgmSbjData ? bgmSbjData.tags : [];
  data.cover = data.images ? forceHttps(data.images.large) : "";
  return data;
};

export const subjectNetabareMix = async (id) => {
  let data = await getNetabareDataFull(id);
  const bgmSbjData = await getBangumiSubjectDataFull(id);
  data.production = bgmSbjData ? bgmSbjData.info : "";
  data.tags = bgmSbjData ? bgmSbjData.tags : [];
  data.cover = data.images ? forceHttps(data.images.large) : "";
  return data;
};

export const subjectGaMix = async (id) => {
  let data = await getBangumiGaDataFull(id);
  const bgmSbjData = await getBangumiSubjectDataFull(id);
  data.production = bgmSbjData ? bgmSbjData.info : "";
  data.tags = bgmSbjData ? bgmSbjData.tags : [];
  data.cover = data.images ? forceHttps(data.images.large) : "";
  return data;
};