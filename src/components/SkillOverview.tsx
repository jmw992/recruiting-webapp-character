import { useCharacterStore } from "../state";

export const SkillOverview = () => {
  const { totalSkillPoints, availableSkillPoints } = useCharacterStore();
  const isValidSkillPoint = totalSkillPoints <= availableSkillPoints;
  const color = isValidSkillPoint ? "white" : "red";

  return (
    <>
      <h2
        style={{
          color,
        }}
      >
        Skill points : {totalSkillPoints} / {availableSkillPoints}
      </h2>
      {isValidSkillPoint ? (
        <p>
          Available Skillpoints increased by 4 per attribute point in{" "}
          <b>Intelligence</b>
        </p>
      ) : (
        <p style={{ color }}>
          Warning by reducing intelligence you caused an overspend on skill
          points. Either reduce skill point spend or increase{" "}
          <b>Intelligence</b>.
        </p>
      )}
    </>
  );
};
