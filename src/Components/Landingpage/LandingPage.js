import React from 'react'
import "./LandingPage.css"
import { Link , useLocation} from 'react-router-dom'



export const LandingPage = () => {
  return (
    <div className='body'>
      

{/* 1st section */}
      <section className="section1 w-full py-6 md:py-12 lg:py-20 xl:py-24">
        <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter lg:text-6xl/none">
              Find a Gym Near You
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Enter your location to find nearby gyms. Whether you're looking for a
              traditional gym, a CrossFit box, or a yoga studio, we've got you
              covered.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex flex-col gap-2">
              <input
                type="text"
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 h-10"
                placeholder="Enter your location"
              />
              <Link to={'/register'}>
              <button
                className="btn w-full"
                type="submit"
                
                
              >
                Search
              </button>
              </Link>
             
            </form>
          </div>
        </div>
      </section>

    {/* section 2 */}
      <section class="w-full py-12  md:py-24 section2 rounded-3xl">
      <div class="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
        <div class="space-y-4">
          <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Gyms</h2>
          <p class="text-gray-500 dark:text-gray-400">The best gyms in your area, hand-picked by our team.</p>
        </div>
        <div class="grid gap-4 sm:gap-6 md:gap-8">

          <div class="rounded-lg border bg-card text-card-foreground shadow-sm " data-v0-t="card">
            <div class="grid items-center gap-4 sm:grid-cols-[1fr_200px] dark:bg-gray">
              <div class="p-4">
                <h3 class="text-xl font-bold ">Muscle Beach Gym</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">123 Ocean Drive, Santa Monica, CA</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  A historic outdoor gym known for its beachfront location and bodybuilding history.
                </p>
              </div>
              <div class="flex items-center justify-center p-4">
                <a
                  class="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-black px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="www.google.com"
                  rel="ugc"
                  
                >
                  View Gym
                </a>
              </div>
            </div>
          </div>
          
          <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div class="grid items-center gap-4 sm:grid-cols-[1fr_200px]">
              <div class="p-4">
                <h3 class="text-xl font-bold">Iron Temple CrossFit</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">456 Main Street, Anytown, USA</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  A high-intensity functional fitness gym with certified coaches and a supportive community.
                </p>
              </div>
              <div class="flex items-center justify-center p-4">
                <a
                  class="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-black
                  px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="www.google.com"
                  rel="ugc"
                >
                  View Gym
                </a>
              </div>
            </div>
          </div>
          <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div class="grid items-center gap-4 sm:grid-cols-[1fr_200px]">
              <div class="p-4">
                <h3 class="text-xl font-bold">Zen Yoga Studio</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">789 Serenity Lane, Tranquility, CA</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  A peaceful oasis for yoga and meditation, offering a range of classes for all levels.
                </p>
              </div>
              <div class="flex items-center justify-center p-4">
                <a
                  class="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-black px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="www.google.com"
                  rel="ugc"
                >
                  View Gym
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* section 3 */}

    <section className="w-full py-12 md:py-24">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Find the Perfect Gym for You
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Whether you're looking for a gym with state-of-the-art equipment, a boutique fitness studio with
                personalized classes, or a place with a friendly community, we've got you covered.
              </p>
            </div>
          </div>
        </section>

        {/* section 4 */}

        <section className="w-full py-3 md:py-24 ">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Live Yoga Classes</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join our live yoga classes from the comfort of your home. Stay active and healthy with our experienced
                instructors.
              </p>
            </div>
          </div>
          <div className='section4'></div>
        </section>


        {/* section 5 */}

  <section className="w-full py-12 md:py-24 ">
    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Contact Gym Owners 
        </h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Connect with gym owners to inquire about memberships, classes, and
          more. Start your fitness journey today!
        </p>
      </div>
    </div>
  </section>


  <section className="w-full py-12 md:py-24 bg-gray-100 dark:bg-gray-200 section5">
    <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Gym Owner Marketplace
        </h2>
        <p className="text-gray-500 dark:text-gray-600">
          Gym owners can list their products and services for sale on our
          platform. Reach a wider audience and grow your business.
        </p>
      </div>
      <div className="grid gap-4 sm:gap-6 md:gap-8">
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <div className="grid items-center gap-4 sm:grid-cols-[1fr_200px] sec-8">
            <div className="p-4">
              <h3 className="text-xl sec-9 font-bold">INCLINE BENCH PRESS</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
              The bench press is not seen as a functional form of fitness, so it’s not mandatory for most athletes to use. However, if your sole intention is bodybuilding, this is a great form of gym equipment to help you build muscle around your chest.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-100">
                Price: $300
              </p>
            </div>
            <div className="flex items-center justify-center p-4">
              <a
                className="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-black px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="www.google.com"
                
              >
                View Product
              </a>
            </div>
          </div>
        </div>
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <div className="grid items-center gap-4 sm:grid-cols-[1fr_200px]  sec-8">
            <div className="p-4">
              <h3 className="text-xl sec-9  font-bold">SEATED DIP MACHINE</h3>
              <p className="text-sm text-gray-00 dark:text-gray-400">
              Fancy a tricep burner? The seated dip machine allows you to enjoy all the benefits of normal bench dips but using a machine that will prevent you from losing your form and balance. You get to sit upright and use your triceps to push the weights down and back up again. It’s a great dip station.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-100">
                Price: $700
              </p>
            </div>
            <div className="flex items-center justify-center p-4">
              <a
                className="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-black px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="www.google.com"
                
              >
                View Product
              </a>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </section>

  <div className="my-5">
    <footer className="sec-10 text-center">
      <div className="p-4 pb-0">
        <section className="">
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              <div className="col-md-5 col-12">
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form5Example2"
                    className="form-control"
                    placeholder='Email Address'
                  />
                </div>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn mb-2">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © 2024 Copyright:
        <a className="text-dark" href="https://mdbootstrap.com/">
          GymLocator Pro
        </a>
      </div>
    </footer>
  </div>



  

</div>
  )
}
