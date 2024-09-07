import arrayProblems from "../services/arrayProblems";

async function containsDuplicates(numbers: number[]): Promise<boolean> {
  const {
    data: { containsDuplicates },
  } = await arrayProblems.containsDuplicates(numbers);

  return containsDuplicates;
}

const ArrayProblems = {
  containsDuplicates,
};
export default ArrayProblems;
