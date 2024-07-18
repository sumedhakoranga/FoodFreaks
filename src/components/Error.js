import { useRouteError } from "react-router-dom";

const Error =  () =>{
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>Ooopss! Something is wrong</h1>
      <h2>
        {err.status} : {err.statusText}
      </h2>
    </>
  );
}

export default Error;