import {
  SIZE,
  SUBMIT,
  SUBSCRIBE,
  SUBSCRIBE_DISCLAIMER,
  SUBSCRIBE_PARAGRAPH,
} from "../../shared/constants";
import useIsMobile from "../../shared/hooks/useIsMobile";
import ButtonSecondary from "../../shared/ui/ButtonSecondary";

const Subscribe = () => {
  const isMobile = useIsMobile();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="subscribe-wrapper">
      <p>{SUBSCRIBE_PARAGRAPH}</p>

      <form className="subscribe-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input placeholder="Enter your email" type="email" required />

          <footer className="disclaimer">
            <small>{SUBSCRIBE_DISCLAIMER}</small>
          </footer>
        </div>

        <div>
          <ButtonSecondary
            size={isMobile ? SIZE.S : SIZE.M}
            value={SUBSCRIBE}
            type={SUBMIT}
          />
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
