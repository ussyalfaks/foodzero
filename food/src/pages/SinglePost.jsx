import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SinglePost = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="w-full">
        {/* Hero / Title Section */}
        <section className="bg-[#F9F9F9] py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="mb-6">
              <Link
                to="/blog"
                className="inline-block text-sm font-semibold uppercase tracking-wider text-[#E63946] hover:text-[#c92f3b] transition-colors"
              >
                Blog
              </Link>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#1D1D1D] leading-tight mb-8">
              The Art of Plating: How Presentation Elevates Every Dish
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-[#6B6B6B]">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#E63946] text-white flex items-center justify-center font-semibold text-xs">
                  JD
                </span>
                <span className="font-medium text-[#1D1D1D]">John Doe</span>
              </div>
              <span className="hidden sm:inline text-[#D0D0D0]">|</span>
              <span>March 15, 2024</span>
              <span className="hidden sm:inline text-[#D0D0D0]">|</span>
              <span className="text-[#E63946] font-medium">Food &amp; Recipes</span>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="container mx-auto px-4 max-w-5xl -mt-10 md:-mt-16">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80"
              alt="Featured dish presentation"
              className="w-full h-[280px] md:h-[520px] object-cover"
            />
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 max-w-3xl py-16 md:py-20">
          <article className="prose prose-lg max-w-none text-[#4A4A4A]">
            <p className="text-lg md:text-xl leading-relaxed mb-8 text-[#1D1D1D] font-medium">
              Great food is more than just flavor — it is an experience that engages all the
              senses. The way a dish is presented can transform a simple meal into a memorable
              moment, inviting diners to savor every bite before the first taste.
            </p>

            <p className="leading-relaxed mb-6">
              Plating is the art of arranging food on a plate in a way that is both visually
              appealing and appetizing. It is a skill that chefs spend years perfecting, balancing
              color, texture, and composition to create dishes that look as good as they taste.
              Whether you are a home cook or a professional chef, mastering the fundamentals of
              plating can elevate your culinary creations.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#1D1D1D] mt-12 mb-6">
              Start With a Clean Canvas
            </h2>
            <p className="leading-relaxed mb-6">
              The plate itself is the foundation of any presentation. Choose a plate that
              complements the colors of your food and leaves enough room for the dish to breathe.
              White plates are a classic choice because they allow the colors of the food to stand
              out, but don't be afraid to experiment with darker or textured plates for contrast.
            </p>

            <blockquote className="border-l-4 border-[#E63946] pl-6 my-10 italic text-xl text-[#1D1D1D]">
              "We eat with our eyes first. A beautifully plated dish sets the expectation for the
              flavors that follow."
            </blockquote>

            <h2 className="text-2xl md:text-3xl font-bold text-[#1D1D1D] mt-12 mb-6">
              Balance Color and Texture
            </h2>
            <p className="leading-relaxed mb-6">
              Color is one of the most powerful tools in plating. A dish that features a variety of
              vibrant colors is instantly more appealing than one that is monochromatic. Add pops
              of green with fresh herbs, red with tomatoes or peppers, and yellow with citrus zest
              or corn. Texture is equally important — combining creamy, crunchy, and tender
              elements creates a more interesting and satisfying eating experience.
            </p>

            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80"
              alt="Colorful plated salad"
              className="w-full rounded-xl my-10 object-cover h-[300px] md:h-[420px]"
            />

            <h2 className="text-2xl md:text-3xl font-bold text-[#1D1D1D] mt-12 mb-6">
              The Rule of Thirds
            </h2>
            <p className="leading-relaxed mb-6">
              Borrowing from photography, the rule of thirds is a simple yet effective guideline
              for plating. Imagine dividing your plate into a grid of nine equal sections and place
              the main component of your dish along one of the intersecting lines. This creates a
              sense of movement and visual interest, drawing the eye to the most important part of
              the dish.
            </p>

            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li>Keep portions balanced and avoid overcrowding the plate.</li>
              <li>Use negative space to frame the food and make it stand out.</li>
              <li>Garnish intentionally — every element should add flavor or visual value.</li>
              <li>Serve food at the right temperature to preserve texture and appeal.</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-[#1D1D1D] mt-12 mb-6">
              Practice Makes Perfect
            </h2>
            <p className="leading-relaxed mb-6">
              Like any skill, plating improves with practice. Take time to experiment with different
              arrangements, tools, and techniques. Study the work of professional chefs, and don't
              be afraid to make mistakes — every attempt teaches you something new about balance,
              proportion, and presentation.
            </p>

            <p className="leading-relaxed mb-6">
              Ultimately, the goal of plating is to enhance the dining experience and show respect
              for the ingredients you have prepared. When food is presented with care and
              intention, it communicates a sense of craftsmanship that diners can feel before they
              even pick up their forks.
            </p>
          </article>

          {/* Tags / Share */}
          <div className="mt-12 pt-8 border-t border-[#E5E5E5] flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-[#1D1D1D]">Tags:</span>
              {['Plating', 'Culinary', 'Food Art', 'Tips'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-[#F2F2F2] text-[#4A4A4A]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-[#1D1D1D]">Share:</span>
              {['Facebook', 'Twitter', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full bg-[#F2F2F2] text-[#4A4A4A] flex items-center justify-center text-xs font-semibold hover:bg-[#E63946] hover:text-white transition-colors"
                  aria-label={social}
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Author Box */}
        <section className="container mx-auto px-4 max-w-3xl pb-16">
          <div className="bg-[#F9F9F9] rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-20 h-20 rounded-full bg-[#E63946] text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
              JD
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-[#1D1D1D] mb-2">John Doe</h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                John is a passionate food writer and chef with over a decade of experience in the
                culinary world. He loves sharing tips on cooking, plating, and creating memorable
                dining experiences.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SinglePost;