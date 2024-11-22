import axios from "axios";

//Anasayfnin model katmani
export default class MainPageModel {
  static async getCoins(page) {
    const options = {
      params: {
        limit: "15",
        offset: (page-1)*15,  //!burasi cok onemli kac tane veri alinacak
      },
    };

    try {
      const res = await axios.get("https://api.coincap.io/v2/assets", options);

      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  }
}
