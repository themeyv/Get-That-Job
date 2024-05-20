import Image from 'next/image';

export default function Hero(){
  return (
    <section className="text-center bg-gray-100 py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">The place where you get <p className='text-pink-400'>that</p>job</h1>
        <p className="text-xl mb-8">
          <p>With our Machine Learning algorithm you will get that job in no time</p> We promise you! Just give us the money and we will take care of it.
        </p>
        <button className="bg-pink-400 text-white px-8 py-2 rounded-lg">Create an account now</button>
        <div className="mt-8 flex justify-center">
          <Image src="src/svg/ai/Group 56.svg" alt="Hero Image" width={1062} height={350} />
        </div>
      </div>
    </section>
  );
};
