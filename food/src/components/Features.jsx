import { Fish, Carrot, Citrus } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Fish,
      title: "Premium Quality",
      description:
        "We source only the finest ingredients and products, ensuring every item meets our high standards of excellence.",
    },
    {
      icon: Carrot,
      title: "Seasonal Vegetables",
      description:
        "Fresh, locally sourced vegetables that change with the seasons, bringing you nature's best at the perfect time.",
    },
    {
      icon: Citrus,
      title: "Fresh Fruit",
      description:
        "Hand-picked, perfectly ripe fruits delivered daily to guarantee maximum freshness and flavor in every bite.",
    },
  ]

  return (
    <div className="container px-4 py-24 mx-auto">
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-44 h-44 mb-4 rounded-full bg-[#EBF0E4]">
              <feature.icon className="w-24 h-24" />
            </div>
            <h3 className="mb-2 text-2xl font-semibold font-serif">{feature.title}</h3>
            <p className="">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}