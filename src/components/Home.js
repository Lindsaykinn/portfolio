import image from "../bg-img.png";

export default function Home() {
  return (
    <main>
      <img src={image} alt="Future" className="absolute object-cover w-full h-full" />
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
        <h1 className='text-6xl cursive leading-none lg:leading-snug home-name'>Hi. I'm Lindsay.</h1>
      </section>
    </main>
  );
}
