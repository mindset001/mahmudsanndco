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
                <div className='w-[80%] md:w-[70%]'>
                    <h1 className='text-[26px] md:text-[36px] font-[600]'>{article.title}</h1>
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
                                    <Link href={`/newsletters/${prevArticle.id}`}>
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
                                    <Link href={`/newsletters/${nextArticle.id}`}>
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

                <div className='w-full bg-[#FFF1C6] p-6 mt-10 flex gap-4 items-center'>
                    <div className=' md:w-[300px] flex justify-center'>
                        <Image src={Man} alt='' className='rounded-full border md:w-[140px] md:h-[140px]' />
                    </div>
                    <div>
                        <h1 className='text-[20px] md:text-[25px] font-[600]'>John Doe</h1>
                        <p className='text-[14px] md:text-[20px] text-justify font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis metus metus. Duis cursus, diam vel sollicitudin rhoncus, ex mi vestibulum leo, ac luctus arcu lorem ultricies arcu. Fusce sed enim venenatis, interdum lorem eget, semper dolor. </p>
                    </div>
                </div>

                <div className='mt-10'>
                    <h1 className='text-[20px] font-[600]'>Comments</h1>
                    <Divider className='bg-black mt-[-1px]' />

                    <div className="w-full flex flex-col ">
                        {comments.map((comment) => (
                            <div key={comment.id} className="flex items-start mt-4">
                                <div className="w-12 h-12 mr-4">
                                    <Image src={Man} alt="User Image" width={48} height={48} className="rounded-full" />
                                </div>
                                <div className="flex-1">
                                    <div className='flex justify-between'>
                                        <div className="flex flex-col items-center mb-2">
                                            <h3 className="font-bold text-[16px] mr-2">{comment.name}</h3>
                                            <h4 className="text-gray-600">{comment.title}</h4>
                                        </div>
                                        <div className="flex items-center text-[#00000080] text-[14px]">
                                            <span className="mr-2">{comment.date}</span>
                                            <span className="mr-2">•</span>
                                            <button className="">Reply</button>
                                        </div>
                                    </div>
                                    <p className="text-gray-800">{comment.text}</p>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='mt-20'>
                <h1 className='text-[20px] font-[600]'>Leave A Reply</h1>
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

                            <button className='bg-black rounded-[50px] text-[#fff] p-4 mt-0 w-[155px] h-[55px]'>Post Comment</button>
                    </form>
                </div>
                </div>
            </div>
          </div>
<Newsletter/>
        </main>
    );
}

export default Page;


const comments = [
    {
        id: 1,
        name: 'Lorenz',
        title: 'Lawyer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis metus metus. Duis cursus, diam vel sollicitudin rhoncus, ex mi .',
        date: '3 Years Ago',
    },
    {
        id: 2,
        name: 'Lorenz',
        title: 'Lawyer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis metus metus. Duis cursus, diam vel sollicitudin rhoncus, ex mi .',
        date: '3 Years Ago',
    },
]