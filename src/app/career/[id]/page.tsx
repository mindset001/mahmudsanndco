import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Comma from '../../../../public/images/comma.png';
import Man from '../../../../public/images/man2.png'
import { Divider } from 'antd';
import { articles } from '../component/data';
import { notFound } from 'next/navigation';
import Newsletter from '@/app/component/Newsletter2';

interface ArticlePageProps {
    params: { id: string };
}

function Page({ params }: ArticlePageProps) {
    const articleId = parseInt(params.id, 10);

    // Find the current article by ID
    const currentArticleIndex = articles.findIndex((article) => article.id === articleId);
    const article = articles[currentArticleIndex];

    if (!article) {
        notFound();
        return null; // This line is redundant but helps with TypeScript understanding
    }

    // Determine the previous and next articles
    const prevArticle = currentArticleIndex > 0 ? articles[currentArticleIndex - 1] : null;
    const nextArticle = currentArticleIndex < articles.length - 1 ? articles[currentArticleIndex + 1] : null;

    return (
        <main >
            <div className='w-full bg-[#000] mt-[-60px] text-[#fff] h-[30vh] flex flex-col items-center justify-center'>
            <div className='w-[70%]'>
            <h1 className='text-[44px] font-[600]'>{article.title}</h1>
            </div>
            
        </div>
          <div className='flex flex-col justify-center items-center'>
          
            <div className='w-[90%] md:w-[80%] my-20'>
                <div className="px-4 w-full">
                    <div className="flex">
                        <div className="w-full md:pr-8">
                            {/* Main Content */}
                            <div>
                                <Image
                                    src={article.image2} // Updated with the correct image path
                                    alt="Construction workers"
                                    width={800}
                                    height={600}
                                    className="w-full h-[60vh]"
                                />
                                <div className="text-gray-500 mt-4">{article.date} • Energy Law</div>
                                <div className="mt-4 text-justify">
                                    <p>{article.content}</p>
                                    <blockquote className="ml-6 italic flex items-center gap-4 my-6 text-justify">
                                        <Image src={Comma} alt='' />
                                        "We are a market-leading, nationally-recognised firm for all your legal needs. Our lawyers provide customer centric advice to corporations and individuals across the world"
                                    </blockquote>
                                    <p className='my-6'>{article.content}</p>
                                    <p>{article.content}</p>
                                </div>
                            </div>
                            <Divider className='mt-20' />
                            {/* Navigation */}
                            <div className="flex justify-between items-center mt-8">
                                {prevArticle ? (
                                    <Link href={`/career/component/${prevArticle.id}`}>
                                        <p className="flex items-center text-black font-[600]">
                                            <div className='border rounded-full flex justify-center items-center border-[#000] w-[14px] h-[14px] mr-2'>
                                                <svg className="w-4 h-4 text-[#000] font-[700]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                                </svg>
                                            </div>
                                            Previous Post
                                        </p>
                                    </Link>
                                ) : (
                                    <div /> // Empty div to maintain layout when no previous article
                                )}

                                {nextArticle ? (
                                    <Link href={`/career/component/${nextArticle.id}`}>
                                        <div className="flex items-center text-black font-[600]">
                                            Next Post
                                            <div className='ml-2 border rounded-full flex justify-center items-center border-[#000] w-[14px] h-[14px]'>
                                                <svg className="w-4 h-4 text-[#000] font-[700]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </Link>
                                ) : (
                                    <div /> // Empty div to maintain layout when no next article
                                )}
                            </div>
                        </div>



                    </div>
                </div>


              

                <div className='mt-20'>
                <h1 className='text-[20px] font-[600]'>Apply Now</h1>
                <Divider className='bg-black mt-[-1px]' />
                            <p className='my-10 text-[16px] font-[500]'>Your email address will not be published. Required fields are marked*

</p>
                <div className='mt-10'>
                    <form action="">
                        <textarea name="" id="" placeholder='Your Comment' className='w-full md:w-[55%] border rounded-[23px] h-[148px] p-2'></textarea>

                        <div className='w-full md:w-[55%] flex gap-4 my-10'>
                                <input type='text' placeholder='Type your name...' className='border-b border-[#000000] border-1 outline-none py-2 w-full' />

                                <input type='email' placeholder='Type your email...' className='border-b border-[#000000] border-1 outline-none py-2 w-full' />
                            </div>
                            
                            <div className='w-[55%] flex gap-4'>
                                <input type='url' placeholder='Website' className='border-b border-[#000000] border-1 outline-none py-2 w-full' />

                            
                            </div>

                            <div className='flex gap-4 my-10'>
                                <input type='checkbox'/>
                                <p>Your email address will not be published. Required fields are marked*

</p>
                            </div>

                            <button className='bg-black rounded-[50px] text-[#fff] p-4 mt-0 w-[155px] h-[55px]'>Submit</button>
                    </form>
                </div>
                </div>
            </div>
          </div>
{/* <Newsletter/> */}
        </main>
    );
}

export default Page;


