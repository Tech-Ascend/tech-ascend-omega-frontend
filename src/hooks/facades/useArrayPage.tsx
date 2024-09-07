import ArrayProblems from "../../store/ArrayProblems";

function useArrayPage() {
  const handleCheckDuplicates = async (inputNumbers: string) => {
    const numbers = inputNumbers.split(",").map((num) => Number(num.trim()));
    return await ArrayProblems.containsDuplicates(numbers);
  };

  return { handleCheckDuplicates };
}

export default useArrayPage;