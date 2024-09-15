import { useState } from "react";
import useArrayPage from "../../../hooks/facades/useArrayPage";
export type ValidAnagramResults = {
  ValidAnagram: boolean;
  FrequencyLogs: string[];
  Report: string;
};

function ValidAnagram() {
  const [string1, setString1] = useState("");
  const [string2, setString2] = useState("");
  const [result, setResult] = useState<ValidAnagramResults | null>(null);
  const { handleValidAnagram } = useArrayPage();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFunction: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setFunction(e.target.value);
    setResult(null);
  };
  const onValidateWords = async () => {
    const result = await handleValidAnagram(string1, string2);
    setResult(result);
  };

  return (
    <div>
      <h1>Valid Anagram</h1>
      <input id="string1" type="text" value={string1} onChange={(e) => handleInputChange(e, setString1)} />
      <input id="string2" type="text" value={string2} onChange={(e) => handleInputChange(e, setString2)} />
      <button
        onClick={onValidateWords}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Validate Words
      </button>
      {result && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Result:</h2>
          <p className={`font-bold ${result.ValidAnagram ? "text-green-600" : "text-red-600"}`}>{result.Report}</p>
          <h3 className="text-lg font-semibold mt-4 mb-2">Frequency Logs:</h3>
          <ul className="list-disc list-inside">
            {result.FrequencyLogs.map((log, index) => (
              <li key={index}>{log}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ValidAnagram;
