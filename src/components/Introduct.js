import React from 'react'

export default function Introduct() {
  return (
    <>
        <section className='w-full flex navBarTablet:flex-row flex-col-reverse items-center navBarTablet:pt-[0px] headerPhone:pt-[75px] pt-[90px] scrollspay' id='Introduct'>
            <div className='navBarTablet:w-[50%] w-[100%]'>
                <img className='w-[100%]' src='images/Itroduct.png' alt=''/>
            </div>
            <div className='xl:w-[40%] introductXl:w-[45%] navBarTablet:w-[49%] w-[95%] mx-auto'>
                <h1 className='font-BeVietNamPro font-bold text-h1Gray leading-[150%] navBarTablet:text-[40px] navBarTablet:normal-case uppercase text-[24px]'>Giới thiệu về công ty</h1>
                <div className='navBarLg:py-[16px]'>
                    <p className='font-BeVietNamPro font-normal text-pGray leading-[24px] text-[16px] pt-[16px] pb-[24px]'>TokyoLife cam kết luôn mang tới cho khách hàng các sản phẩm tốt chính hãng</p>
                    <p className='font-BeVietNamPro font-normal text-pGray leading-[24px] text-[16px] pb-[24px]'>Trở thành công ty sản xuất và bán lẻ, bán sỉ uy tín, có vị thế hàng đầu Việt Nam về sản phẩm thời trang, làm hài lòng 10 triệu khách hàng. Làm cho khách hàng của thấy tự hào về chính bản thân mình qua những sản phẩm và dịch vụ có đẳng cấp cao  nhất</p>
                    <p className='font-BeVietNamPro font-normal text-pGray leading-[24px] text-[16px] pb-[24px]'>Làm cho khách hàng của thấy tự hào về chính bản thân mình qua những sản phẩm và dịch vụ có đẳng cấp cao nhất. Làm cho khách hàng của thấy tự hào về chính bản thân mình qua những sản phẩm và dịch vụ có đẳng cấp cao nhất</p>
                    <p className='font-BeVietNamPro font-normal text-pGray leading-[24px] text-[16px] navBarTablet:pb-[0px] pb-[24px]'>Luôn nghĩ cho khách hàng. Nhận trách nhiệm và giữ cam kết. Yêu thương và hỗ trợ đồng đội. Chính trực. Máu lửa và tốc độ. Học hỏi, sáng tạo. Làm cho khách hàng của thấy tự hào về chính bản thân mình qua những sản phẩm và dịch vụ có đẳng cấp cao nhất</p>
                </div>
            </div>
        </section>
    </>
  )
}
