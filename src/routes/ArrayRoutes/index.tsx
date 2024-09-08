import { Route } from "react-router-dom";
import ArrayPage from "../../views/ArrayPage";

function ArrayRoutes() {
  return (
    <>
      <Route path="*" element={<ArrayPage />} />
    </>
  );
}

export default ArrayRoutes;
