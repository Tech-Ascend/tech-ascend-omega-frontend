import useArrayPage from "../../hooks/facades/useArrayPage";

function ArrayPage() {
  const containsDuplicates = useArrayPage();

  return (
    <>
      <div>hello </div>
      <button onClick={containsDuplicates} />
    </>
  );
}
export default ArrayPage;
