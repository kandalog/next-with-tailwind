import Image from "next/image";
import Link from "next/link";
import React from "react";
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
              <Link className="btnBlue inline-flex lg:inline-block" href="/">
                申し込み
              </Link>
              {/* モバイル用 */}
              <button className="block lg:hidden">
                <HiMiniBars3 className="text-4xl" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* モバイルメニュー */}
    </>
  );
}

export default Navigation;
