import useArrayPage from "../../hooks/facades/useArrayPage";

function ArrayPage() {
  const value = useArrayPage();
  console.log(value);
  return (
    <>
      <div>hello </div>
    </>
  );
}
export default ArrayPage;
