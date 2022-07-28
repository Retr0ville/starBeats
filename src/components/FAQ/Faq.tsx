/* eslint-disable quotes */
import React, { useState } from "react";

const faqBeatId = [
  {
    title: "What is Beat ID?",
    description:
      "Never gonna make you cry, Never gonna say goodbye Never gonna tell a lie and hurt you, We've known each other for so long, Your heart's been aching, but you're too shy to say it.\nInside, we both know what's been going on, We know the game, and we're gonna play it And if you ask me how I'm feeling. Don't tell me you're too blind to see.",
  },
  {
    title: "Is Beat ID just for beats or can I upload my songs?",
    description:
      "Never gonna give you up, Never gonna let you down Never gonna run around and desert you, Never gonna make you cry Never gonna say goodbye, Never gonna tell a lie and hurt you.",
  },
  {
    title: "Where does Beat ID track your music?",
    description:
      "Never gonna give you up, Never gonna let you down Never gonna run around and desert you Never gonna make you cry \n Never gonna say goodbye, Never gonna tell a lie and hurt you.",
  },
  {
    title: "Who would benefit from using Beat ID?",
    description:
      "We've known each other for so long Your heart's been aching, but you're too shy to say it Inside, we both know what's been going on.",
  },
  {
    title: "How is Beat ID different from YouTube Content ID?",
    description:
      "I just wanna tell you how I'm feeling, Gotta make you understand Never gonna give you up Never gonna let you down Never gonna run around and desert you,Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you.",
  },
];

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState("");

  return (
    <div className="tw-pb-12 md:tw-pb-[80px] 2md:tw-pb-[128px] ">
      <div className="tw-grid tw-justify-center tw-gap-y-8 tw-gap-x-8 tw-px-4 tw-grid-cols-4 md:tw-gap-x-6 md:tw-grid-cols-8 lg:tw-p-x-8 lg:tw-grid-cols-12 xlalt:tw-gap-y-12 2xlalt:tw-gap-y-16 2xlalt:tw-grid-cols-[repeat(12,_84px)]">
        <section className="tw-col-span-4 md:tw-col-[1/span_8] lg:tw-col-[3/span_8] tw-block tw-text-white">
          <div>
            <h2 className="tw-text-[40px] tw-leading-[44px] tw-tracking-normal font-bebas tw-font-normal tw-text-white tw-text-left tw-p-0 tw-mb-8 2xlalt:tw-mb-20 2md:tw-text-center lg:tw-text-[62px] lg:tw-leading-[64px]">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>
          {faqBeatId.map((f) => (
            <div className="tw-mb-4">
              <div
                className={`tw-transition-all tw-duration-500 ${
                  activeFaq === f.title ? "tw-max-h-[400px]" : "tw-max-h-[58px]"
                } tw-bg-[#141414] tw-rounded-lg tw-w-full tw-overflow-hidden`}
              >
                <article className="tw-flex tw-flex-col">
                  <div
                    role="button"
                    tabIndex={-1}
                    onKeyDown={() => {}}
                    onClick={() => (
                      activeFaq === f.title
                        ? setActiveFaq("")
                        : setActiveFaq(f.title)
                    )}
                    className="tw-flex tw-items-center tw-justify-between tw-px-4 tw-cursor-pointer tw-h-[58px] "
                  >
                    <h3 className="tw-p-0 tw-m-0 tw-flex tw-items-center tw-text-white tw-text-[16px] tw-tracking-normal tw-leading-6 tw-font-medium">{f.title}</h3>
                    <button
                      className="tw-p-0 tw-m-0 tw-flex tw-items-center tw-text-white tw-text-xs tw-tracking-normal tw-leading-6 tw-font-medium tw-border-none tw-border-0 tw-w-auto tw-overflow-visible tw-bg-transparent tw-cursor-pointer"
                      type="button"
                    >
                      <i className={`tw-text-inherit tw-ml-2 tw-text-[16px] tw-transition-transform ${activeFaq === f.title ? 'tw-rotate-0' : 'tw-rotate-[-180deg]'}`}>^</i>
                    </button>
                  </div>
                  <div className="tw-p-4 ">
                    <p className="tw-text-[14px] tw-tracking-[.1px] tw-leading-5 tw-font-medium tw-text-[#9f9f9f] tw-whitespace-pre-line md:tw-text-[16px] md:tw-tracking-normal md:tw-leading-6">{f.description}</p>
                  </div>
                </article>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Faq;
