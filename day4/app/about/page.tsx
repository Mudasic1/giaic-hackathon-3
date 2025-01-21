"use client"

import "./style.css"
import Image from 'next/image'


const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold" id="blog">Blog</h1>
      </div>
    </header>

    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="md:col-span-2 space-y-6">
          {[1, 2, 3].map((post, index) => (
            <article key={index} className="bg-white shadow rounded-lg overflow-hidden">
              <Image
                className="w-full h-48 object-cover"
                src="/images/business-woman.jpg"
                alt="Post"
                width={1500}
                height={800}
              />
              
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Going all-in with millennial design</h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia metus id lorem feugiat,
                  in blandit.
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  Read more
                </a>
              </div>
            </article>
          ))}
        </section>

        <aside>
          <div className="bg-white shadow rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold mb-3">Categories</h3>
            <ul className="space-y-2">
              {["Crafts", "Design", "Ideas", "Wood"].map((category) => (
                <li key={category}>
                  <a href="#" className="text-blue-500 hover:underline">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3">Recent Posts</h3>
            <ul className="space-y-4">
              {[1, 2, 3].map((post) => (
                <li key={post} className="flex items-center space-x-3">
                  <Image
                    className="w-16 h-16 object-cover rounded"
                    src={`https://via.placeholder.com/100x100?text=Thumb+${post}`}
                    alt="Thumbnail"
                  />
                  <a href="#" className="text-blue-500 hover:underline">
                    Recent Post {post}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  </div>
  )
}

export default About

