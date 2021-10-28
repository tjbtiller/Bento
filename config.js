// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Tyler',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: 'd3e9bac8a284156f2e1b744d54480d05',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'F', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '37.775',
  defaultLongitude: '-122.419',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.protonmail.com/',
    },
    {
      id: '3',
      name: 'Todo List',
      icon: 'trello',
      link: 'https://tradingview.com/',
    },
    {
      id: '4',
      name: 'CtyptoWatch',
      icon: 'calendar',
      link: 'https://cryptowat.ch/home',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'bookmark',
      link: 'https://app.alpaca.markets',
    },
    {
      id: '6',
      name: 'YouTube',
      icon: 'youtube',
      link: 'https://youtube.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'music',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Daily Discovery',
        link: 'https://listen.tidal.com/mix/01630bb79cd2bb157a86f54645e50e',
      },
      {
        name: 'New Arrivals',
        link: 'https://listen.tidal.com/mix/013e97c36e25a9617c92ab681dd95b',
      },
      {
        name: 'Most Listened',
        link: 'https://listen.tidal.com/mix/010775ef9dda9bbb314c6a1497be8c',
      },
      {
        name: 'Mix 1',
        link: 'https://listen.tidal.com/mix/002ede5aa155c5a73a955608a1782f',
      },
    ],
    secondList: [
      {
        name: 'OpenWRT',
        link: 'http://192.168.1.1/cgi-bin/luci/',
      },
      {
        name: 'OpenSea',
        link: 'opensea.io/',
      },
      {
        name: 'CryptoPanic',
        link: 'https://cryptopanic.com/news?filter=important',
      },
      {
        name: 'CoinMarketCal',
        link: 'https://coinmarketcal.com/en/',
      },
    ],
  },
};
