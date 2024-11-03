import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Comma from '../../../../../public/images/comma.png';
import Man from '../../../../../public/images/man2.png'
import { Divider } from 'antd';

import { notFound } from 'next/navigation';
import Newsletter from '@/app/component/Newsletter2';
import { articles } from '../data';

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
                    <div className=' md:w-[70%]'>
                        <h1 className='text-[30px] md:text-[44px] font-[600]'>{article.title}</h1>
                    </div>

                </div>
            <div className='flex flex-col justify-center items-center'>
                
                <div className='w-[80%] my-20 flex flex-col md:flex-row justify-between'>
                    <div className="px-4 md:w-[65%]">
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

                                    <div className="mt-4 text-justify">
                                        <p>{article.description}</p>

                                        <p className='my-6'>{article.dept}</p>
                                        {/* <p>{article.content}</p> */}
                                    </div>
                                </div>
                                <Divider className='mt-20' />
                                {/* Navigation */}
                                <div className="flex justify-between items-center mt-8">
                                    {prevArticle ? (
                                        <Link href={`/practice/component/${prevArticle.id}`}>
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
                                        <Link href={`/practice/component/${nextArticle.id}`}>
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
                    <div className='md:w-[30%]'>
                        <div>
                            <h1 className='text-[20px] font-[500]'>Lawyers</h1>
                            <Divider className='bg-black w-[190px]' />
                            <Link href={article.link}>
                            <div>
                                <div className='bg-[#5C5A5A] w-[160px] h-[173px]'>
                                <Image
                                        src={article.image3} // Updated with the correct image path
                                        alt="Construction workers"
                                        width={800}
                                        height={600}
                                        className="h-[173px]"
                                    />
                                </div>
                                <p className='text-[20px] font-[500] mt-2'>{article.name}</p>
                                <p className='text-[14px] font-[400]'>{article.post}</p>
                            </div>
                            </Link>

                           <Link href={article.link2}>
                           <div className='mt-4'>
                                <div className='bg-[#5C5A5A] w-[160px] h-[173px]'>
                                <Image
                                        src={article.image4} // Updated with the correct image path
                                        alt="Construction workers"
                                        width={800}
                                        height={600}
                                        className=" h-[173px]"
                                    />
                                </div>
                                <p className='text-[20px] font-[500] mt-2'>{article.name2}</p>
                                <p className='text-[14px] font-[400]'>{article.post2}</p>
                            </div>
                           </Link>

                        </div>

                        <div className='mt-8'>
                            <h1 className='text-[20px] font-[500]'>Our Practice Areas</h1>
                            <Divider className='bg-black w-[190px]' />
                            {articles.map((item, i) => (
                                <div key={i} className='flex flex-col gap-4'>
                                   <Link href={`/practice/component/${item.id}`}> <p className='text-[#00000080] text-[14px] font-[400] hover:text-black'>{item.title}</p></Link>
                                </div>
                            ))}

                        </div>

                    </div>




                </div>
            </div>
            {/* <Newsletter/> */}
        </main>
    );
}

export default Page;


