import notFound from "../images/notfound.svg";

export default function Notfound() {
  return (
    <>
      <div className="container">
        <h3> Ops...NOT FOUND 404 </h3>
        <img src={notFound} alt="notfound" />
      </div>
    </>
  );
}
