import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Menu } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Banner.jpg?height=800&width=1600"
            alt="Restaurant Ambiance"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Welcome to
              <span className="block text-orange-400">Naan Stop Wok!</span>
            </h1>
            <p className="mt-4 text-xl text-gray-100">
              Savor the fusion of Asian cuisine, prepared fresh daily with love and tradition.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href="/menu"
                className="inline-flex items-center rounded-full bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-lg hover:bg-orange-700 transition-all hover:scale-105"
              >
                View Menu
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/reservations"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-base font-medium text-orange-600 shadow-lg hover:bg-gray-50 transition-all hover:scale-105"
              >
                Book a Table
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Specials Section */}
      <section className="py-16 bg-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Specials
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover our chef's carefully crafted signature dishes
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Butter Chicken Thali",
                description: "Experience a flavor explosion with our Butter Chicken! Succulent, spiced chicken simmered in a velvety, creamy tomato sauce, served with warm naan and fluffy basmati rice.",
                price: "$18.99",
                image: "/ButterChicken.jpg?height=300&width=400"
              },
              {
                name: "Mapo Tofu Dish",
                description: "Savor the bold flavors of our Mapo Tofu! Silken tofu simmered in a spicy, aromatic sauce made with savory minced meat and Sichuan peppercorns.",
                price: "$16.99",
                image: "/MapoTofu.jpg?height=300&width=400"
              },
              {
                name: "Fusion Noodle Bowl",
                description: "Our signature noodle bowl combines the best of both worlds with hand-pulled noodles, aromatic spices, and fresh vegetables.",
                price: "$17.99",
                image: "/Noodles.jpg?height=300&width=400"
              }
            ].map((dish) => (
              <div
                key={dish.name}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    width={400}
                    height={244}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{dish.name}</h3>
                  <p className="mt-2 text-gray-600 line-clamp-3">{dish.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-orange-600">{dish.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

