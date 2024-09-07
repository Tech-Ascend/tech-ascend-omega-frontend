import { useState } from 'react';
import ArrayProblems, { ContainsDuplicatesResult } from '../../store/ArrayProblems';

function useArrayPage() {
  const [error, setError] = useState<string | null>(null);

  const handleCheckDuplicates = async (inputString: string): Promise<ContainsDuplicatesResult | null> => {
    setError(null);
    try {
      const numbers = inputString.split(',').map(n => {
        const parsed = parseInt(n.trim(), 10);
        if (isNaN(parsed)) {
          throw new Error(`Invalid number: ${n.trim()}`);
        }
        return parsed;
      });

      const result = await ArrayProblems.containsDuplicates(numbers);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      return null;
    }
  };

  return { handleCheckDuplicates, error };
}

export default useArrayPage;