import about from "../images/about.svg";

export default function About() {
  return (
    <>
      <div className="container">
        <h2>About Me</h2>
        <img src={about} alt="about" />
      </div>
    </>
  );
}
