import arrayProblems from "../services/arrayProblems";

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

async function isValidSudokuBoard(board: string[]){
  return await arrayProblems.isValidSudoku(board)
}

const ArrayProblems = {
  containsDuplicates,
  isValidSudokuBoard
};

export default ArrayProblems;
