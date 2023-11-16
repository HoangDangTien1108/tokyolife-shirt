import React from 'react'

export default function Header() {
  return (
    <>
      <section className='Header' id="home-Page">
         <div className='w-full relative navBar2XL::top-0 navBarTablet:top-[30px] headerPhone:top-[50px] top-[70px]'>
            <div className='h-full left-0 absolute w-full' style={{"background-color": "rgba(0,0,0,.4)"}}>
            </div>
            <img src='images/imageHeader.png' alt='' className='h-full object-cover w-full'/>
            <div className=' text-white flex flex-col h-full justify-center absolute top-0  xl:translate-x-[20%] xl:translate-y-[10%] navBarTablet:translate-x-[10%] navBarTablet:translate-y-[5%] headerPhone:translate-y-[12%] headerPhone:translate-x-[15%] navBarTablet:w-[780px] headerPhone:w-[340px] w-[90%] translate-x-[5%] translate-y-[3%]'>
              <p className='font-BeVietNamPro not-italic font-bold uppercase leading-normal navBarTablet:text-[20px] text-[12px]'>Bán chạy số 1  Việt Nam</p>
              <p className='navBarTablet:pt-[24px] headerPhone1:pt-[10px] pt-[3px] navBarTablet:pb-[40px] headerPhone1:pb-[8px] pb-[2px] font-BeVietNamPro not-italic font-semibold navBarTablet:leading-[60px] navBarTablet:text-[53px] leading-[24px] text-[20px]'>Hàng tiêu dùng Nhật Bản, thời trang thông minh</p>
              <p className='font-BeVietNamPro not-italic font-medium navBarTablet:leading-[30px] navBarTablet:text-[16px] leading-[20px] text-[14px]'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
              <div className='navBarTablet:pt-[60px] headerPhone1:pt-[12px] pt-[3px]'>
                <button className='flex items-center justify-center gap-[8px] navBarTablet:rounded-[10px] rounded-[4px] bg-white text-redNavBar navBarTablet:p-[16px] p-[6.41px]'><span className='font-BeVietNamPro not-italic font-semibold navBarTablet:leading-[28px] navBarTablet:text-[18px] leading-[11.214px] text-[7.209px]'>Khám phá ngay</span></button>
              </div>
            </div>
         </div>
      </section> 
    </>
  )
}
