import techAscend from "./instances/techAscend";

export default {
  containsDuplicates(numbers: number[]) {
    return techAscend.post("/arrays", numbers);
  },
};
