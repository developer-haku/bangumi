import { getBangumiApiDataFull } from "./BangumiApi";
import { getBangumiSubjectDataFull } from "./BangumiSubject";
import { getNetabareDataFull } from "./Netabare";

export const subjectApiMix = async (id, corsUrl) => {
  let data = await getBangumiApiDataFull(id, corsUrl);
  const bgmSbjData = await getBangumiSubjectDataFull(id);
  data.production = bgmSbjData ? bgmSbjData.info : "";
  data.tags = bgmSbjData ? bgmSbjData.tags : [];
  data.cover = data.images ? data.images.large : "";
  return data;
};

export const subjectNetabareMix = async (id) => {
  let data = await getNetabareDataFull(id);
  const bgmSbjData = await getBangumiSubjectDataFull(id);
  data.production = bgmSbjData ? bgmSbjData.info : "";
  data.tags = bgmSbjData ? bgmSbjData.tags : [];
  data.cover = data.images ? data.images.large : "";
  return data;
};
