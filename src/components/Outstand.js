import React, { useState } from 'react'

export default function Outstand() {
    const [outstand, setOutstand] = useState(1);
    
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

    const handleButtonOnchange = (value) =>{
        if(outstand===value){
            return{
                padding:'24px',
                boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.08)',
                borderRadius:'8px',
            };
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
        <div className='py-[80px] px-[160px] flex flex-col items-center'>
            <div className='pb-[80px]'>
                <h1 className='font-BeVietNamPro text-center text-gray-700 font-bold OutstandXl:leading-[60px] OutstandXl:text-[40px] text-[30px] '>Đặc điểm nổi bật của TOKYOLIFE SHIRT</h1>    
            </div>
            <div className='flex w-full items-start'>
                <div className='w-[31.5%] mr-[40px]'>
                    <button className="text-left w-full px-[24px] py-[32px]" onClick={()=>{handleOnclick(1)}} style={handleButtonOnchange(1)}>
                        <span className='font-BeVietNamPro font-semibold text-[28px] leading-[36px] bg-backgroundOutstand ' style={handleSpanOnchange(1)}>Công nghệ vải</span>
                        <p className='font-BeVietNamPro font-normal text-gray-500 text-[16px] leading-[24px] pt-[24px]' style={handleTextOnchange(1)}>Trở thành công ty sản xuất và bán lẻ, bán sỉ uy tín, có vị thế hàng đầu Việt Nam về sản phẩm thời trang, làm hài lòng 10 triệu khách hàng. Làm cho khách hàng của thấy tự hào về chính bản thân mình qua những sản phẩm và dịch vụ có đẳng cấp cao nhất. Trở thành công ty sản xuất và bán lẻ, bán sỉ</p>
                    </button>    
                    <button className="text-left w-full px-[24px] py-[32px]" onClick={()=>{handleOnclick(2)}}  style={handleButtonOnchange(2)}>
                        <span className='w-full font-BeVietNamPro font-semibold  text-[28px] leading-[36px]' style={handleSpanOnchange(2)}>Công nghệ May</span>
                        <p className=' font-BeVietNamPro font-normal text-gray-500 text-[16px] leading-[24px] pt-[24px]' style={handleTextOnchange(2)}>Trở thành công ty sản xuất và bán lẻ, bán sỉ uy tín, có vị thế hàng đầu Việt Nam về sản phẩm thời trang, làm hài lòng 10 triệu khách hàng. Làm cho khách hàng của thấy tự hào về chính bản thân mình qua những sản phẩm và dịch vụ có đẳng cấp cao nhất. Trở thành công ty sản xuất và bán lẻ, bán sỉ </p>
                    </button>    
                    <button className="text-left w-full px-[24px] py-[32px]" onClick={()=>{handleOnclick(3)}}  style={handleButtonOnchange(3)}>
                        <span className='w-full font-BeVietNamPro font-semibold  text-[28px] leading-[36px]' style={handleSpanOnchange(3)}>In thêu & Sản xuất</span>
                        <p className='font-BeVietNamPro font-normal text-gray-500 text-[16px] leading-[24px] pt-[24px]' style={handleTextOnchange(3)}>Trở thành công ty sản xuất và bán lẻ, bán sỉ uy tín, có vị thế hàng đầu Việt Nam về sản phẩm thời trang, làm hài lòng 10 triệu khách hàng. Làm cho khách hàng của thấy tự hào về chính bản thân mình qua những sản phẩm và dịch vụ có đẳng cấp cao nhất. Trở thành công ty sản xuất và bán lẻ, bán sỉ </p>
                    </button>    
                    <button className='py-[32px] w-full text-left px-[24px]'>
                        <span className='px-[12px] py-[10px] rounded text-white bg-redNavBar font-normal leading-[24px] text-[16px]'>Tìm hiểu thêm</span>
                    </button>
                </div>
                <div className='w-[68.5%]'>
                    <img className='w-full' src='images/outstandImg.png' alt=''/>
                </div>
            </div>

        </div>
    </>
  )
}
