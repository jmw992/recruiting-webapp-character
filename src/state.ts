import { create } from "zustand";
import { AttributeString, Class } from "./types";
import {
  ATTRIBUTE_LIST,
  MAX_ATTRIBUTE_TOTAL,
  MIN_SKILL_POINTS,
} from "./consts";

type CharacterStore = {
  characterClass: Class | "";
  totalSpentAttributePoints: number;
  spentAttrPoints: Record<AttributeString, number>;
  incrementAttributePoints: (attribute: AttributeString, n: number) => void;
  availableSkillPoints: number;
  spentSkillPoints: number;
  incrementSkillPoints: (skill: string, n: number) => void;

  // bears: number;
  // increasePopulation: () => void;
  // removeAllBears: () => void;
};

export const useCharacterStore = create<CharacterStore>((set) => ({
  characterClass: "",
  totalSpentAttributePoints: 0,
  spentAttrPoints: ATTRIBUTE_LIST.reduce(
    (acc, attribute) => ({ ...acc, [attribute]: 0 }),
    {} as Record<AttributeString, number>
  ),
  incrementAttributePoints: (attribute, n) =>
    set((state) => {
      if (state.totalSpentAttributePoints + n > MAX_ATTRIBUTE_TOTAL || state.totalSpentAttributePoints + n < 0) {
        return;
      }
      const availableSkillPoints =
        attribute === "Intelligence"
          ? state.availableSkillPoints + 4 * n
          : state.availableSkillPoints;

      return {
        // ...state,
        availableSkillPoints,
        spentAttrPoints: {
          ...state.spentAttrPoints,
          [attribute]: state.spentAttrPoints[attribute] + n,
        },
      };
    }),
  availableSkillPoints: MIN_SKILL_POINTS,
  spentSkillPoints: 0,
  incrementSkillPoints: (skill, n) => set((state) => {
    if () {

    }
  }),

  // bears: 0,
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
}));
