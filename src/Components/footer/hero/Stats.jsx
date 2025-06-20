import React from "react";
import CountUp from "react-countup";

const Stats = ({ data }) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 row-gap-8 lg:grid-cols-3">
        {data.map((d) => (
          <div key={d.id}>
            <div className="flex">
              <h6 className="mr-2 text-4xl font-bold md:text-5xl text-primary">
                <CountUp
                  key={d.id}
                  start={0}
                  end={d.stat}
                  duration={3}
                  delay={0}
                  decimals={1}
                  decimal="."
                  suffix=" k+"
                  enableScrollSpy
                ></CountUp>
              </h6>
              <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 text-3xl h-7">
                {d.icon}
              </div>
            </div>
            <p className="mb-2 font-bold md:text-lg text-primary">{d.label}</p>
            <p className="text-secondary">{d.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
