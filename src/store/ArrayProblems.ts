import arrayProblems from "../services/arrayProblems";

export interface Step {
  number: number;
  isDuplicate: boolean;
}

export interface ContainsDuplicatesResult {
  containsDuplicates: boolean;
  steps: Step[];
}

async function containsDuplicates(numbers: number[]): Promise<ContainsDuplicatesResult> {
  const res = await arrayProblems.containsDuplicates(numbers);
  return res;
}

const ArrayProblems = {
  containsDuplicates,
};

export default ArrayProblems;