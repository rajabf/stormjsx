import partnersPhoto from "../assets/images/partners.png";

function Partners() {
  return (
    <div className="px-[165px] mt-[97px]">
      <h2 className="mb-[15px] font-sfPro text-4xl mt-[105px]">
        BO'LIMLAR <br />
        BO'YICHA KURSRLAR
      </h2>
      <img className="w-[1158px]" src={partnersPhoto} alt="" />
    </div>
  );
}

export default Partners;
