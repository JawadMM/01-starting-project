import "./CoreConcept.css";

function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt="" />
      <h1>{title}</h1>
      <p>{description}</p>
    </li>
  );
}

export default CoreConcept;
