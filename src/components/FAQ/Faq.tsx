/* eslint-disable quotes */
import React, { useState } from "react";

const faqBeatId = [
  {
    title: "What is Beat ID?",
    description:
      "Beat ID is a revolutionary content identification system that empowers creators with data and information regarding where and how their copyrights are being used across the social web.\nYou are able to upload a track and we’ll scan social platforms including YouTube, Facebook, Twitch, Instagram, Reddit, TikTok, and many more. We’ll then link you to every place it appears on these platforms.",
  },
  {
    title: "Is Beat ID just for beats or can I upload my songs?",
    description:
      "You are able to upload both songs and beats to Beat ID. Beat ID will scan the social web for uses of both types of content.",
  },
  {
    title: "Where does Beat ID track your music?",
    description:
      "Beat ID will be able to find uses of your beats/songs on YouTube, Apple Podcasts, Audiomack, Dailymotion, TikTok, Instagram, Spotify Podcasts, Twitter, Datpiff, Facebook, Gfycat, Giphy, Imgur, LiveLeak, MixCloud, My Mixtapez, Oddshot, OK, Pear-video, Reddit, Soundcloud, Streamable, Tenor, Triller, Twitch, Twitch Clips, Vimeo, VK",
  },
  {
    title: "Who would benefit from using Beat ID?",
    description:
      "Music producers, recording artists, record labels, music publishers, and anyone who owns music copyrights would benefit from using Beat ID.",
  },
  {
    title: "How is Beat ID different from YouTube Content ID?",
    description:
      "While YouTube Content ID only checks for uses of your tracks on YouTube, Beat ID scans the entire social web, including YouTube, and provides you with links to show you where your music is being used.",
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
                className={`tw-transition-all tw-duration-1000 ${
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
