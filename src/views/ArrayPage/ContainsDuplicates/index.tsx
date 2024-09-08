import React, { useState } from "react";
import useArrayPage from "../../../hooks/facades/useArrayPage";
import { ContainsDuplicatesResult } from "../../../store/ArrayProblems";

function ContainsDuplicates() {
  const [inputNumbers, setInputNumbers] = useState("");
  const [result, setResult] = useState<ContainsDuplicatesResult | null>(null);
  const { handleCheckDuplicates } = useArrayPage();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputNumbers(e.target.value);
    setResult(null);
  };

  const onCheckDuplicates = async () => {
    const result = await handleCheckDuplicates(inputNumbers);
    if (result) setResult(result);
  };

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
      {result && (
        <>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Algorithm Steps:</h2>
            {result.steps && result.steps.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {result.steps.map((step) => (
                  <div>
                    {step.number}
                    {step.isDuplicate && " (Duplicate!)"}
                  </div>
                ))}
              </div>
            ) : (
              <p>No steps to display.</p>
            )}
          </div>
          {result.containsDuplicates
            ? "The array contains duplicates"
            : "The array does not contain duplicates"}
        </>
      )}
    </div>
  );
}

export default ContainsDuplicates;
