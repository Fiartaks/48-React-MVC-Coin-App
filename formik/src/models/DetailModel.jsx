import axios from 'axios';
import { SiCoinmarketcap } from 'react-icons/si';
import { MdEventAvailable, MdPriceChange } from 'react-icons/md';
import { FaPercent } from 'react-icons/fa';
import { RiStockFill } from 'react-icons/ri';

export default class DetailModel {
  constructor(coin) {
    this.coin = coin;
    //  console.log(coin)

    //Ekrana basicak kutularin verilerin hazirlama

    this.infoFields = [
      {
        icon: <SiCoinmarketcap />,
        label: "Market Hacmi",
        value: coin?.detail.marketCapUsd,
      },
      {
        icon: <MdEventAvailable />,
        label: "Tedarik",
        value: coin?.detail.maxSupply,
      },
      {
        icon: <MdPriceChange />,
        label: "Fiyat",
        value: coin?.detail.priceUsd,
      },
      {
        icon: <FaPercent />,
        label: "24s Değişim (%)",
        value: coin?.detail.changePercent24Hr,
      },
      {
        icon: <RiStockFill />,
        label: "24 Hacim",
        value: coin?.detail.volumeUsd24Hr,
      },
    ];

    //fiyat gecmisini grafik kutuphaneinin istedigi formata cevircez
    this.chartData={
      labels: coin?.history.map((i)=>new Date(i.date).toLocaleDateString()) ,
    datasets: [
      {
        id: 1,
        label: 'Fiyat',
        data: coin?.history.map((i)=>i.priceUsd),
      },
      
    ],
  }
  }

  // api den hem detya hem fiyat gecmisni

  //detay vverileri
  static async getCoin(id) {
    const detailRes = await axios.get(`https://api.coincap.io/v2/assets/${id}`);

    //Fiyat gecmisi
    const historyRes = await axios.get(
      `https://api.coincap.io/v2/assets/${id}/history?interval=d1`
    );

    //verileri fonksiyonun cagrildigi yere dondur

    return {
      detail: detailRes.data.data,
      history: historyRes.data.data,
    };
  }
}
