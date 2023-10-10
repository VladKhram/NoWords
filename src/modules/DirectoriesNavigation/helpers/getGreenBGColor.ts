export const getGreenBGColor = (deep: number) => {
  switch (deep % 9) {
    case 0:
      return "bg-red-900";
    case 1:
      return "bg-red-800";
    case 2:
      return "bg-red-700";
    case 3:
      return "bg-red-600";
    case 4:
      return "bg-red-500";
    case 5:
      return "bg-red-400";
    case 6:
      return "bg-red-300";
    case 7:
      return "bg-red-200";
    case 8:
      return "bg-red-100";
  }
};
