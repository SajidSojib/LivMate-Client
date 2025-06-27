import React from "react";
import Lottie from "lottie-react";
import faqAni from "../../assets/faqAni.json";
const Faq = ({questions}) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 space-y-1 lg:px-8 lg:py-20">
      <h1
        data-aos="zoom-in"
        className="text-4xl font-bold text-center text-primary"
      >
        Frequently Asked Questions
      </h1>
      <p
        data-aos="fade-up"
        className="mb-6 text-center w-3/4 mx-auto text-secondary mt-6"
      >
        Got questions? We've got answers. Explore some common queries about how
        to find, post, and manage roommate listings on our platform.
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="max-w-lg">
          <Lottie animationData={faqAni} loop={true} />
        </div>
        <div>
          <div data-aos="fade-up">
            {questions?.map((q) => (
              <div key={q.id}>
                <div className="collapse collapse-arrow bg-neutral border border-base-300">
                  {q.id == 1 ? (
                    <input type="radio" name="my-accordion-2" defaultChecked />
                  ) : (
                    <input type="radio" name="my-accordion-2" />
                  )}
                  <div className="collapse-title text-lg text-primary font-semibold">
                    {q.question}
                  </div>
                  <div className="collapse-content text-secondary">
                    {q.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
