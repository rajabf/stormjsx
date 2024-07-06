import React from "react";
import DepartmentCarts from "./DepartmentCarts";
import bitmap from "../assets/images/Bitmap.svg";
import bitmap1 from "../assets/images/Bitmap (1).svg";
import bitmap2 from "../assets/images/Bitmap (2).svg";
import bitmap3 from "../assets/images/Bitmap (3).svg";
import bitmap5 from "../assets/images/Bitmap (5).svg";
import bitmap6 from "../assets/images/Bitmap (6).svg";
import bitmap7 from "../assets/images/Bitmap (7).svg";
import bitmap8 from "../assets/images/Bitmap (8).svg";

function Departments() {
  const divClass = "w-[160px] h-[188px] border pt-10 pl-5 items-end bg-white";
  return (
    <div className="px-[165px] font-sfPro text-4xl mt-[105px] bg-departmentBg">
      <h2 className="mb-[33px]">
        BO'LIMLAR <br />
        BO'YICHA KURSRLAR
      </h2>
      <div className="flex gap-10">
        <div className="grid grid-cols-4 gap-10">
          <DepartmentCarts
            url={bitmap}
            textClass="text-lg text-left"
            class={divClass}
            text="Dasturlash"
          />
          <DepartmentCarts
            url={bitmap1}
            textClass="text-lg text-left"
            class={divClass}
            text="Dizayn"
          />
          <DepartmentCarts
            url={bitmap2}
            textClass="text-lg text-left"
            class={divClass}
            text="Biznes"
          />
          <DepartmentCarts
            url={bitmap3}
            textClass="text-lg text-left"
            class={divClass}
            text="Marketing"
          />
          <DepartmentCarts
            url={bitmap5}
            textClass="text-lg text-left"
            class={divClass}
            text="Musiqa"
          />
          <DepartmentCarts
            url={bitmap6}
            textClass="text-lg text-left"
            class={divClass}
            text="Moliya"
          />
          <DepartmentCarts
            url={bitmap7}
            class={divClass}
            text="Pazandachilik"
            textClass="text-lg text-left"
          />
          <DepartmentCarts
            url={bitmap8}
            textClass="text-lg text-left"
            class={divClass}
            text="Sport"
          />
        </div>
        <DepartmentCarts
          class="ml-8 w-[350px] pl-[64px] pt-[147px] border bg-white"
          textClass="text-2xl font-bold"
          imgClass="w-[85px] h-[100px]"
          url="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/external-cup-fast-food-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"
          text="Maroqli"
          textNext="bilim oling!"
        />
      </div>
    </div>
  );
}

export default Departments;
