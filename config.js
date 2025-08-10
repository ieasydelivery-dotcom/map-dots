// CONFIG (ASCII-only to avoid encoding issues)
window.CONFIG = {
  YANDEX_GEOCODER_KEY: '370bb433-318c-491a-8658-dddf6bacdc4a',
  YANDEX_SEARCH_KEY: 'e80fcb56-318a-45a9-9ecc-bdec37af79b7',
  GOOGLE_API_KEY: 'AIzaSyBIc3RLI-tFUV3M0_KSBLh_vxLB6gkRVhk',
  BELARUS_BBOX: '23.178,51.262~32.776,56.172',
  REQUEST_DELAY: 200,
  CACHE_TTL: 30 * 24 * 60 * 60 * 1000
};

// Belarus cities data
window.BELARUS_CITIES = {
  'Minsk': { lat: 53.9, lon: 27.5667, bbox: '27.4~53.82~27.7~53.98' },
  'Gomel': { lat: 52.4345, lon: 30.9754, bbox: '30.85~52.35~31.1~52.52' },
  'Vitebsk': { lat: 55.1904, lon: 30.2049, bbox: '30.1~55.12~30.31~55.26' },
  'Mogilev': { lat: 53.9, lon: 30.3336, bbox: '30.23~53.83~30.44~53.97' },
  'Brest': { lat: 52.0975, lon: 23.6877, bbox: '23.6~52.03~23.78~52.16' },
  'Grodno': { lat: 53.6779, lon: 23.8298, bbox: '23.73~53.61~23.93~53.75' },
  'Bobruisk': { lat: 53.1446, lon: 29.2214, bbox: '29.15~53.08~29.29~53.21' },
  'Baranovichi': { lat: 53.1327, lon: 26.0139, bbox: '25.94~53.07~26.09~53.19' },
  'Borisov': { lat: 54.2279, lon: 28.5097, bbox: '28.43~54.17~28.59~54.28' },
  'Pinsk': { lat: 52.1229, lon: 26.0951, bbox: '26.02~52.06~26.17~52.18' },
  'Orsha': { lat: 54.5081, lon: 30.4172, bbox: '30.34~54.45~30.49~54.57' },
  'Mozyr': { lat: 52.0495, lon: 29.2456, bbox: '29.17~51.99~29.32~52.11' },
  'Soligorsk': { lat: 52.7876, lon: 27.5415, bbox: '27.47~52.73~27.61~52.85' },
  'Lida': { lat: 53.8834, lon: 25.2997, bbox: '25.23~53.82~25.37~53.94' },
  'Logoysk': { lat: 54.2042, lon: 27.8563, bbox: '27.78~54.15~27.93~54.26' },
  'Molodechno': { lat: 54.3087, lon: 26.9158, bbox: '26.84~54.25~26.99~54.37' },
  'Slutsk': { lat: 53.0274, lon: 27.5597, bbox: '27.48~52.97~27.64~53.08' },
  'Dzerzhinsk': { lat: 53.6850, lon: 27.1384, bbox: '27.06~53.63~27.21~53.74' },
  'Zhodino': { lat: 54.0985, lon: 28.3311, bbox: '28.26~54.04~28.4~54.15' },
  'Smolevichi': { lat: 54.0365, lon: 28.0897, bbox: '28.01~53.98~28.17~54.09' },
  'Nesvizh': { lat: 53.2198, lon: 26.6728, bbox: '26.6~53.16~26.75~53.28' }
};