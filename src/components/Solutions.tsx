"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css";

import { FaCheck } from "react-icons/fa";

const solutionsContent = {
  text: {
    subTitle: "絶対合格を可能にする",
    title: "良質な教材・添削",
    description:
      "各大学の出題傾向を分析して作成した、ハイグレードな教室オリジナル教材を使用。選び抜かれた良問に取り組むことで、難関大で求められる「思考力」「表現力」を伸ばします",
    features: [
      {
        title: "少人数制だからこそ可能な丁寧な指導",
      },
      {
        title: "選べる学習スタイル",
      },
      {
        title: "講師との距離が近く、質問しやすい",
      },
      {
        title: "静かで集中できる自習室も完備",
      },
    ],
  },
  images: {
    img1: "/assets/solution-img-1.jpg",
    img2: "/assets/solution-img-2.jpg",
    img3: "/assets/solution-img-3.jpg",
  },
  experience: {
    year: "20年",
    label: "支援されています",
  },
};

function Solutions() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);
  return (
    <section
      id="solutions"
      className="py-32 bg-light max-md:py-5 overflow-hidden"
    >
      <div className="container px-4 mx-auto flex">
        <div className="lg:flex space-x-2 justify-between max-md:flex max-md:flex-col">
          {/* 左 */}
          <div className="lg:w-6/12 relative mb-10 lg:mb-0 z-10 before:content-[' '] before:absolute before:right before:right-1/2 before:w-screen before:rounded-tr-[200px] before:z-[-1] before:rounded-br-3xl before:py-28 before:-top-20 before:bg-white before:-bottom-20 max-md:mt-28">
            <div className="flex gap-2">
              <div className="flex flex-col space-y-2">
                <Image
                  src={solutionsContent.images.img1}
                  width={626}
                  height={640}
                  alt="img1"
                  className="object-cover h-full w-full rounded-lg"
                  data-aos="fade-right"
                  data-aos-delay="200"
                />

                <div className="flex justify-end gap-2">
                  {/* 下の段 */}
                  <div className="w-4/12 flex">
                    <div className="ml-auto">
                      <div className="bg-yellowLight w-10 h-10 lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px] max-md:w-16 max-md:h-16" />
                    </div>
                  </div>
                  <div className="w-6/12">
                    <Image
                      src={solutionsContent.images.img3}
                      width={626}
                      height={640}
                      alt="img3"
                      className="object-cover h-full w-full rounded-lg"
                      data-aos="fade-left"
                      data-aos-delay="100"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                <div className="flex flex-col gap-2">
                  <div>
                    <div className="bg-purpleLight w-10 lg:w-20 lg:h-20 rounded-2xl rounded-tr-[200px] max-md:w-14 max-md:h-14" />
                  </div>
                  <div>
                    <Image
                      src={solutionsContent.images.img2}
                      width={547}
                      height={573}
                      alt="img2"
                      className="object-cover h-full w-full rounded-lg shadow-2xl"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    />
                  </div>
                  <div>
                    <div className="p-4 lg:p-10 shadow-2xl rounded-lg bg-white w-full leading-5">
                      <strong className="block font-bold text-green text-xl lg:text-5xl">
                        {solutionsContent.experience.year}
                      </strong>
                      <span>{solutionsContent.experience.label}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 右 */}
          <div className="lg:w-5/12 relative z-10 max-md:order-first">
            <span
              className="inline-block py-1 pl-3 text-heading font-semibold
            relative mb-7 before:content-[' '] before:absolute before:w-2/3 before:bg-pinkLight before:left-0 before:top-0
            before:bottom-0 before:-z-10"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {solutionsContent.text.subTitle}
            </span>
            <h2
              className="text-heading text-2xl lg:text-4xl font-bold mb-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {solutionsContent.text.title}
            </h2>
            <p
              className="text-body leading-relaxed mb-10"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {solutionsContent.text.description}
            </p>
            <ul
              className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 md:gap-5 mb-10"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              {solutionsContent.text.features.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex flex-grow items-center space-x-5"
                  >
                    <span className="w-7 h-7 rounded-full bg-green flex items-center justify-center">
                      <FaCheck className="text-white" />
                    </span>
                    <span>タイトル</span>
                  </li>
                );
              })}
            </ul>
            {/* ボタン */}
            <div
              className="flex space-x-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Link href={"/"} className="btnGreen">
                資料ダウンロード
              </Link>
              <Link href={"/"} className="btnBlue">
                申し込み
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
