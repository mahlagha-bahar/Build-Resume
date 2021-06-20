import React from "react";
import ReactDOM from "react-dom";
import ResumeBuilder from "./components/ResumeBuilder";

const socialLinks = [
  {
    iconClassName: "fa-share-square",
    url: "https://facebook.com",
  },
  {
    iconClassName: "fa-facebook",
    url: "https://facebook.com",
  },
  {
    iconClassName: "fa-instagram",
    url: "https://facebook.com",
  },
];
const infoList = [
  {
    key: "متولد",
    value: 1359,
  },
  {
    key: "وضعیت",
    value: "متاهل",
  },
  {
    key: "ادرس",
    value: " خیابان پیروزی-بلوارابوذر",
  },
  {
    key: "ایمیل",
    value: " smbaharloie@gmail.com",
  },
];

const text =
  " برنامه نویس و طراح وب.توسعه دهنده وب با تجربه و مهارت در تمام مراحل توسعه و پیشرفت وب.اشنایی کامل در فرایندرابط کاربری.تست و نگهداری سیستم های وب دارای مهارت در زمینه جاوا";
function App() {
  return (
    <ResumeBuilder
      avatar="sp_main_bg"
      name="مه لقا بهارلویی"
      roles={["طراحی قالب وب سایت", "ساخت سایت با وردپرس"]}
      socialLinks={socialLinks}
      text={text}
      infoList={infoList}
    />
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
