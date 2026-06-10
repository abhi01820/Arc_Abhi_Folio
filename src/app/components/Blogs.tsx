import { blogs } from '@/contents/blogs';
import Link from 'next/link';
import React from 'react'
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

const Blogs = () => {
  return (
    <section className='py-20 container max-w-7xl mx-auto px-4'>
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Latest Blog Posts 
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {
                blogs.map((blog)=>(
                    <article key={blog.slug} className='bg-gray-900 border border-gray-800 rounded-xl shadow-lg p-6 hover:border-blue-500/50 transition-colors'>
                        <Link href={`/`}>
                            <h3 className="text-xl font-bold mb-2 text-white hover:text-blue-400 transition-colors">
                                {blog.title}
                            </h3>
                        </Link>
                        <p className="text-gray-400 mb-4">{blog.excerpt}</p>
                        <div className="flex items-center text-sm text-gray-500 space-x-4">
                            <span className="flex items-center">
                                <FaCalendarAlt className='mr-2' />
                                {new Date(blog.date).toLocaleDateString()}
                            </span>
                            <span className="flex items-center">
                                <FaClock className='mr-2' />
                                {blog.readTime} min read 
                            </span>
                        </div>
                    </article>
                ))
            }
        </div>
        <div className="text-center mt-12">
            <Link href="/blogs" className='inline-block text-white px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors font-medium'>View All posts</Link>
        </div>
    </section>
  )
}

export default Blogs;