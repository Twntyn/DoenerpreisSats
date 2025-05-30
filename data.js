
const donerData = [
  { jahr: 2010, sats: 2500000000 },
  { jahr: 2011, sats: 50000000 },
  { jahr: 2012, sats: 27000000 },
  { jahr: 2013, sats: 1866667 },
  { jahr: 2014, sats: 750000 },
  { jahr: 2015, sats: 1280000 },
  { jahr: 2016, sats: 700000 },
  { jahr: 2017, sats: 380000 },
  { jahr: 2018, sats: 63333 },
  { jahr: 2019, sats: 60000 },
  { jahr: 2020, sats: 50000 },
  { jahr: 2021, sats: 16667 },
  { jahr: 2022, sats: 27500 },
  { jahr: 2023, sats: 24000 },
  { jahr: 2024, sats: 16250 }
];

window.donerReady = (async () => {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur');
    const data = await response.json();
    const btcEur = data.bitcoin.eur;

    const donerEur = 7.0;
    const sats = Math.round((donerEur / btcEur) * 100000000);

    donerData.push({ jahr: 2025, sats: sats });
  } catch (error) {
    console.error("Fehler beim Abrufen des Bitcoin-Preises:", error);
  }
})();
