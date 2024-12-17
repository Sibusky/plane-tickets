export const getStopsText = (stops: number) => {
  if (stops === 0) return "БЕЗ ПЕРЕСАДОК";
  if (stops === 1) return "1 ПЕРЕСАДКА";
  return `${stops} ПЕРЕСАДКИ`;
};
