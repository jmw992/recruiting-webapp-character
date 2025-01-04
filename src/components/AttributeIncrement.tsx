import { useState } from "react";
import { MAX_ATTRIBUTE_TOTAL } from "../consts";
import { AttributeString } from "../types";

import { useCharacterStore } from "../state";

export const AttributeIncrement = ({
  attribute,
}: {
  attribute: AttributeString;
}) => {
  const [increment, setIncrement] = useState(1);
  const { totalAttributePoints, attributePoints, incrementAttributePoints } =
    useCharacterStore();

  const maxIncrement = MAX_ATTRIBUTE_TOTAL - totalAttributePoints;

  return (
    <div>
      <b style={{ marginRight: 10 }}>
        {attribute}
        {" : "}
        {attributePoints[attribute]}
      </b>

      <button
        onClick={() => {
          console.log("jmw on submit +", increment + totalAttributePoints);
          if (increment + totalAttributePoints > MAX_ATTRIBUTE_TOTAL) {
            alert(
              `The total ${
                increment + totalAttributePoints
              } is greater than the max allowed ${MAX_ATTRIBUTE_TOTAL}`
            );
          }

          incrementAttributePoints(attribute, increment);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          console.log("jmw on submit -", totalAttributePoints - increment);
          if (totalAttributePoints - increment < 0) {
            alert(
              `The total ${
                totalAttributePoints - increment
              } is less than the min allowed ${0}`
            );
          }
          incrementAttributePoints(attribute, -increment);
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
        {attribute} Check Modifier{" "}
        {Math.floor((attributePoints[attribute] - 10) / 2)}
      </i>
    </div>
  );
};
