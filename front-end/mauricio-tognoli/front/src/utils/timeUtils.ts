import moment from "moment-timezone";

// Formatear la hora local
export const formatLocalTime = (timestamp: number, timezone: number) => {
  return moment
    .unix(timestamp)
    .utcOffset(timezone / 60)
    .format("HH:mm");
};

// Formatear la fecha local
export const formatLocalDate = (timestamp: number, timezone: number) => {
  return moment
    .unix(timestamp)
    .utcOffset(timezone / 60)
    .format("YYYY-MM-DD");
};

// Obtener el nombre del día
export const getDayName = (timestamp: number, timezone: number) => {
  return moment
    .unix(timestamp)
    .utcOffset(timezone / 60)
    .format("dddd");
};
