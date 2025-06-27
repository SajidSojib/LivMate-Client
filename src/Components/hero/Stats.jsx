import React from "react";
import CountUp from "react-countup";
import { useNavigation } from "react-router";
const Stats = ({ data }) => {
  const navigation = useNavigation();

  if (navigation.state === "loading")
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mb-18">
      <h1
        data-aos="zoom-in"
        className="text-4xl font-bold text-center text-primary"
      >
        Our Growing Community in Numbers
      </h1>
      <p
        data-aos="fade-up"
        className="mt-6 mb-14 text-center text-secondary w-3/4 mx-auto"
      >
        See how our platform is helping people connect, find the perfect
        roommates, and build better shared living experiences every day.
      </p>
      <div className="grid gap-10 row-gap-8 lg:grid-cols-3">
        {data?.map((d) => (
          <div key={d?.id} data-aos="fade-up">
            <div className="flex">
              <CountUp
                key={d?.id}
                start={0}
                end={d?.stat}
                duration={3}
                delay={0}
                decimals={1}
                decimal="."
                suffix=" k+"
                enableScrollSpy
              >
                {({ countUpRef }) => (
                  <h6 ref={countUpRef} className="mr-2 text-4xl font-bold md:text-5xl text-primary"></h6>
                )}
              </CountUp>
              <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 text-3xl h-7">
                {d?.icon}
              </div>
            </div>
            <p className="mb-2 font-bold md:text-lg text-primary">{d?.label}</p>
            <p className="text-secondary">{d?.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
