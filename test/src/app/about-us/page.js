import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
  <div className="absolute inset-0">
    <Image
      src="/Banner.jpg"
      alt="Restaurant Interior"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
  </div>
  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
      Our Story
    </h1>
    <p className="mt-4 text-lg text-amber-100">
      Discover the passion and tradition behind Naan Stop Wok, where East meets West in a culinary adventure.
    </p>
  </div>
  </div>

      {/* Content Sections */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-24">
          {/* Our Beginning */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Our Beginning</h2>
            <p className="mt-4 text-lg text-gray-600">
              Founded in March of 2024 by Dr Anwar Abdalbari, Naan Stop Wok began as a fusion experiment in a small food truck. Our unique blend of Indian and Chinese cuisines quickly gained a loyal following, leading to the opening of our first restaurant in August.
            </p>
          </div>

          {/* Our Philosophy */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Our Philosophy</h2>
            <p className="mt-4 text-lg text-gray-600">
              At Naan Stop Wok, we believe in the power of food to bring people together. We're committed to using fresh, locally-sourced ingredients and traditional cooking methods to create innovative dishes that honor both Indian and Chinese culinary traditions.
            </p>
          </div>

          {/* Our Chefs */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Chefs</h2>
            <div className="mt-6 grid gap-12 lg:grid-cols-2">
              {[
                {
                  name: "Mei Lin",
                  role: "Head Chef",
                  image: "/Mei.jpg",
                  bio: "With over 20 years of experience in Chinese cuisine, Chef Mei brings authentic flavors and innovative techniques to every dish."
                },
                {
                  name: "Sanjeev Kapoor",
                  role: "Head Chef",
                  image: "/Sanjeev.jpg",
                  bio: "Chef Sanjeev's expertise in Indian spices and traditional cooking methods adds depth and complexity to our fusion creations."
                }
              ].map((chef) => (
                <div key={chef.name} className="flex flex-col items-center text-center">
                  <Image
                    src={chef.image}
                    alt={chef.name}
                    width={200}
                    height={200}
                    className="rounded-full"
                  />
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">{chef.name}</h3>
                  <p className="text-sm text-orange-600">{chef.role}</p>
                  <p className="mt-2 text-base text-gray-600">{chef.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Come Taste the Fusion</h2>
          <p className="mt-4 text-xl text-gray-600">
            Experience the unique flavors of Naan Stop Wok for yourself.
          </p>
          <Link
            href="/reservations"
            className="mt-8 inline-flex items-center rounded-full bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-lg hover:bg-orange-700 transition-all hover:scale-105"
          >
            Book a Table
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

