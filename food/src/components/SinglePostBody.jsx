import authorAvatar from "../assets/portfiolioImages/PreviousNext.png";
import heroImage from "../assets/portfiolioImages/PreviousNext.png";

const SinglePostBody = () => {
  return (
    <div className="w-full overflow-hidden bg-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Post meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-[#606C38]">
          <div className="flex items-center gap-2">
            <img
              src={authorAvatar}
              alt="Mark Joe"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-semibold text-[#233000]">Mark Joe</span>
          </div>
          <span className="hidden sm:inline">|</span>
          <span>October 17, 2021</span>
          <span className="hidden sm:inline">|</span>
          <span>3:33 pm</span>
          <span className="hidden sm:inline">|</span>
          <span>2 Comments</span>
        </div>

        {/* Title */}
        <h1 className="mt-6 font-serif text-3xl md:text-4xl text-[#233000] leading-snug">
          Fruit and vegetables and protection against diseases
        </h1>

        {/* Featured image */}
        <div className="mt-8 w-full">
          <img
            src={heroImage}
            alt="Fruit and vegetables"
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
        </div>

        {/* Article content */}
        <article className="mt-10 space-y-6 text-[#606C38] leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <h2 className="font-serif text-2xl text-[#233000]">
            Why fruit and vegetables matter
          </h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <blockquote className="border-l-4 border-[#495E1E] pl-4 italic text-[#495E1E]">
            &ldquo;A diet rich in fruit and vegetables is one of the simplest
            ways to protect your health.&rdquo;
          </blockquote>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </article>

        {/* Previous / Next navigation */}
        <div className="mt-12">
          <img
            src={heroImage}
            alt="Previous and next posts"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SinglePostBody;
