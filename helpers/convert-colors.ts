export const convertColors = (color: string) => {
  switch (color) {
    case "orange":
      return "bg-[#FF5E00] hover:bg-orange-600 text-white";
    case "blue":
      return "bg-[#006AFF] hover:bg-blue-600 text-white";
    case "green":
      return "bg-[#0DF242] hover:bg-green-600 text-white";
    default:
      return "bg-primary hover:bg-primary-dark text-white";
  }
};
