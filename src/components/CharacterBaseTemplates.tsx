import { useCharacterStore } from "../state";
import { AttributePoints } from "../types";
import { ATTRIBUTE_LIST, CLASSES, CLASS_LIST } from "../consts";

export const CharacterBaseTemplates = () => {
  const { setCharacterData } = useCharacterStore();

  return (
    <span>
      <b>Set Base Character Template</b>
      {CLASSES.map((classStr) => (
        <button
          style={{ marginLeft: 10 }}
          key={classStr}
          onClick={() => setCharacterData({ attributes: CLASS_LIST[classStr] })}
        >
          {classStr}
        </button>
      ))}
      <button
        style={{ marginLeft: 10 }}
        onClick={() =>
          setCharacterData({
            attributes: ATTRIBUTE_LIST.reduce(
              (acc, attribute) => ({ ...acc, [attribute]: 0 }),
              {} as AttributePoints
            ),
          })
        }
      >
        Reset All
      </button>
    </span>
  );
};
