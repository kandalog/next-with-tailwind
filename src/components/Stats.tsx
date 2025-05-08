import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiChevronRight } from "react-icons/bi";

const statsContent = {
  stats: [
    {
      number: "99.9%",
      label: "現役合格率",
    },
    {
      number: "3,912",
      label: "生徒数",
    },
    {
      number: "12.8",
      label: "偏差値上昇",
    },
  ],
  text: {
    title: "担当アドバイザーによるサポート",
    description: "学習の目的や目標に合わせてあなただけの目標を設定します",
    img: "/assets/illustration.svg",
  },
};

function Stats() {
  return (
    <section className="pt-20 pb-10">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center space-x-0">
          {/* 左 */}
          <div className="w-full lg:w-7/12 mb-20 lg:mb-0">
            <div className="grid grid-cols-3">
              {statsContent.stats.map((item, index) => (
                <div key={index} className="text-center lg:text-left">
                  <strong
                    className="text-green text-4xl xl:text-[52px]
                  font-bold block leading-tight"
                  >
                    {item.number}
                  </strong>
                  <span className="text-body">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 右 */}
          <div className="w-full lg:w-5/12">
            <div className="bg-light py-10 px-7 lg:px-10 !pr-28 md:!pr-3 lg:!pr-40 rounded-lg relative">
              <Image
                src={statsContent.text.img}
                width={100}
                height={200}
                alt="img"
                className="absolute right-0 lg:right-3 w-52 -top-3"
              />
              <h3 className="text-heading font-bold text-lg mb-3">
                {statsContent.text.title}
              </h3>
              <p className="text-body">{statsContent.text.description}</p>
              <Link
                href="/"
                className="flex space-x-2 outline-none items-center font-semibold text-green group"
              >
                <span>もっとみる</span>
                <span
                  className="w-6 h-6 rounded-full bg-green text-white items-center justify-center
                inline-flex duration-300 transition-all ease-in-out group-hover:bg-[#006e54]"
                >
                  <BiChevronRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
