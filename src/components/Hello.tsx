import Image from "next/image";
import Link from "next/link";
import React from "react";

const heroContent = {
  text: {
    subTitle: "ORIGIN. Docゼミ",
    title: "ひとつ上を目指せる!",
    description: `ようこそ！ 未来のために、共に学び、成長しましょう。ORIGIN.Docゼミでは、
      生徒一人ひとりに合わせたカリキュラムで、確かな学力向上を目指します。私たちは教育のプロフェッショナルが揃い、
      生徒たちが自信を持ち、自ら考え、進んで学ぶ力を身につけられるようサポートしています。`,
  },
  images: {
    img1: "/assets/hero-img-1.jpg",
    img2: "/assets/hero-img-2.jpg",
    img3: "/assets/hero-img-3.jpg",
    img4: "/assets/hero-img-4.jpg",
    img5: "/assets/hero-img-5.jpg",
  },
};

function Hello() {
  return (
    <section>
      <div>
        <div>
          {/* 左 */}
          <div>
            <span>{heroContent.text.subTitle}</span>
            <h1>{heroContent.text.title}</h1>
            <p>{heroContent.text.description}</p>
            <div>
              <Link href="/">資料ダウンロード</Link>
              <Link href="/">申し込み</Link>
            </div>
          </div>

          {/* 右 */}
          <div>
            {/* 上の段 */}
            <div>
              <div>
                <Image
                  src={heroContent.images.img1}
                  width={397}
                  height={406}
                  alt="img1"
                />
              </div>
              <div>
                <div>
                  <div>
                    <Image
                      src={heroContent.images.img2}
                      width={437}
                      height={437}
                      alt="img2"
                    />
                  </div>
                  <div></div>
                </div>
                <div>
                  <Image
                    src={heroContent.images.img3}
                    width={374}
                    height={392}
                    alt="img3"
                  />
                </div>
              </div>
            </div>

            {/* 下の段 */}
            <div>
              <div>
                <div>
                  <div>
                    <Image
                      src={heroContent.images.img4}
                      width={394}
                      height={394}
                      alt="img4"
                    />
                  </div>
                </div>
                <div>
                  <Image
                    src={heroContent.images.img5}
                    width={446}
                    height={495}
                    alt="img5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hello;
