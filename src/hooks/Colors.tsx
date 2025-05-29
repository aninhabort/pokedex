const colorByType = {
  grass: "var(--lime-400)",
  poison: "var(--purple-400)",
  bug: "var(--lime-600)",
  fire: "var(--orange-500)",
  flying: "linear-gradient(to bottom, var(--blue-300), var(--gray-400))",
  water: "var(--blue-500)",
  normal: "var(--gray-400)",
};

export const typesColors = (name: string) => {
  if (name.includes("flying")) {
    return {
      backgroundImage:
        "linear-gradient(to bottom, var(--blue-300), var(--gray-400))",
    };
  }
  return {
    backgroundColor:
      colorByType[name as keyof typeof colorByType] || "var(--gray-300)",
  };
};