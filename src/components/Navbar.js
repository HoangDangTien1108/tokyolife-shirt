
export default function Navbar() {
    

  return (
    <>
        <div className='fixed z-20 w-full'>
            <div className='h-[25px]'>
                <img className='w-full h-[25px] bg-cover' src='images/backgroundNavBar.png' alt=''/>   
            </div>
            <div className='bg-white flex justify-between items-center navBar2XL:px-[160px] navBarXl:px-[120px] navBarLg:px-[80px] menuPhone:px-[50px] '>
                <div className='flex items-center navBar2XL:w-[85%] navBarXl:w-[82%] navBarTablet:w-[82%] w-[100%]'>
                    <div className='flex justify-between items-center navBarTablet:w-auto w-[100%] navBarTablet:gap-0 menuPhone:gap-[44px] navBarTablet:p-0 menuPhone::px-[16px] py-[16px] px-[20px] gap-0'>
                        <img className='navBarTablet:hidden flex opacity-0' src='images/menu.png' alt=''/>
                        <img src='images/logo.png' alt=''/>
                        <button
                            
                        >
                            <img className='navBarTablet:hidden flex' src='images/menu.png' alt=''/>
                        </button>
                    </div>

                    <div className='navBarTablet:flex hidden w-[100%] items-center justify-end '>
                        <ul className='flex items-center'>
                            <li className='font-BeVietNamPro font-bold text-redNavBar leading-[24px] text-[16px] px-[16px] py-[20px]'>Trang chủ</li>
                            <li className='font-BeVietNamPro font-bold leading-[24px] text-[16px] px-[16px] py-[20px]'>Giới thiệu</li>
                            <li className='font-BeVietNamPro font-bold leading-[24px] text-[16px] px-[16px] py-[20px]'>Sản phẩm</li>
                            <li className='font-BeVietNamPro font-bold leading-[24px] text-[16px] px-[16px] py-[20px]'>Tính năng</li>
                            <li className='font-BeVietNamPro font-bold leading-[24px] text-[16px] px-[16px] py-[20px]'>Blogs</li>
                            <li className='font-BeVietNamPro font-bold leading-[24px] text-[16px] px-[16px] py-[20px]'>Liên hệ</li>
                        </ul>
                    </div>

                </div>

                <div className='navBarTablet:flex hidden gap-[61px]'>
                    <button className='flex items-center justify-center rounded bg-redNavBar py-[7px] px-[12px]'>
                        <span className='font-BeVietNamPro font-normal text-white text-[16px] leading-[24px]'>Nhận tư vấn ngay</span>
                    </button>
                </div>
                
            </div>
        </div>
    </>
  )
}
