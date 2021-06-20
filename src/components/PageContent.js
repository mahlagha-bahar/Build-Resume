import React from "react";

export default function PageContent({ text, infoList }) {
  return (
    <div className="page-content">
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-6">
          <div className="about-me">
            <div className="block-title" className="about-me-text">
              <h3 className="about-me-text">
                <span> درباره من</span>
              </h3>
              {text}
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-6 col-lg-6">
          <ul className="info-list">
            {infoList.map((info) => (
              <li key={info.value}>
                <span className="title">{`${info.value} :`}</span>
                <span className="value available">{info.key}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
