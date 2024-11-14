"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { transition1 } from "@/app/transition";
import Link from "next/link";
import SnakeJSStartUI from "@/images/snake-js/start-ui.png";
import SnakeJSGameUI from "@/images/snake-js/game-ui.png";
import SnakeJSLv1 from "@/images/snake-js/lv1.png";
import SnakeJSLv2 from "@/images/snake-js/lv2.png";
import SnakeJSLv3 from "@/images/snake-js/lv3.png";
import SnakeJSLv4 from "@/images/snake-js/lv4.png";
import SnakeJSLv5 from "@/images/snake-js/lv5.png";

type Props = {};

export default function Blog({}: Props) {
  useEffect(() => {
    document.body.classList.add("overflow-x-hidden");
    document.body.classList.add("overflow-y-scroll");

    const header = document.querySelector("header");
    if (header) {
      header.classList.add("bg-white");
      header.classList.add("lg:bg-transparent");
      header.classList.add("lg:relative");
    }
    return () => {
      document.body.classList.remove("overflow-x-hidden");
      document.body.classList.remove("overflow-y-scroll");
      const header = document.querySelector("header");
      if (header) {
        header.classList.remove("bg-white");
        header.classList.remove("lg:bg-transparent");
        header.classList.remove("lg:relative");
      }
    };
  }, []);

  return (
    <motion.section
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
    >
      <div className="pt-36 lg:pt-5 bg-gray-100 min-h-screen flex items-center justify-center p-5">
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
          <div className="max-w-4xl bg-white rounded-lg shadow-lg p-6">
            {/* Phần I: Giới thiệu */}
            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-center mb-4">
                I. Giới thiệu
              </h2>
              <p className="text-lg">
                Snake – tựa game rắn săn mồi đã trở nên quá quen thuộc đối với
                chúng ta trong nhiều năm qua và đã trở thành một trong những trò
                chơi kinh điển trên điện thoại. Bắt đầu trò chơi, người chơi hóa
                thân thành một chú rắn đi săn mồi trên một màn chơi, khi đạt đủ
                số điểm sẽ qua màn chơi kế tiếp.
              </p>
            </section>

            {/* Phần II: Mô tả cách chơi */}
            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-center mb-4">
                II. Mô tả cách chơi
              </h2>

              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">1. Tổng quan</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Game có hai chế độ và năm mức độ khó.</li>
                  <li>
                    Chế độ chơi:
                    <ul className="list-inside list-circle">
                      <li>
                        “Level up” - Mục tiêu đạt số điểm để qua level cao hơn.
                      </li>
                      <li>
                        “Suvival” - Chế độ chơi sinh tồn, không có mục tiêu để
                        qua màn.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Giao diện game:
                    <ul className="list-inside list-circle">
                      <li>Màn hình bên trái là phần chính của game.</li>
                      <li>
                        Màn hình bên phải hiển thị các thông tin như màn chơi,
                        số điểm, số điểm mục tiêu.
                      </li>
                      <li>
                        Các nút hỗ trợ trò chơi bao gồm nút ngừng, tiếp tục, và
                        bật/tắt âm thanh.
                      </li>
                    </ul>
                  </li>
                </ul>
                <figure className="text-center">
                  <img
                    src={SnakeJSStartUI.src}
                    alt="Giao diện game bắt đầu"
                    className="p-4 min-h-[350px] lg:min-h-max"
                  />
                  <figcaption className="text-sm text-gray-500">
                    Giao diện game bắt đầu
                  </figcaption>
                </figure>

                <figure className="text-center">
                  <img
                    src={SnakeJSGameUI.src}
                    alt="Giao diện khi bắt đầu chơi"
                    className="p-4 min-h-[350px] lg:min-h-max"
                  />
                  <figcaption className="text-sm text-gray-500">
                    Giao diện khi bắt đầu chơi
                  </figcaption>
                </figure>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  2. Mô tả các màn chơi
                </h3>
                <p className="mb-4">
                  Khi chọn chế độ **Level up**, người chơi cần ăn thức ăn để
                  tăng điểm và qua màn. Các đối tượng trong game sẽ thay đổi qua
                  từng màn chơi, ảnh hưởng đến quá trình chơi của rắn.
                </p>
                <p>
                  Game có tối đa 5 level.Người chơi sẽ chiến thắng sau khi qua level 5
                </p>
              </div>
            </section>

            {/* Mô tả các level */}
            <section>
              {/* Level 1 */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">2.1. Level 1</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mục tiêu qua màn: 200 điểm.</li>
                  <li>
                    Gồm ba đối tượng: đầu rắn (snake head), thân rắn (snake
                    body), thức ăn (food).
                  </li>
                  <li>
                    Khi đầu rắn ăn thức ăn, nó sẽ dài thêm một đoạn, nếu đầu rắn
                    đụng phải thân thì sẽ chết.
                  </li>
                  <li>
                    Không có vật cản, khi đầu rắn đi đến ô cuối, nó sẽ xuất hiện
                    ở hướng ngược lại.
                  </li>
                </ul>
                <figure className="text-center">
                  <img
                    src={SnakeJSLv1.src}
                    alt="Giao diện game lv1"
                    className="p-4 min-h-[350px] lg:min-h-max"
                  />
                  <figcaption className="text-sm text-gray-500">
                  Giao diện game lv1
                  </figcaption>
                </figure>
              </div>

              {/* Level 2 */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">2.2. Level 2</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mục tiêu qua màn: 250 điểm.</li>
                  <li>
                    Xuất hiện đối tượng tường (wall). Khi đầu rắn đụng tường,
                    game kết thúc.
                  </li>
                </ul>
                <figure className="text-center">
                  <img
                    src={SnakeJSLv2.src}
                    alt="Giao diện game lv2"
                    className="p-4 min-h-[350px] lg:min-h-max"
                  />
                  <figcaption className="text-sm text-gray-500">
                  Giao diện game lv2
                  </figcaption>
                </figure>
              </div>

              {/* Level 3 */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">2.3. Level 3</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mục tiêu qua màn: 300 điểm.</li>
                  <li>
                    Thêm tường di chuyển (wall move). Khi đầu rắn chạm vào, game
                    kết thúc.
                  </li>
                  <li>
                    Thân rắn khi chạm vào tường di chuyển sẽ bay theo hướng
                    ngược lại.
                  </li>
                </ul>
                <figure className="text-center">
                  <img
                    src={SnakeJSLv3.src}
                    alt="Giao diện game lv3"
                    className="p-4 min-h-[350px] lg:min-h-max"
                  />
                  <figcaption className="text-sm text-gray-500">
                  Giao diện game lv3
                  </figcaption>
                </figure>
              </div>

              {/* Level 4 */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">2.4. Level 4</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mục tiêu qua màn: 350 điểm.</li>
                  <li>Thêm các item với các hiệu ứng đặc biệt.</li>
                </ul>
                <figure className="text-center">
                  <img
                    src={SnakeJSLv4.src}
                    alt="Giao diện game lv4"
                    className="p-4 min-h-[350px] lg:min-h-max"
                  />
                  <figcaption className="text-sm text-gray-500">
                  Giao diện game lv4
                  </figcaption>
                </figure>
              </div>

              {/* Level 5 */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">2.5. Level 5</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mục tiêu qua màn: 350 điểm.</li>
                  <li>
                    Thêm các cánh cổng dịch chuyển (door) cho phép rắn dịch
                    chuyển giữa các cổng vào và cổng ra.
                  </li>
                </ul>
                <figure className="text-center">
                  <img
                    src={SnakeJSLv5.src}
                    alt="Giao diện game lv5"
                    className="p-4 min-h-[350px] lg:min-h-max"
                  />
                  <figcaption className="text-sm text-gray-500">
                  Giao diện game lv5
                  </figcaption>
                </figure>
              </div>
            </section>

            {/* Phần III: Kết luận */}
            <section className="mt-8 text-center">
              <h2 className="text-3xl font-semibold mb-4">III. Kết luận</h2>
              <p className="text-lg">
                Tựa game Snake được phát triển trên nền tảng web, giúp người
                chơi có thể chơi nhanh chóng mà không cần tải về máy. Bạn có thể
                truy cập và chơi ngay tại:{" "}
                <a
                  href="https://luonghuuluan.github.io/SnakeJS/"
                  className="text-blue-500 underline"
                >
                  https://luonghuuluan.github.io/SnakeJS/
                </a>
                {" "}
                Source code:
                <a
                  href="https://github.com/LuongHuuLuan/SnakeJS.git"
                  className="text-blue-500 underline"
                >
                  https://github.com/LuongHuuLuan/SnakeJS.git
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
