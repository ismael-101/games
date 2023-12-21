// Base URL
const BASE_URL = `https://api.rawg.io/api/games`;
const BASE_KEY = `?key=${process.env.REACT_APP_RAWG_API}`;
//Getting the month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Getting the day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=1`;
const upcoming_games = `&dates=${currentDate},${nextYear}&ordering=-added&page_size=1`;
const new_games = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=1`;

export const popularGamesURL = () => `${BASE_URL}${BASE_KEY}${popular_games}`;
export const upcomingGamesURL = () => `${BASE_URL}${BASE_KEY}${upcoming_games}`;
export const newGamesURL = () => `${BASE_URL}${BASE_KEY}${new_games}`;
//Game details
export const gameDetailsURL = (game_id) => `${BASE_URL}/${game_id}${BASE_KEY}`;
export const gameScreenshotURL = (game_id) =>
  `${BASE_URL}/${game_id}/screenshots${BASE_KEY}`;

//searched game
export const searchGameURL = (game_name) =>
  `${BASE_URL}${BASE_KEY}&search=${game_name}&page_size=3`;
