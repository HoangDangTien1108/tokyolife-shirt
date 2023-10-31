import React from 'react'

export default function Content3() {
  return (
    <>
        <div className='w-full flex navBarTablet:flex-row flex-col navBarTablet:pb-[100px] items-end contentXl:px-[160px] contentLg2:px-[120px] navBarTablet:px-[90px] p-0'>
            <div className='navBarTablet:w-[36%] w-[100%] content3XL:pr-[120px] navBarTablet:pr-[80px] navBarTablet:pl-[0px] pl-[16px]'>  
                <h1 className='font-Purple text-content1 font-normal contentXl:text-[122px] leading-normal content2XL:h-[100%] contentXl:h-[165px] contentLg2:h-[155px] navBarTablet:h-[145px] navBarTablet:text-[115px] text-[122px] navBarTablet:pr-[0px] pr-[16px]'>03</h1>
                <h2 className='font-BeVietNamPro font-bold uppercase text-gray-700 contentXl:text-[32px] navBarTablet:text-[23px] text-[24px] navBarTablet:pr-0 pr-[16px] contentXl:leading-[40px] leading-[32px]'>Phụ kiện -  Mũ, Túi tote, khẩu trang, Khăn, Balo</h2>
                <p className='font-BeVietNamPro font-normal text-gray-500 text-[16px] contentXl:leading-[24px] leading-[21px] content2XL:pt-[16px] content2XL:pb-[80px] contentXl:pt-[12px] contentXl:pb-[65px] contentLg2:pt-[10px] contentLg2:pb-[50px] navBarTablet:pt-[8px] navBarTablet:pb-[35px] pt-[16px] pb-[24px] navBarTablet:pr-0 pr-[16px]'>Bạn muốn tìm một kiểu áo phù hợp cho mọi dịp, thoải mái và phản ánh cá tính của bạn? Hãy đến với chúng tôi và khám phá bộ sưu tập độc đáo của Áo T-shirt - điểm nhấn cho mọi người, từ cá nhân đến doanh nghiệp.</p>
                <img className='w-full' src='images/Content3_1.png' alt=''/>
            </div>
            <div className='navBarTablet:w-[64%] w-full navBarTablet:pr-0 navBarTablet:py-0 py-[16px] pr-[16px]'>
                <img className='contentTablet:h-full w-full navBarTablet:h-[430px] bg-cover bg-center' src='images/Content3_2.png' alt=''/>
            </div>
        </div>

        <div className='flex navBarTablet:flex-row flex-col navBarTablet:pb-[80px] pb-0'>
            <div className='navBarTablet:w-[43%] w-[100%]'>
                <img className='w-full contentCotton:h-auto navBarTablet:h-[370px] h-auto' src='images/Content3_3.png' alt=''/>
            </div>
            <div className='navBarTablet:w-[57%] w-[100%] navBarTablet:pl-[80px] navBarTablet:pr-[160px]'>
                <div className='content2Xl:py-[30px] contentXl:py-[15px] contentLg2:py-[5px] navBarTablet:py-[0px] py-[24px] navBarTablet:px-0 px-[16px]'>
                    <h1 className='font-BeVietNamPro text-gray-700 font-bold contentLg2:text-[32px] text-[24px] content2Xl:pb-[16px] contentXl:pb-[12px] contentLg2:pb-[8px] navBarTablet:pb-[0px] pb-[16px] leading-[40px]'>100% cotton - SUPIMA COTTON</h1>
                    <p className='font-BeVietNamPro text-gray-500 font-normal contentXl:leading-[22px] leading-[20px] text-[16px]'>Chất liệu Thoáng Mát: Chúng tôi sử dụng chất liệu cotton cao cấp để đảm bảo bạn luôn cảm thấy thoải mái và dễ chịu trong mọi hoàn cảnh. Vải cotton không chỉ giúp thoát mồ hôi một cách hiệu quả mà còn mang lại cảm giác mềm mại trên da. Áo T-shirt của chúng tôi được sản xuất với tiêu chuẩn cao cấp và kiểm tra kỹ lưỡng trước khi đến tay bạn. Chúng sẽ đồng hành cùng bạn trong thời gian dài mà không bị biến dạng hoặc mất màu</p>
                </div>
                <div className='flex content2Xl:pt-[14px] contentLg2:pt-[10px] navBarTablet:pt-[12px] pt-0 items-center w-full '>
                    <div className='w-[52%] bg-yellow-50'>
                        <img className='w-full' src='images/Content3_5.png' alt=''/>
                    </div>
                    <div className='pl-[4.5%] flex flex-col items-center w-[48%]'>
                        <img className='w-full' src='images/Content3_4.png' alt=''/>
                        <img className='contentXl:pt-[80px] contentLg2:pt-[55px] navBarTablet:pt-[35px] pt-[22%] w-[35%]' src='images/Content1_6.png' alt=''/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
