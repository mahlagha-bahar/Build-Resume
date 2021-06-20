import React from "react";
import PageHeader from "./PageHeader";
import PageContent from "./PageContent";
function ResumeBuilder({ avatar, name, roles, socialLinks, text, infoList }) {
  return (
    <main className="pt-page pt-page-current">
      <div className="section-inner start-page-content">
        <PageHeader
          avatar={avatar}
          name={name}
          roles={roles}
          socialLinks={socialLinks}
        />
        <PageContent text={text} infoList={infoList} />
      </div>
    </main>
  );
}

export default ResumeBuilder;
