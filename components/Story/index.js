export default function Story() {
  return (
    <section className="max-w-7xl mx-auto mt-28 ">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <img
          src="/img/story.png"
          alt="stryimage"
          className="w-full max-w-[612px] p-10"
        />
        <div className="text-black p-10">
          <h1 className="text-4xl font-bold whitespace-pre-line leading-relaxed">
            Win the battle.{'\n'} Be the Champion.
          </h1>
          <p className="text-lg  max-w-sm mt-5">
            Kami menyediakan jutaan cara untuk membantu players menjadi pemenang
            sejati
          </p>
          <button className="py-2 px-6 rounded-full bg-slate-300 mt-10">
            Read Story
          </button>
        </div>
      </div>
    </section>
  );
}
