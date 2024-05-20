import Image from "next/image";

export default function JobDescription(){
  return (
    <section className="bg-pink-400 text-white py-16">
    <div className="container mx-auto flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 p-8">
        <h2 className="text-3xl font-bold mb-4">Find your next job</h2>
        <p className="mb-4">
        Our Machine learning algorithm is so good that it’s even illegal in some countries. Join us to use our barelly legal algorithm that is actually a group of interns that work on our basement.
        </p>
        <p>
        We have a job for you, no matter your background or previous experience. Is sending random memes through chat your only skill? That’s ok, we got you, our Rock Star Meme Curator role is here for you.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center items-center p-8">
        <Image
          src="src/svg/ai/Group 54.svg"
          alt="Job search"
          width={200}
          height={200}
        />
      </div>
    </div>
  </section>
  );
};

