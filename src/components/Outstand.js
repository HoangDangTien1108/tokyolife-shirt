import React, { useEffect, useState } from 'react'

export default function Outstand() {
    const [outstand, setOutstand] = useState(1);
    const [windowWidth , setWindowWidth] = useState(window.innerWidth);

    useEffect(()=>{
        const handleResize = () =>{
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
    })
    
    const handleOnclick = (number) =>{
       setOutstand(number);
    }

    const handleTextOnchange = (value) =>{
        if(outstand===value){
            return{
                display:'flex',
            };
        }
        if(outstand!==value){
            return{
                display:'none',
            }
        }
    } 

    const handleButtonOnchange = (value , windowWidth) =>{
        if(outstand===value){
            if(windowWidth >= 1200){
                return{
                    padding:'24px',
                    boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.08)',
                    borderRadius:'8px',
                };
            }else{
                return{
                    padding:'16px',
                    boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.08)',
                    borderRadius:'8px',
                }
            }
        }
        if(outstand!==value){
            return{
                borderBottom:'1px solid #E5E7EB',
            }
        }
    }

    const handleSpanOnchange = (value) =>{
        if(outstand===value){
            return{
                color:'#C92127',
            };
        }
        if(outstand!==value){
            return{
                color:'#333333',
            }
        }
    } 

  return (
    <>
        <section className='contentLg2:py-[80px] navBarTablet:py-[60px] pt-[24px] contentXl:px-[160px] contentLg2:px-[120px] navBarTablet:px-[90px]  p-0 flex flex-col items-center scrollspay ' id='Outstand'>
            <div className='px-[16px]'>
                <h1 className='font-BeVietNamPro text-center text-gray-700 font-bold OutstandXl:leading-[60px] OutstandXl:text-[40px] text-[24px] leading-[40px] OutstandXl:normal-case uppercase '>Đặc điểm nổi bật của TOKYOLIFE SHIRT</h1>    
            </div>
            <div className='flex w-full items-start navBarTablet:flex-row flex-col contentLg2:pt-[80px] navBarTablet:pt-[60px] pt-[17px]'>
                <div className='navBarTablet:w-[31.5%] navBarTablet:mr-[40px] w-full navBarTablet:px-0 px-[16px] navBarTablet:py-0 pt-[17px] pb-[24px]'>
                    <button className="text-left w-full px-[24px] OutstandXl:py-[32px] py-[16px]" onClick={()=>{handleOnclick(1)}} style={handleButtonOnchange(1,windowWidth)}>
                        <span className='font-BeVietNamPro font-semibold OutstandXl:text-[28px] text-[20px] leading-[36px] bg-backgroundOutstand ' style={handleSpanOnchange(1)}>Công nghệ vải</span>
                        <p className='font-BeVietNamPro font-normal text-gray-500 text-[16px] leading-[24px] OutstandXl:pt-[24px] pt-[12px]' style={handleTextOnchange(1)}>Trở thành công ty sản xuất và bán lẻ, bán sỉ uy tín, có vị thế hàng đầu Việt Nam về sản phẩm thời trang, làm hài lòng 10 triệu khách hàng. Làm cho khách hàng của thấy tự hào về chính bản thân mình qua những sản phẩm và dịch vụ có đẳng cấp cao nhất. Trở thành công ty sản xuất và bán lẻ, bán sỉ</p>
                    </button>    
                    <button className="text-left w-full px-[24px] OutstandXl:py-[32px] py-[16px]" onClick={()=>{handleOnclick(2)}}  style={handleButtonOnchange(2, windowWidth)}>
                        <span className='w-full font-BeVietNamPro font-semibold OutstandXl:text-[28px] text-[20px] leading-[36px]' style={handleSpanOnchange(2)}>Công nghệ May</span>
                        <p className=' font-BeVietNamPro font-normal text-gray-500 text-[16px] leading-[24px] OutstandXl:pt-[24px] pt-[12px]' style={handleTextOnchange(2)}>Trở thành công ty sản xuất và bán lẻ, bán sỉ uy tín, có vị thế hàng đầu Việt Nam về sản phẩm thời trang, làm hài lòng 10 triệu khách hàng. Làm cho khách hàng của thấy tự hào về chính bản thân mình qua những sản phẩm và dịch vụ có đẳng cấp cao nhất. Trở thành công ty sản xuất và bán lẻ, bán sỉ </p>
                    </button>    
                    <button className="text-left w-full px-[24px] OutstandXl:py-[32px] py-[16px]" onClick={()=>{handleOnclick(3)}}  style={handleButtonOnchange(3, windowWidth)}>
                        <span className='w-full font-BeVietNamPro font-semibold  OutstandXl:text-[28px] text-[20px] leading-[36px]' style={handleSpanOnchange(3)}>In thêu & Sản xuất</span>
                        <p className='font-BeVietNamPro font-normal text-gray-500 text-[16px] leading-[24px] OutstandXl:pt-[24px] pt-[12px]' style={handleTextOnchange(3)}>Trở thành công ty sản xuất và bán lẻ, bán sỉ uy tín, có vị thế hàng đầu Việt Nam về sản phẩm thời trang, làm hài lòng 10 triệu khách hàng. Làm cho khách hàng của thấy tự hào về chính bản thân mình qua những sản phẩm và dịch vụ có đẳng cấp cao nhất. Trở thành công ty sản xuất và bán lẻ, bán sỉ </p>
                    </button>    
                    <button className='navBarTablet:py-[32px] py-[16px] w-full text-left navBarTablet:px-[24px] px-[0]'>
                        <span className='px-[12px] py-[10px] rounded text-white bg-redNavBar font-normal leading-[24px] text-[16px]'>Tìm hiểu thêm</span>
                    </button>
                </div>
                <div className='navBarTablet:w-[68.5%] w-full'>
                    <img className='w-full' src='images/outstandImg.png' alt=''/>
                </div>
            </div>

        </section>
    </>
  )
}
