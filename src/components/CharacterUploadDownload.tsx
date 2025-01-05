import { CharacterData } from "../types";
import { useCharacterStore } from "../state";

export const CharacterUploadDownload = () => {
  const { attributePoints, skillPoints } = useCharacterStore();
  const characterData: CharacterData = {
    attributes: attributePoints,
    skills: skillPoints,
  };

  return (
    <>
      <b>Character Upload Download</b>

      <span>
        <button
          style={{ marginLeft: 10 }}
          onClick={() => {
            console.log("upload character", characterData);
          }}
        >
          Upload Character
        </button>

        <button
          style={{ marginLeft: 10 }}
          onClick={() => {
            console.log("upload character", characterData);
          }}
        >
          Download Last Saved Character
        </button>
      </span>
    </>
  );
};
