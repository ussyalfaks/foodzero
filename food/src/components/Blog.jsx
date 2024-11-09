import { ArrowRight } from "lucide-react"
import Featuresimg from "../assets/Feature.png"
import Featuresimg1 from "../assets/Feature1.png"
import Avatar from "../assets/main.jpg"
import Avatar1 from "../assets/main1.jpg"



export default function Blog() {
  const posts = [
    {
      image:  Featuresimg ,
      category: "Fashion",
      author: {
        name: "Mark Joe",
        avatar: Avatar,
      },
      date: "October 17,2021",
      time: "3:33 pm",
      comments: 2,
      title: "Fruit and vegetables and protection against diseases",
      description:
        "Discover how a diet rich in fruits and vegetables can boost your immune system and help protect against various diseases naturally.",
    },
    {
      image: Featuresimg1,
      category: "Fashion",
      author: {
        name: "John Russell",
        avatar: Avatar1,
      },
      date: "October 17,2021",
      time: "3:33 pm",
      comments: 2,
      title: "Asparagus Spring Salad with Rocket, Goat's Cheese",
      description:
        "A fresh and vibrant spring salad featuring crisp asparagus, peppery rocket, and creamy goat's cheese - perfect for seasonal dining.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post, index) => (
          <article key={index} className="group relative">
            <div className="relative h-auto w-full overflow-hidden rounded-lg">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                
              />
              <div className="absolute right-4 top-4">
                <span className="rounded bg-[#606C38] px-4 py-1 text-sm text-white">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="mt-4 flex items-center space-x-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>{post.author.name}</span>
                <span>•</span>
                <time dateTime={post.date}>{post.date}</time>
                <span>•</span>
                <time>{post.time}</time>
                <span>•</span>
                <span>{post.comments} comments</span>
              </div>
            </div>
            <h2 className="mt-4 text-2xl font-bold">{post.title}</h2>
            <p className="mt-2 text-muted-foreground">{post.description}</p>
            <div
              href="#"
              className="mt-4 cursor-pointer inline-flex items-center space-x-2 text-sm font-medium text-primary"
            >
              <span>Read More</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}