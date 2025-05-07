"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { IoClose } from "react-icons/io5";
import { BiChevronRight } from "react-icons/bi";
import { HiMiniBars3 } from "react-icons/hi2";

const navigationMenu = [
  {
    href: "#home",
    label: "ホーム",
  },
  {
    href: "#services",
    label: "サービス",
  },
  {
    href: "#solutions",
    label: "ソリューション",
  },
  {
    href: "#testimonials",
    label: "カスタマー",
  },
  {
    href: "#blog",
    label: "ブログ・ニュース",
  },
];

function Navigation() {
  const [navOpen, setNavOpen] = useState(false);

  const mobileMenuHandler = () => {
    setNavOpen(!navOpen);
  };

  // 1024px以上でモバイルメニューを閉じる
  const [mobile, setMobile] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setMobile({
        height: window.innerHeight,
        width: window.innerWidth,
      });

      if (mobile.width >= 1024 && navOpen) {
        setNavOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobile.width, navOpen]);

  return (
    <>
      {/* WEBメニュー */}
      <header className="py-7">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between">
            {/* ロゴ */}
            <div>
              <Link href="/">
                <Image
                  src="/assets/logo.png"
                  width={90}
                  height={60}
                  alt="ロゴ"
                />
              </Link>
            </div>
            {/* メニュー */}
            <div className="hidden lg:block text-center">
              <ul className="flex space-x-7">
                {navigationMenu.map((item) => (
                  <li key={item.href} className="text-body">
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* ボタン */}
            <div>
              <Link
                className="btnBlue inline-flex max-lg:hidden lg:inline-block"
                href="/"
              >
                申し込み
              </Link>
              {/* モバイル用 */}
              <button className="block lg:hidden" onClick={mobileMenuHandler}>
                <HiMiniBars3 className="text-4xl" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* モバイルメニュー */}
      <div className={navOpen ? "py-0 block w-screen z-[999]" : "hidden"}>
        <div
          className="h-screen w-screen z-[999] top-0 fixed bg-black/50"
          onClick={mobileMenuHandler}
        >
          <div className="h-screen bg-white w-[380px] top-0 right-0 z-[999] fixed">
            <div className="h-14 px-10 border-b flex items-center">
              <button
                className="flex items-center space-x-3"
                onClick={mobileMenuHandler}
              >
                <IoClose />
                <span>閉じる</span>
              </button>
            </div>
            <div className="h-full py-3 px-10 pb-20">
              <ul className="block mb-7">
                {navigationMenu.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="group flex items-center py-2 duration-300 transition-all ease-out hover:text-green"
                      onClick={() => setNavOpen(false)}
                    >
                      <span>{item.label}</span>
                      <span className="relative left-2 duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                        <BiChevronRight className="text-xl" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
