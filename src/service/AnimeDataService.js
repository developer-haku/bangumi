import * as API from "./api";

export default class AnimeDataService {
  constructor() {
    this.cardApi = JSON.parse(localStorage.getItem("setting")).cardApi;
    this.pageApi = JSON.parse(localStorage.getItem("setting")).pageApi;
    this.corsUrl = JSON.parse(localStorage.getItem("setting")).cors.url;
  }

  getBangumiDataBasic = (id) => {
    switch (this.cardApi) {
      case "default":
        return API.getBangumiGaDataBasic(id);
      case "bangumiSubject":
        return API.getBangumiSubjectDataBasic(id);
      case "bangumiCORS":
        return API.getBangumiApiDataBasic(id, this.corsUrl);
      case "netabare":
        return API.getNetabareDataBasic(id);
      default:
        return null;
    }
  };

  getBangumiDataFull = (id) => {
    switch (this.pageApi) {
      case "default":
        return API.subjectGaMix(id);
      case "bangumiApi":
        return API.subjectApiMix(id, this.corsUrl);
      case "netabare":
        return API.subjectNetabareMix(id);
      default:
        return null;
    }
  };
}
