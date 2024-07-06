import React from "react";

function Footer() {
  return (
    <div className="mt-20 px-[165px] flex justify-between">
      <div className="flex justify-between">
        <div className="flex-col">
          <a href="/">Asosiy</a>
          <a href="/">Loyiha haqida</a>
          <a href="/">Mentorlarga</a>
          <a href="/">Ommaviy oferta</a>
          <a href="/">Maxfiylik siyosati</a>
        </div>
        <div>
          <h3>Qo’shimcha</h3>
        </div>
        <div>
          <h3>Qo’llab quvvatlash</h3>
        </div>
      </div>
      <div>
        <h3>Biz bilan aloqa</h3>
        <a href="tel:+998909000009">(+998 90) 900-00-09</a>
      </div>
    </div>
  );
}

export default Footer;
