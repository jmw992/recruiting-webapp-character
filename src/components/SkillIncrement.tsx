import { useState } from "react";
import { SkillString } from "../types";

import { useCharacterStore } from "../state";
import { SKILL_ATTRIBUTE_MODIFIER_MAP } from "../consts";

export const SkillIncrement = ({ skill }: { skill: SkillString }) => {
  const [increment, setIncrement] = useState(1);
  const {
    attributePoints,
    totalSkillPoints,
    availableSkillPoints,
    skillPoints,
    incrementSkillPoints,
  } = useCharacterStore();

  const maxIncrement = availableSkillPoints - totalSkillPoints;
  const modifier = SKILL_ATTRIBUTE_MODIFIER_MAP[skill];
  const modVal = attributePoints[modifier];

  const isValidSkillPoint = totalSkillPoints <= availableSkillPoints;
  // Want intelligence skills
  const color = !isValidSkillPoint ? "red" : "white";

  return (
    <div style={{ color }}>
      <b style={{ marginRight: 10 }}>
        {skill}
        {" : "}
        {skillPoints[skill]}
      </b>

      <button
        onClick={() => {
          if (increment + totalSkillPoints > availableSkillPoints) {
            alert(
              `The total ${
                increment + totalSkillPoints
              } is greater than the max allowed ${availableSkillPoints}`
            );
          }

          incrementSkillPoints(skill, increment);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          if (totalSkillPoints - increment < 0) {
            alert(
              `The total ${
                totalSkillPoints - increment
              } is less than the min allowed ${0}`
            );
          }
          incrementSkillPoints(skill, -increment);
        }}
      >
        -
      </button>

      <input
        value={increment}
        type='number'
        id='increment'
        name='increment'
        style={{ marginLeft: 5, width: 40 }}
        min={1}
        max={maxIncrement}
        onChange={(e) => {
          setIncrement(parseInt(e.target.value));
        }}
      />
      <i style={{ marginLeft: 5 }}>
        modifier {modifier}: {modVal},
      </i>
      <b style={{ marginLeft: 5 }}>Total: {modVal + skillPoints[skill]}</b>
    </div>
  );
};
