import { MAX_ATTRIBUTE_TOTAL } from "../consts";

import { useCharacterStore } from "../state";

export const AttributeOverview = () => {
  const { totalAttributePoints } = useCharacterStore();
  return (
    <h2>
      Attribute points : {totalAttributePoints} / {MAX_ATTRIBUTE_TOTAL}
    </h2>
  );
};
