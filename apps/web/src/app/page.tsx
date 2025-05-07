import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Find the best services for your needs
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Connect with trusted professionals and businesses in your area. From home services to professional expertise, find everything you need in one place.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/services"
                    className="btn-primary"
                  >
                    Browse Services
                  </Link>
                  <Link
                    href="/register"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Become a Provider <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A complete marketplace solution
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform provides all the tools and features you need to connect with service providers and customers.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    name: 'Secure Payments',
    description: 'Safe and secure payment processing with multiple payment methods and escrow protection.',
  },
  {
    name: 'Verified Providers',
    description: 'All service providers are verified and rated by the community to ensure quality.',
  },
  {
    name: 'Real-time Chat',
    description: 'Communicate directly with service providers through our built-in messaging system.',
  },
] 