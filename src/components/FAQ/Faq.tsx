/* eslint-disable quotes */
import React from "react";

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

const Faq = () => (
  <div className="tw-pb-12 md:tw-pb-[80px] 2md:tw-pb-[128px] ">
    <div className="tw-grid tw-justify-center tw-gap-y-8 tw-gap-x-8 tw-px-4 tw-grid-cols-4 md:tw-gap-x-6 md:tw-grid-cols-8 lg:tw-p-x-8 lg:tw-grid-cols-12 xlalt:tw-gap-y-12 2xlalt:tw-gap-y-16 2xlalt:tw-grid-cols-[repeat(12,_84px)]">
      <section className="tw-col-span-4 md:tw-col-[1/span_8] lg:tw-col-[3/span_8] tw-block tw-text-white">
        <div>
          <h2>FREQUENTLY ASKED QUESTION</h2>
        </div>
        {faqBeatId.map((f) => (
          <div>
            <div>
              <article>
                <div>
                  <h3>{f.title}</h3>
                  <button type="button">
                    <i>^</i>
                  </button>
                </div>
                <div>
                  <p>{f.description}</p>
                </div>
              </article>
            </div>
          </div>
        ))}
      </section>
    </div>
  </div>
);

export default Faq;
