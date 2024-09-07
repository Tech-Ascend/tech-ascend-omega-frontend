import { useState } from "react";
import useArrayPage from "../../../hooks/facades/useArrayPage";

function ContainsDuplicates() {
  const [inputNumbers, setInputNumbers] = useState("");
  const [result, setResult] = useState<boolean | null>(null);
  const { handleCheckDuplicates } = useArrayPage();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputNumbers(e.target.value);
  };

  const onCheckDuplicates = async () => {
    const hasDuplicates = await handleCheckDuplicates(inputNumbers);
    setResult(hasDuplicates);
  };

  return (
    <>
      <h1>Contains Duplicates</h1>
      <input
        type="text"
        value={inputNumbers}
        onChange={handleInputChange}
        placeholder="Enter numbers separated by commas"
        style={{
          width: '300px',
          padding: '8px',
          fontSize: '16px',
          marginRight: '10px'
        }}
      />
      <button onClick={onCheckDuplicates}>Check for Duplicates</button>
      {result !== null && (
        <p>
          {result
            ? "The array contains duplicates"
            : "The array does not contain duplicates"}
        </p>
      )}
    </>
  );
}

export default ContainsDuplicates;