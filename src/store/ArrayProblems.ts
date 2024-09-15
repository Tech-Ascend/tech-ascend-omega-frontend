import arrayProblems from "../services/arrayProblems";
import { ValidAnagramResults } from "../views/ArrayPage/ValidAnagram";

export interface Step {
  number: number;
  isDuplicate: boolean;
}

export interface ContainsDuplicatesResult {
  containsDuplicates: boolean;
  steps: Step[];
}

async function containsDuplicates(
  numbers: number[],
): Promise<ContainsDuplicatesResult> {
  return await arrayProblems.containsDuplicates(numbers);
}

async function validAnagrams(s: string, t:string): Promise<ValidAnagramResults>{
  return await arrayProblems.validAnagrams(s, t)
}

const ArrayProblems = {
  containsDuplicates,
  validAnagrams
};

export default ArrayProblems;
