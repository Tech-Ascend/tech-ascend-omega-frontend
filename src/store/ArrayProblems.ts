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
  return await arrayProblems.containsDuplicates(numbers);;
}

const ArrayProblems = {
  containsDuplicates,
};

export default ArrayProblems;