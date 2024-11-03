import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Comma from '../../../../public/images/comma.png';
import { Divider } from 'antd';
import { articles } from './data';
import { notFound } from 'next/navigation';

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
                <div className='w-[80%] md:w-[70%]'>
                    <h1 className='text-[20px] md:text-[36px] font-[600]'>{article.title}</h1>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
            
            <div className='w-[90%] md:w-[80%] my-20'>
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-3/4 md:pr-8">
                            {/* Main Content */}
                            <div>
                                <Image
                                    src={article.image} // Updated with the correct image path
                                    alt="Construction workers"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto"
                                />
                                <div className="text-gray-500 mt-4">{article.date} • Energy Law</div>
                                <div className="mt-4 text-justify">
                                    <p>{article.description}</p>
                                    <blockquote className="ml-6 italic flex items-center gap-4 my-6 text-justify">
                                        <Image src={Comma} alt=''/>
                                        "We are a market-leading, nationally-recognised firm for all your legal needs. Our lawyers provide customer centric advice to corporations and individuals across the world"
                                    </blockquote>
                                    <p className='my-6'>{article.description}</p>
                                    <p>{article.description}</p>
                                </div>
                            </div>
                            <Divider  className='mt-20'/>
                            {/* Navigation */}
                            <div className="flex justify-between items-center mt-8">
                                {prevArticle ? (
                                    <Link href={`/news/${prevArticle.id}`}>
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
                                    <Link href={`/news/${nextArticle.id}`}>
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
                        <div className="md:w-1/4 md:pl-8 mt-20 md:mt-0 ">
                            {/* Sidebar */}
                            <div className="sticky top-4">
                                <div>
                                    <h2 className="text-xl font-bold">Popular News</h2>
                                    <ul className="mt-4">
                                        {articles.slice(0, 3).map((article, i)  => (
                                            <div>
                                                <li key={i} className="mt-4">
                                                <div className="text-gray-500">{article.date}</div>
                                                <Link href={`/news/${article.id}`}>
                                                <h1 className='font-[700] my-2 text-[16px]'>Energy Law</h1>
                                                    <p className="text-[#00000080] hover:underline text-[16px]"> {article.title}</p>
                                                </Link>

                                                <div className="text-gray-500 mt-4">{article.date} • Energy Law</div>
                                            </li>
                                            <Divider className='bg-black'/>
                                            </div>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-8">
                                    <h2 className="text-xl font-bold">Tags</h2>
                                    <Divider className='bg-black'/>
                                    <div className="flex flex-wrap mt-4">
                                        {['Litigation', 'Aviation', 'Law', 'Energy Law'].map((tag, i) => (
                                            <Link key={i} href={`/tag/${tag.toLowerCase()}`}>
                                                <p className="text-[#00000080] hover:underline mr-2 mb-2">{tag}</p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </main>
    );
}

export default Page;
