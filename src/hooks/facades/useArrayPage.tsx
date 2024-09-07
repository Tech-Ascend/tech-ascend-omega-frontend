import { useCallback } from "react";
import ArrayProblems from "../../store/ArrayProblems";

function useArrayPage() {
  const containsDuplicate = useCallback(async () => {
    await ArrayProblems.containsDuplicates();
  }, []);

  return containsDuplicate;
}

export default useArrayPage;
