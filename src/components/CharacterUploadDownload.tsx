import { CharacterData } from "../types";
import { useCharacterStore } from "../state";

type PostResponseData = {
  statusCode: number;
  body: string;
};

type GetResponseData = {
  statusCode: number;
  body: CharacterData;
};

const postToEndpoint = async (
  url: string,
  data: CharacterData
): Promise<PostResponseData> => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  return response.json();
};

// Usage in a React component:
const handlePostSubmit = async (characterData: CharacterData) => {
  try {
    const result = await postToEndpoint(
      "https://recruiting.verylongdomaintotestwith.ca/api/{jmw992}/character",
      characterData
    );
    console.info("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
};

const getEndpoint = async (url: string): Promise<GetResponseData> => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  return response.json();
};

const handleGetSubmit = async (
  setCharacterData: (characterData: CharacterData) => void
) => {
  try {
    const result = await getEndpoint(
      "https://recruiting.verylongdomaintotestwith.ca/api/{jmw992}/character"
    );
    console.info("Success:", result);
    if (result.statusCode === 200) {
      setCharacterData(result.body);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const CharacterUploadDownload = () => {
  const {
    attributePoints,
    skillPoints,
    setCharacterData,
    totalSkillPoints,
    availableSkillPoints,
  } = useCharacterStore();
  const characterData: CharacterData = {
    attributes: attributePoints,
    skills: skillPoints,
  };
  const invalidSkillPoints = totalSkillPoints > availableSkillPoints;
  return (
    <>
      <b>Character Upload Download</b>

      <span>
        <button
          style={{ marginLeft: 10 }}
          onClick={() => handlePostSubmit(characterData)}
          disabled={invalidSkillPoints}
        >
          Upload Character
        </button>

        <button
          style={{ marginLeft: 10 }}
          onClick={() => handleGetSubmit(setCharacterData)}
        >
          Download Last Saved Character
        </button>
      </span>
      <br />
      <i>See console for Upload / download status</i>
      {invalidSkillPoints ? <i>{". "}Won't upload invalid character.</i> : null}
    </>
  );
};
