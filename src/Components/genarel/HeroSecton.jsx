import HeroImage from '../../assets/hero-image.png'

export default function HeroSecton() {
  return (
    <section className="pb-[114px] pt-20 md:mt-[100px]">
      <div className="container lg:px-20">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div className="flex justify-center md:order-2">
            <img
              className="max-md:w-full rounded-lg"
              src={HeroImage}
              width="426"
              height="300"
              alt="hero-image"
            />
          </div>
          <div>
            <h1
              className="mb-1.5 text-[56px] font-bold leading-none text-[#F5BF42] lg:text-[73px]"
            >
              Task App
            </h1>
            <p className="text-lg my-2 opacity-60">
              Task App is a simple yet powerful application that helps organize
              and manage daily tasks efficiently. Users can add new tasks, mark
              completed ones, and track their progress with ease. A time management and boost
              productivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
