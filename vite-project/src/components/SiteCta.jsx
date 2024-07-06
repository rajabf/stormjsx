import quoteSign from "../assets/images/Bitmap (9).svg";
import whiteDot from "../assets/images/whiteOval.svg";
import blackDot from "../assets/images/blackOval.svg";
import ctaImg from "../assets/images/ctaImg.png";
import ctaImgBack from "../assets/images/ctaImgBack.png";

function SiteCta() {
  return (
    <div className="px-[165px] mt-[96px]">
      <h2 className="mb-[33px] font-sfPro text-4xl mt-[105px]">
        BO'LIMLAR <br />
        BO'YICHA KURSRLAR
      </h2>
      <div className="px-10 lg:w-[918px] bg-white border py-8 relative">
        <img className="mb-4" src={quoteSign} alt="" />
        <div className="px-8">
          <h3 className="mb-8 text-2xl text-opac80">
            Ayni paytda TPS eng yuqori saviyadagi ma’lumot <br />
            uzatish global taqmog‘iga yuqori tezlikda kirish <br />
            imkonini yaratuvchi xizmatni taklif etaoladigan <br />
            intellektual va texnik quvvatga ega.
          </h3>
          <p className="mb-1">Tania Perfilyeva</p>
          <p className="mb-8 text-opac80">Java Bootcamp talabasi</p>
          <div className="flex gap-3">
            <img src={whiteDot} alt="" />
            <img src={whiteDot} alt="" />
            <img src={blackDot} alt="" />
            <img src={whiteDot} alt="" />
          </div>
        </div>
        <img
          className="w-[330px] z-10 absolute top-10 -right-40"
          src={ctaImg}
          alt=""
        />
        <img
          className="w-[248px] absolute top-20 -right-56"
          src={ctaImgBack}
          alt=""
        />
      </div>
    </div>
  );
}

export default SiteCta;
