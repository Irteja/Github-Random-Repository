import { LANGUAGES } from "../utils/constants";

const LanguageDropdown = ({ value, onChange }) => {
  return (
    <div className="language-dropdown">
      <label htmlFor="language-select" style={{ marginRight: "10px" }}>
        Select Language:
      </label>
      <select
        id="language-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Choose a language</option>
        {LANGUAGES.map((lang) => (
          <option key={lang} value={lang}>
            {lang.charAt(0).toUpperCase() + lang.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageDropdown;
