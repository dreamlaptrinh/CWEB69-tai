import { useEffect, useState } from "react";
import Translation from "./Translation.json";

const Footer = ({ setLanguage, content, language }) => {
  return (
    <div>
      <h3>{content.footer} 🔥</h3>
      <div>
        <span>{content.footer2}:</span>
        {language == "vn" ? (
          <span
            className="languague-picker selected"
            onClick={(e) => setLanguage("vn")}
          >
            🇻🇳
          </span>
        ) : (
          <span
            className="languague-picker "
            onClick={(e) => setLanguage("vn")}
          >
            🇻🇳
          </span>
        )}

        {language == "us" ? (
          <span
            className="languague-picker selected "
            onClick={(e) => setLanguage("us")}
          >
            🇺🇸
          </span>
        ) : (
          <span
            className="languague-picker "
            onClick={(e) => setLanguage("us")}
          >
            🇺🇸
          </span>
        )}
      </div>
    </div>
  );
};

export default Footer;
