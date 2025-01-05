import { create } from "zustand";
import {
  AttributePoints,
  AttributeString,
  SkillString,
  Class,
  CharacterData,
} from "./types";
import {
  ATTRIBUTE_LIST,
  MAX_ATTRIBUTE_TOTAL,
  MIN_SKILL_POINTS,
  SKILLS,
  CLASS_LIST,
} from "./consts";

const getCharacterClasses = (attributePoints: AttributePoints): Class[] => {
  const characterClasses = [];
  if (
    Object.entries(CLASS_LIST["Barbarian"]).every(
      ([key, val]) => attributePoints[key] >= val
    )
  ) {
    characterClasses.push("Barbarian");
  }
  if (
    Object.entries(CLASS_LIST["Bard"]).every(
      ([key, val]) => attributePoints[key] >= val
    )
  ) {
    characterClasses.push("Bard");
  }
  if (
    Object.entries(CLASS_LIST["Wizard"]).every(
      ([key, val]) => attributePoints[key] >= val
    )
  ) {
    characterClasses.push("Wizard");
  }

  return characterClasses;
};

type CharacterStore = {
  characterClasses: Class[];
  totalAttributePoints: number;
  attributePoints: AttributePoints;
  incrementAttributePoints: (attribute: AttributeString, n: number) => void;
  availableSkillPoints: number;
  totalSkillPoints: number;
  skillPoints: Record<SkillString, number>;
  incrementSkillPoints: (skill: string, n: number) => void;
  setCharacterData: (characterData: CharacterData) => void;
};

export const useCharacterStore = create<CharacterStore>((set) => ({
  characterClasses: [],
  totalAttributePoints: 0,
  attributePoints: ATTRIBUTE_LIST.reduce(
    (acc, attribute) => ({ ...acc, [attribute]: 0 }),
    {} as AttributePoints
  ),
  incrementAttributePoints: (attribute, n) =>
    set((state) => {
      console.log(
        "jmw incrementAttributePoints",
        state.totalAttributePoints + n
      );
      if (
        state.totalAttributePoints + n > MAX_ATTRIBUTE_TOTAL ||
        state.totalAttributePoints + n < 0
      ) {
        return state;
      }

      const availableSkillPoints =
        attribute === "Intelligence"
          ? state.availableSkillPoints + 4 * n
          : state.availableSkillPoints;

      const attributePoints = {
        ...state.attributePoints,
        [attribute]: state.attributePoints[attribute] + n,
      };

      return {
        ...state,
        totalAttributePoints: state.totalAttributePoints + n,
        characterClasses: getCharacterClasses(attributePoints),
        availableSkillPoints,
        attributePoints,
      };
    }),
  availableSkillPoints: MIN_SKILL_POINTS,
  totalSkillPoints: 0,
  skillPoints: SKILLS.reduce(
    (acc, skill) => ({ ...acc, [skill]: 0 }),
    {} as Record<SkillString, number>
  ),
  incrementSkillPoints: (skill, n) =>
    set((state) => {
      if (
        /* We can get into states by decrementing intelligence where
         totalSkillPoints > availableSkillPoints, don't want to deadlock user
         so will allow it and indicate with color and warnings.  So allow that
         state to be set if we are incrementing downwards moving towards fixing the issue */
        (n > 0 && state.totalSkillPoints + n > state.availableSkillPoints) ||
        state.totalSkillPoints + n < 0
      ) {
        return state;
      }
      console.log("jmw state.totalSkillPoints + n", state.totalSkillPoints + n);
      return {
        ...state,
        totalSkillPoints: state.totalSkillPoints + n,
        skillPoints: {
          ...state.skillPoints,
          [skill]: state.skillPoints[skill] + n,
        },
      };
    }),
  setCharacterData: (characterData) =>
    set((state) => {
      let totalAttributePoints = 0;
      const attributePoints = ATTRIBUTE_LIST.reduce(
        (acc, attribute) => ({ ...acc, [attribute]: 0 }),
        {} as AttributePoints
      );

      Object.entries(characterData.attributes).forEach(([key, val]) => {
        attributePoints[key as AttributeString] = val;
        totalAttributePoints += val;
      });
      // If somehow the loaded vals are invalid, we will return existing state
      if (totalAttributePoints > MAX_ATTRIBUTE_TOTAL) {
        console.error(
          "invalid loaded vals: totalAttributePoints > MAX_ATTRIBUTE_TOTAL",
          totalAttributePoints
        );
        return state;
      }

      const availableSkillPoints =
        MIN_SKILL_POINTS + attributePoints["Intelligence"] * 4;
      let totalSkillPoints = 0;
      const skillPoints = SKILLS.reduce(
        (acc, skill) => ({ ...acc, [skill]: 0 }),
        {} as Record<SkillString, number>
      );
      Object.entries(characterData.skills || {}).forEach(([key, val]) => {
        skillPoints[key as SkillString] = val;
        totalSkillPoints += val;
      });
      // If somehow the loaded vals are invalid, we will return existing state
      if (totalSkillPoints > availableSkillPoints) {
        console.error(
          "invalid loaded vals: totalSkillPoints > availableSkillPoints",
          totalSkillPoints,
          availableSkillPoints
        );
        return state;
      }

      return {
        ...state,
        characterClasses: getCharacterClasses(attributePoints),
        totalAttributePoints,
        attributePoints,
        availableSkillPoints,
        totalSkillPoints,
        skillPoints,
      };
    }),
}));
