const Home: React.FC = () => {
  const years = ["2024", "2023", "2022"];

  const projects = [
    {
      name: "GameGrid",
      desc: "A mobile app where you can review video games from a variety of platforms.",
      year: 2024,
      tags: ["Flutter", "Dart"],
      imgSrc: "",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-orange-100/40 text-black/85">
        <div className="mx-auto max-w-7xl">
          {/*Title*/}
          <div className="pb-4 border-b border-neutral-300 text-right text-7xl font-extrabold tracking-wide">
            PERSONAL EXPERIENCE
          </div>

          <div className="flex min-h-screen">
            {/*Index column*/}
            <div className="w-1/3 pr-24 border-r border-neutral-300">
              <div className="flex flex-col gap-y-8">
                <div className="mt-24 font-bold text-4xl">Index</div>

                <div>
                  <span className="">BY YEAR:</span>

                  {years.map((year, index) => (
                    <div className="mt-2 flex items-center">
                      <div className="w-1/3">/0{index}</div>
                      <div className="w-2/3 text-lg font-semibold underline underline-offset-4">
                        {year}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/*Content column*/}
            <div className="w-2/3 pl-24 pt-24 flex gap-y-8">
              {projects.map((project, index) => (
                <></>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
