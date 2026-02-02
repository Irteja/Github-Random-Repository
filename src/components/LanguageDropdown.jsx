import { LANGUAGES } from "../utils/constants";
import "../styles/LanguageDropDown.css";

const LanguageDropdown = ({ value, onChange }) => {
  return (
    <div className="dropdown-container">

      <div className="select-wrapper">
      <select
        id="language-select"
        className="custom-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>Choose a language</option>
        {LANGUAGES.map((lang) => (
          <option key={lang} value={lang}>
            {lang.charAt(0).toUpperCase() + lang.slice(1)}
          </option>
        ))}
      </select>
      </div>
    </div>
  );
};

export default LanguageDropdown;
