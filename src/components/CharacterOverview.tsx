import { useCharacterStore } from "../state";

export const CharacterOverview = () => {
  const { characterClasses } = useCharacterStore();
  const characterString = characterClasses.length
    ? characterClasses.reduce((acc, c) => `${acc}${c}, `, "").slice(0, -2)
    : "Does not meet any minimum class requirements";
  return <h2>Character Type: {characterString}</h2>;
};
