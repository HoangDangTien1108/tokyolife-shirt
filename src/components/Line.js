import React from 'react'

export default function Line() {
  return (
    <>
        <div className='w-[100%] navBarTablet:pt-0 pt-[24px]'>
            <div className='flex justify-end'>
                <div className='headerPhone:w-[30%] w-[170px] h-[1.5px] bg-redNavBar'></div>
            </div>
            <div className='navBar2XL:pt-[36px] navBar2XL:pb-[40px] navBarXl:pt-[32px] navBarXl:pb-[36px] flex navBarTablet:justify-end headerPhone:justify-center justify-end navBarTablet:pr-[12.8%] navBarTablet:pl-0 linePhone:pl-[48%] navBarLg:pt-[28px] navBarLg:pb-[32px] headerPhone:pl-[48%] headerPhone:pr-0 pr-[4%] menuPhone:pt-[20px] menuPhone:pb-[24px] headerPhone:pt-[16px] headerPhone:pb-[20px] pt-[14px] pb-[18px]'>
                <img className='navBarTablet:w-[30%] menuPhone:w-[270px] w-[230px]' src='images/logo.png' alt=''/>
            </div>
            <div className='flex justify-start mb-[100px] '>
                <div className='w-[74%] h-[1.5px] bg-gray-500'></div>
            </div>
        </div>
    </>
  )
}
