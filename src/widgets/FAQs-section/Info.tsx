import {
  FAQS_HEADING,
  FAQS_PARAGRAPH,
  GET_IN_TOUCH,
  LINK_BONO,
} from "../../shared/constants";

const Info = () => {
  return (
    <div className="faqs-info-container">
      <h2>{FAQS_HEADING}</h2>

      <div>
        <p>{FAQS_PARAGRAPH}</p>

        <a
          className="special-link"
          href={LINK_BONO}
          target="_blank"
          rel="noopener noreferrer"
        >
          {GET_IN_TOUCH}
        </a>
      </div>
    </div>
  );
};

export default Info;
