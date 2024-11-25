import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen bg-amber-50">
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/banner.jpg"
            alt="Contact Naan Stop Wok"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-gray-100">
              We'd love to hear from you! Feel free to reach out.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <section className="py-16 bg-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Whether it's a question, feedback, or a reservation, we’re here to help.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white shadow-xl p-6 text-center transition-all hover:shadow-2xl">
              <h3 className="text-xl font-bold text-gray-900">Visit Us</h3>
              <p className="mt-2 text-gray-600">
                123 Flavor Street <br /> Fusion City, AS 56789
              </p>
            </div>

            <div className="rounded-2xl bg-white shadow-xl p-6 text-center transition-all hover:shadow-2xl">
              <h3 className="text-xl font-bold text-gray-900">Call Us</h3>
              <p className="mt-2 text-gray-600">
                <a href="tel:+1234567890" className="text-orange-600 hover:text-orange-700">
                  +1 (234) 567-890
                </a>
              </p>
            </div>

            <div className="rounded-2xl bg-white shadow-xl p-6 text-center transition-all hover:shadow-2xl">
              <h3 className="text-xl font-bold text-gray-900">Email Us</h3>
              <p className="mt-2 text-gray-600">
                <a href="mailto:info@naanstopwok.com" className="text-orange-600 hover:text-orange-700">
                  info@naanstopwok.com
                </a>
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-white shadow-xl p-6 text-center transition-all hover:shadow-2xl">
            <h3 className="text-xl font-bold text-gray-900">Business Hours</h3>
            <p className="mt-2 text-gray-600">
              Monday - Friday: 11:00 AM - 10:00 PM <br />
              Saturday - Sunday: 12:00 PM - 11:00 PM
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
