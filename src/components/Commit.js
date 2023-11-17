import React from "react";
import Parameter from "./Parameter";

export default function Commit() {
  return (
    <>
      <div className="bg-redNavBar text-white w-full navBarTablet:py-[80px] WhybuyXl:px-[160px] navBarTablet:px-[80px] parametermobile:px-[60px] px-[16px] py-[24px] flex WhybuyXl:gap-[85px] parametermobile:gap-[50px] gap-[24px] items-center navBarTablet:flex-row flex-col justify-center">
        <div className="WhybuyXl:w-[54%] parameterXl:w-[50%] navBarTablet:w-[54%] w-full flex flex-wrap WhybuyXl:gap-[40px] navBarTablet:gap-[20px] parametermobile:gap-[40px] gap-[16px] items-center navBarTablet:justify-end justify-center">
          <Parameter 
            image={"images/shop.png"}
            number={"150 +"}
            text={"Cửa hàng"}
          >
          </Parameter>
          <Parameter 
            image={"images/province.png"}
            number={"44 +"}
            text={"Tỉnh thành"}
          >
          </Parameter>
          <Parameter 
            image={"images/province.png"}
            number={"44 +"}
            text={"Tỉnh thành"}
          >
          </Parameter>
          <Parameter 
            image={"images/personal.png"}
            number={"1000 +"}
            text={"Nhân sự"}
          >
          </Parameter>
        </div>
        <div className="WhybuyXl:w-[46%] parameterXl:w-[50%] navBarTablet:w-[46%] w-[93%] flex flex-col parameterXl:gap-[32px] parametermobile:gap-[12px] gap-[8px] navBarTablet:text-start parametermobile:text-center text-start">
          <div className="flex flex-col parameterXl:gap-[8px] gap-[4px]">
            <h1 className="font-BeVietNamPro font-semibold parameterXl:leading-[64px] navBarTablet:leading-[24px] parametermobile:leading-[50px] leading-[20px] parameterXl:text-[57px] text-[24px]">TOKYOLIFE</h1>
            <h2 className="font-BeVietNamPro font-bold parameterXl:leading-[40px] navBarTablet:leading-[24px] leading-[40px] parameterXl:text-[32px] text-[18px]">cam kết sản phẩm chính hãng</h2>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="font-BeVietNamPro font-normal leading-[24px] text-[16px]">
              TokyoLife cam kết luôn mang tới cho khách hàng các sản phẩm tốt
              chính hãng
            </p>
            <p className="font-BeVietNamPro font-normal leading-[24px] text-[16px]">
              Sản phẩm đến từ các thương hiệu Nhật Bản: Inomata, Ebisu, LEC, ORP
              Tokyo, Momotani, Naturie, Rohto, DHC, Orihiro, Naive, Aprica,
              Kose, Shiseido, KAO, Rosette, Naive, Ebisu, Unicharm, Tsubaki,
              Rocket, Gunze-Sabrina, Regar,...
            </p>
            <p className="font-BeVietNamPro font-normal leading-[24px] text-[16px]">
              Tất cả sản phẩm MADE IN JAPAN đều có giấy chứng nhận nhập khẩu
              chính hãng từ các nhà phân phối
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
