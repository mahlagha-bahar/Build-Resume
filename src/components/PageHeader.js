import React from "react";

export default function PageHeader({ avatar, name, roles, socialLinks }) {
  return (
    <div className="page-header">
      <div className="row">
        <div className="col-sm-4 col-md-4 col-lg-4">
          <div className="photo">
            <img src={avatar} alt="" />
          </div>
        </div>

        <div className="col-sm-8 col-md-8 col-lg-8">
          <div className="title-block">
            <h1>{name}</h1>
            <div className="owl-carousel text-rotation">
              {roles.map((role) => (
                <div className="item" key={role}>
                  <div className="sp-subtitle">{role}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="social-links">
            {socialLinks.map((link) => (
              <a href={link.url} key={link.iconClassName}>
                <i className={`fa ${link.iconClassName}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
