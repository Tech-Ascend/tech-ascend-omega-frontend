import { ContainsDuplicatesResult } from "../store/ArrayProblems";
import { ValidAnagramResults } from "../views/ArrayPage/ValidAnagram";
import techAscend from "./instances/techAscend";

export default {
  async containsDuplicates(
    numbers: number[],
  ): Promise<ContainsDuplicatesResult> {
    const response = await techAscend.post<ContainsDuplicatesResult>(
      "/arrays",
      numbers,
    );
    return response.data;
  },
  async validAnagrams(s: string, t: string):Promise<ValidAnagramResults>{
    const response = await techAscend.post<ValidAnagramResults>("/arrays/valid-anagram", {s, t})
    return response.data
  }
};
