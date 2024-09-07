import React, { useState } from "react";
import useArrayPage from "../../../hooks/facades/useArrayPage";

interface Step {
  number: number;
  isDuplicate: boolean;
}

interface ContainsDuplicatesResult {
  containsDuplicates: boolean;
  steps: Step[];
}

function ContainsDuplicates() {
  const [inputNumbers, setInputNumbers] = useState("");
  const [result, setResult] = useState<ContainsDuplicatesResult | null>(null);
  const { handleCheckDuplicates, error } = useArrayPage();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputNumbers(e.target.value);
    setResult(null);
  };

  const onCheckDuplicates = async () => {
    const result = await handleCheckDuplicates(inputNumbers);
    console.log("API Response:", result); // Debugging log
    if (result) {
      setResult(result);
    }
  };

  console.log("Current result state:", result); // Debugging log

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Contains Duplicates</h1>
      <div className="mb-4">
        <input
          type="text"
          value={inputNumbers}
          onChange={handleInputChange}
          placeholder="Enter numbers separated by commas"
          className="w-64 p-2 border rounded mr-2"
        />
        <button
          onClick={onCheckDuplicates}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Check for Duplicates
        </button>
      </div>
      {error && (
        <p className="text-red-500 mb-4">{error}</p>
      )}
      {result && (
        <>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Algorithm Steps:</h2>
            {result.steps && result.steps.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {result.steps.map((step, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded ${
                      step.isDuplicate ? "bg-red-200" : "bg-green-200"
                    }`}
                  >
                    {step.number}
                    {step.isDuplicate && " (Duplicate!)"}
                  </div>
                ))}
              </div>
            ) : (
              <p>No steps to display.</p>
            )}
          </div>
          <p
            className={`text-lg font-semibold ${
              result.containsDuplicates ? "text-red-600" : "text-green-600"
            }`}
          >
            {result.containsDuplicates
              ? "The array contains duplicates"
              : "The array does not contain duplicates"}
          </p>
        </>
      )}
    </div>
  );
}

export default ContainsDuplicates;