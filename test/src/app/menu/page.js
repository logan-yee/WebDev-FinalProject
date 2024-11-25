import Image from 'next/image'

const menuItems = [
  {
    category: "Appetizers",
    items: [
      { name: "Spring Rolls", description: "Crispy rolls stuffed with vegetables and spices", price: "$7.99" },
      { name: "Paneer Satay", description: "Skewered paneer grilled with tandoori spices", price: "$9.99" },
    ],
  },
  {
    category: "Mains",
    items: [
      { name: "Butter Chicken Ramen", description: "Fusion of classic butter chicken with ramen noodles", price: "$15.99" },
      { name: "Spicy Szechuan Naan Tacos", description: "Szechuan-spiced fillings in soft naan shells", price: "$13.99" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Mango Kulfi", description: "Creamy mango-flavored Indian ice cream", price: "$5.99" },
      { name: "Matcha Cheesecake", description: "Rich cheesecake with a hint of matcha", price: "$6.99" },
    ],
  },
];

export default function Menu() {
  return (
    <div className="min-h-screen bg-amber-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">Our Menu</h2>
          <p className="mt-4 text-lg text-gray-600">Explore our carefully crafted fusion dishes</p>
        </div>
        <div className="mt-12 space-y-16">
          {menuItems.map((section) => (
            <div key={section.category}>
              <h3 className="text-3xl font-bold text-orange-600">{section.category}</h3>
              <div className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-900">{item.name}</h4>
                      <p className="mt-2 text-gray-600">{item.description}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-lg font-bold text-orange-600">{item.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
