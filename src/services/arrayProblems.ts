import { ContainsDuplicatesResult } from "../store/ArrayProblems";
import techAscend from "./instances/techAscend";

export default {
  async containsDuplicates(numbers: number[]): Promise<ContainsDuplicatesResult> {
    const response = await techAscend.post<ContainsDuplicatesResult>("/arrays", numbers);
    return response.data;
  },
  async isValidSudoku(board: string[][]) {
    return await techAscend.post("/arrays/sudoku",  JSON.stringify({ board }));
  },
};
