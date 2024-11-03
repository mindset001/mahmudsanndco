import React from 'react';
import { articles } from './data';
import { Divider } from 'antd';
import Link from 'next/link';

function Body() {
  return (
    <main className='practice flex flex-col justify-center items-center py-5'>
      <div className='w-[70%] mt-5 flex flex-col justify-between items-center'>
        {/* <Divider className='bg-black' /> */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 my-8'>
          {articles.map((article, i) => (
            <div key={i} className=''>
              <Link href={`/practice/component/${article.id}`}>
              <div
                className='relative w-[280px] h-[181.61px] bg-cover bg-center rounded-[20px] flex justify-center items-center cursor-pointer'
                style={{ backgroundImage: `url(${article.image})` }}
              >
                <div className='absolute inset-0 bg-[#CDA233] opacity-50 hover:opacity-0 transition-opacity rounded-[20px]'></div>
                <div className='text-white p-2 relative z-10'>
                  <p className='font-[500] text-[24px] text-center'>{article.title}</p>
                </div>
              </div></Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Body;
