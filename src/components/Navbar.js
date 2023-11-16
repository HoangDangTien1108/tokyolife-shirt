import { useEffect, useState } from "react";

export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menu, setMenu] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    if (windowWidth > 1105) {
      setMenu(true);
    }
  }, [menu, windowWidth]);

  const handleMenuClick = () => {
    if(windowWidth > 1105){
      setMenu(true);
    }else{
      setMenu(!menu);
    }
  };

  const handleNavBar = (menu) => {
    if (menu === true) {
      return {
        height: "auto",
        backgroundColor: "white",
      };
    } else {
      return {
        height: "1000px",
        backgroundColor: "#1B1B1B",
        display: "flex",
        flexDirection: "column",
        paddingTop: "20px",
      };
    }
  };

  const navBarColumn = (menu) => {
    if (menu === true) {
      return {
        display: "flex",
      };
    } else {
      return {
        display: "flex",
        flexDirection: "column",
        color: "white",
      };
    }
  };

  const borderNavBar = (menu) => {
    if (menu === false) {
      return {
        borderBottom: "1px solid #FFFFFF66",
        paddingBottom: "30px",
        width: "85%",
        margin: "auto",
      };
    }
  };

  const handleMenuHidden = (windowWidth, menu) => {
    if (windowWidth >= 1105) {
      return {
        display: "flex",
      };
    } else {
      if (menu === true) {
        return {
          display: "none",
        };
      } else {
        return {
          display: "flex",
          flexDirection: "column",
          padding: "5px",
        };
      }
    }
  };

  const menuDesign = (windowWidth, menu) => {
    if (windowWidth >= 1105) {
      return {
        display: "flex",
      };
    } else {
      if (menu === true) {
        return {
          display: "none",
        };
      } else {
        return {
          display: "flex",
          borderTop: "1px solid #EEEEEE12",
          width: "85%",
          justifyContent: "center",
        };
      }
    }
  };

  let section = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('ul a');

  window.onscroll = () =>{
    section.forEach(sec =>{
      let top = window.scrollY;
      let offset = sec.offsetTop - 100;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
      if(top >= offset && top < offset + height){
        navLinks.forEach(links =>{
          links.classList.remove('active');
          document.querySelector('ul a[href*= ' + id + ']').classList.add('active');
        })
      }
    })
  }

  return (
    <>
      <div className="fixed z-20 w-full">
        <div className="h-[25px]" style={{ display: menu ? "flex" : "none" }}>
          <img
            className="w-full h-[25px] bg-cover"
            src="images/backgroundNavBar.png"
            alt=""
          />
        </div>
        <div
          className="bg-white flex justify-between items-center navBar2XL:px-[160px] navBarXl:px-[120px] navBarLg:px-[80px] menuPhone:px-[50px] "
          style={handleNavBar(menu)}
        >
          <div
            className="flex items-center navBar2XL:w-[85%] navBarXl:w-[82%] navBarTablet:w-[82%] w-[100%]"
            style={navBarColumn(menu)}
          >
            <div
              className="flex justify-between items-center navBarTablet:w-auto w-[100%] navBarTablet:gap-0 menuPhone:gap-[44px] navBarTablet:p-0 menuPhone:px-[16px] py-[16px] px-[20px] gap-0 relative"
              style={borderNavBar(menu)}
            >
              <img
                className="navBarTablet:hidden flex opacity-0"
                src="images/menu.png"
                alt=""
              />
              <img
                src="images/logo.png"
                alt=""
                style={{ display: menu ? "flex" : "none" }}
              />
              <img
                className="pr-[25px]"
                src="images/LogoWhite.png"
                alt=""
                style={{ display: menu ? "none" : "flex" }}
              />

              <button onClick={() => handleMenuClick()}>
                <img
                  className=""
                  src="images/menu.png"
                  alt=""
                  style={{ display: menu ? "flex" : "none" }}
                />

                <img
                  className="absolute top-[-5px] right-[-15px]"
                  src="images/close.png"
                  alt=""
                  style={{ display: menu ? "none" : "flex" }}
                />
              </button>
            </div>

            <div
              className="navBarTablet:flex hidden w-[100%] items-center justify-end"
              style={handleMenuHidden(windowWidth, menu)}
            >
              <ul
                className="flex items-center w-full justify-end"
                style={handleMenuHidden(windowWidth, menu)}
              >
                <li
                  className="font-BeVietNamPro font-bold leading-[24px] text-[16px] px-[16px] py-[20px]"
                  style={menuDesign(windowWidth, menu)}
                >
                  <a className="active" href="#home-Page" onClick={() => handleMenuClick()}>Trang chủ</a>
                </li>
                <li
                  className="font-BeVietNamPro font-bold leading-[24px] text-[16px] px-[16px] py-[20px]"
                  style={menuDesign(windowWidth, menu)}
                >
                  <a href="#Introduct" onClick={() => handleMenuClick()}>Giới thiệu</a>
                </li>
                <li
                  className="font-BeVietNamPro font-bold leading-[24px] text-[16px] px-[16px] py-[20px]"
                  style={menuDesign(windowWidth, menu)}
                >
                  <a href="#Product" onClick={() => handleMenuClick()}>Sản phẩm</a>
                </li>
                <li
                  className="font-BeVietNamPro font-bold leading-[24px] text-[16px] px-[16px] py-[20px]"
                  style={menuDesign(windowWidth, menu)}
                >
                  <a href="#Outstand" onClick={() => handleMenuClick()}>Tính năng</a>
                </li>
                <li
                  className="font-BeVietNamPro font-bold leading-[24px] text-[16px] px-[16px] py-[20px]"
                  style={menuDesign(windowWidth, menu)}
                >
                  <a href="#Blogs" onClick={() => handleMenuClick()}>Blogs</a>
                </li>
                <li
                  className="font-BeVietNamPro font-bold leading-[24px] text-[16px] px-[16px] py-[20px]"
                  style={menuDesign(windowWidth, menu)}
                >                
                  <a href="#Contact" onClick={() => handleMenuClick()}>Liên hệ</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="navBarTablet:flex hidden gap-[61px]">
            <button className="flex items-center justify-center rounded bg-redNavBar py-[7px] px-[12px]">
              <span className="font-BeVietNamPro font-normal text-white text-[16px] leading-[24px]">
                Nhận tư vấn ngay
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
