import type {
  Attributes,
  AttributeString,
  Class,
  SkillList,
  SkillString,
} from "./types";

export const ATTRIBUTE_LIST: AttributeString[] = [
  "Strength",
  "Dexterity",
  "Constitution",
  "Intelligence",
  "Wisdom",
  "Charisma",
];

export const MIN_SKILL_POINTS = 10;
export const MAX_ATTRIBUTE_TOTAL = 70;

export const CLASS_LIST: Record<Class, Attributes> = {
  Barbarian: {
    Strength: 14,
    Dexterity: 9,
    Constitution: 9,
    Intelligence: 9,
    Wisdom: 9,
    Charisma: 9,
  },
  Wizard: {
    Strength: 9,
    Dexterity: 9,
    Constitution: 9,
    Intelligence: 14,
    Wisdom: 9,
    Charisma: 9,
  },
  Bard: {
    Strength: 9,
    Dexterity: 9,
    Constitution: 9,
    Intelligence: 9,
    Wisdom: 9,
    Charisma: 14,
  },
};

export const SKILL_LIST: SkillList = [
  { name: "Acrobatics", attributeModifier: "Dexterity" },
  { name: "Animal Handling", attributeModifier: "Wisdom" },
  { name: "Arcana", attributeModifier: "Intelligence" },
  { name: "Athletics", attributeModifier: "Strength" },
  { name: "Deception", attributeModifier: "Charisma" },
  { name: "History", attributeModifier: "Intelligence" },
  { name: "Insight", attributeModifier: "Wisdom" },
  { name: "Intimidation", attributeModifier: "Charisma" },
  { name: "Investigation", attributeModifier: "Intelligence" },
  { name: "Medicine", attributeModifier: "Wisdom" },
  { name: "Nature", attributeModifier: "Intelligence" },
  { name: "Perception", attributeModifier: "Wisdom" },
  { name: "Performance", attributeModifier: "Charisma" },
  { name: "Persuasion", attributeModifier: "Charisma" },
  { name: "Religion", attributeModifier: "Intelligence" },
  { name: "Sleight of Hand", attributeModifier: "Dexterity" },
  { name: "Stealth", attributeModifier: "Dexterity" },
  { name: "Survival", attributeModifier: "Wisdom" },
];

export const SKILL_ATTRIBUTE_MODIFIER_MAP: Record<
  SkillString,
  AttributeString
> = {
  ["Acrobatics"]: "Dexterity",
  ["Animal Handling"]: "Wisdom",
  ["Arcana"]: "Intelligence",
  ["Athletics"]: "Strength",
  ["Deception"]: "Charisma",
  ["History"]: "Intelligence",
  ["Insight"]: "Wisdom",
  ["Intimidation"]: "Charisma",
  ["Investigation"]: "Intelligence",
  ["Medicine"]: "Wisdom",
  ["Nature"]: "Intelligence",
  ["Perception"]: "Wisdom",
  ["Performance"]: "Charisma",
  ["Persuasion"]: "Charisma",
  ["Religion"]: "Intelligence",
  ["Sleight of Hand"]: "Dexterity",
  ["Stealth"]: "Dexterity",
  ["Survival"]: "Wisdom",
};

export const ATTRIBUTE_SKILL_MODIFIER_MAP = {
  Dexterity: ["Acrobatics", "Sleight of Hand", "Stealth"],
  Wisdom: ["Animal Handling", "Insight", "Medicine", "Perception", "Survival"],
  Intelligence: ["Arcana", "History", "Investigation", "Nature", "Religion"],
  Strength: ["Athletics"],
  Charisma: ["Deception", "Intimidation", "Performance", "Persuasion"],
} as Record<AttributeString, SkillString[]>;

export const SKILLS: SkillString[] = [
  "Acrobatics",
  "Animal Handling",
  "Arcana",
  "Athletics",
  "Deception",
  "History",
  "Insight",
  "Intimidation",
  "Investigation",
  "Medicine",
  "Nature",
  "Perception",
  "Performance",
  "Persuasion",
  "Religion",
  "Sleight of Hand",
  "Stealth",
  "Survival",
];
