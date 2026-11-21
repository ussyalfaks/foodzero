import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SinglePostNoSidebar = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80"
            alt="Post hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <span className="inline-block bg-[#FF6B35] text-white text-xs md:text-sm font-semibold uppercase tracking-wider px-4 py-2 rounded mb-6">
                Recipes
              </span>
              <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
                The Art of Making Perfect Homemade Pasta from Scratch
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Post Meta */}
      <section className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 py-8 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
              alt="Author"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-gray-900">Sarah Johnson</p>
              <p className="text-xs text-gray-500">Author</p>
            </div>
          </div>
          <div className="h-8 w-px bg-gray-200 hidden md:block" />
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>March 15, 2024</span>
          </div>
          <div className="h-8 w-px bg-gray-200 hidden md:block" />
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>8 min read</span>
          </div>
        </div>
      </section>

      {/* Post Content */}
      <section className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-medium">
            There's nothing quite like the taste of fresh, homemade pasta. In this guide, we'll walk you through the
            traditional Italian method of making pasta from scratch using just a few simple ingredients.
          </p>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
            Making pasta at home is one of those rewarding culinary experiences that connects you to generations of
            Italian tradition. With just flour, eggs, and a little patience, you can create something truly special
            that will impress your family and friends.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">Ingredients You'll Need</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
            The beauty of homemade pasta lies in its simplicity. You only need a handful of ingredients to get started:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-600 mb-6 pl-2">
            <li>2 cups of all-purpose flour (or "00" flour for authentic results)</li>
            <li>3 large eggs at room temperature</li>
            <li>1 tablespoon of olive oil</li>
            <li>A pinch of salt</li>
          </ul>

          <blockquote className="border-l-4 border-[#FF6B35] bg-gray-50 pl-6 pr-4 py-4 my-8 italic text-lg text-gray-700">
            "The secret to great pasta is in the feel of the dough. Trust your hands, not just the recipe."
          </blockquote>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">Step-by-Step Instructions</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
            Begin by creating a well in the center of your flour on a clean surface. Crack the eggs into the well,
            add the olive oil and salt, and use a fork to gently whisk the eggs while gradually incorporating the flour
            from the inner edges of the well.
          </p>

          <div className="my-8 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=1200&q=80"
              alt="Making pasta"
              className="w-full h-auto object-cover"
            />
            <p className="text-sm text-gray-500 text-center mt-3 italic">
              Kneading the dough until smooth and elastic
            </p>
          </div>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
            Once the dough comes together, knead it on a lightly floured surface for about 10 minutes until it becomes
            smooth and elastic. Wrap it in plastic and let it rest for 30 minutes at room temperature. This resting
            period is crucial as it allows the gluten to relax, making the dough easier to roll out.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">Rolling and Cutting</h3>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
            Divide the dough into smaller portions and roll each one through a pasta machine, starting from the widest
            setting and working your way down to your desired thickness. If you don't have a pasta machine, a rolling
            pin works just fine — just be sure to roll the dough as thin as possible.
          </p>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
            Cut the rolled dough into your preferred shape — fettuccine, tagliatelle, or pappardelle. Dust the cut
            pasta with a little flour to prevent sticking, and it's ready to cook or dry for later use.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">Cooking and Serving</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
            Fresh pasta cooks much faster than dried — usually in just 2 to 4 minutes in salted boiling water. Test
            it frequently to ensure the perfect al dente texture. Serve immediately with your favorite sauce, and
            enjoy the incredible taste of pasta made entirely from scratch.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-3 mt-12 pt-8 border-t border-gray-200">
            <span className="text-sm font-semibold text-gray-900">Tags:</span>
            {['Pasta', 'Italian', 'Homemade', 'Recipes'].map((tag) => (
              <span
                key={tag}
                className="text-xs md:text-sm bg-gray-100 hover:bg-[#FF6B35] hover:text-white transition-colors text-gray-700 px-3 py-1.5 rounded-full cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Author Box */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-gray-50 rounded-lg p-6 mt-10">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
              alt="Sarah Johnson"
              className="w-20 h-20 rounded-full object-cover flex-shrink-0"
            />
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-bold text-gray-900">Sarah Johnson</h4>
              <p className="text-sm text-gray-500 mb-2">Food Writer & Recipe Developer</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Sarah is a passionate home cook who loves sharing simple, delicious recipes that bring people
                together around the table.
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* Related Posts */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
                title: 'Classic Margherita Pizza Recipe',
                date: 'March 10, 2024',
              },
              {
                img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80',
                title: 'Fresh Summer Salad Ideas',
                date: 'March 5, 2024',
              },
              {
                img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80',
                title: 'Perfect Pancakes Every Time',
                date: 'February 28, 2024',
              },
            ].map((post, idx) => (
              <Link
                to="/single-post"
                key={idx}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="overflow-hidden h-48">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SinglePostNoSidebar;