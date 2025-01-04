export type Attributes = {
  Strength: number;
  Dexterity: number;
  Constitution: number;
  Intelligence: number;
  Wisdom: number;
  Charisma: number;
};

export type Skills = {
  ["Acrobatics"]: number;
  ["Animal Handling"]: number;
  ["Arcana"]: number;
  ["Athletics"]: number;
  ["Deception"]: number;
  ["History"]: number;
  ["Insight"]: number;
  ["Intimidation"]: number;
  ["Investigation"]: number;
  ["Medicine"]: number;
  ["Nature"]: number;
  ["Perception"]: number;
  ["Performance"]: number;
  ["Persuasion"]: number;
  ["Religion"]: number;
  ["Sleight of Hand"]: number;
  ["Stealth"]: number;
  ["Survival"]: number;
};

export type AttributeString =
  | "Strength"
  | "Dexterity"
  | "Constitution"
  | "Intelligence"
  | "Wisdom"
  | "Charisma";

export type SkillString =
  | "Acrobatics"
  | "Animal Handling"
  | "Arcana"
  | "Athletics"
  | "Deception"
  | "History"
  | "Insight"
  | "Intimidation"
  | "Investigation"
  | "Medicine"
  | "Nature"
  | "Perception"
  | "Performance"
  | "Persuasion"
  | "Religion"
  | "Sleight of Hand"
  | "Stealth"
  | "Survival";

export type Skill = {
  name: SkillString;
  attributeModifier: AttributeString;
};

export type CharacterData = {
  attributes: Attributes;
  skills?: Skills;
};

export type AttributePoints = Record<AttributeString, number>;

export type SkillList = Skill[];

export type Class = "Barbarian" | "Wizard" | "Bard";
