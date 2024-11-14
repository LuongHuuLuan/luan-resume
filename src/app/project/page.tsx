"use client";
import React from "react";
import { motion } from "framer-motion";
import { transition1 } from "@/app/transition";
import Link from "next/link";

type Props = {};

export default function Blog({}: Props) {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
    >
      {/* text and image wrapper */}
      <div className="container mx-auto h-full relative">
        <div className="justify-center items-center h-full">
          {/* text */}
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 absolute top-[140px] w-full">
            <motion.div
              className="pt-4 lg:pt-14 flex flex-col items-center"
              initial={{ opacity: 0, y: "-50%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-50%" }}
              transition={transition1}
            >
              <h1 className="h1">Blog</h1>
            </motion.div>

            <motion.div
              className="overflow-y-scroll h-[calc(100vh-40vh)] lg:h-[calc(100vh-140px)]"
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={transition1}
            >
              <div className="max-w-4xl mx-auto p-4 w-full">
                <section className="bg-white shadow-md rounded-lg p-6 mb-6">
                  <h2 className="text-2xl font-semibold mb-4 hover:underline hover:text-blue-700">
                    <Link href={"/blog/Bat-dau-voi-nextjs-huong-dan-chi-tiet-cho-nguoi-moi-bat-dau"}>
                      Blog 1: Bắt đầu với Next.js - Hướng dẫn chi tiết cho người
                      mới bắt đầu
                    </Link>
                  </h2>
                  <p>
                    Next.js là một framework mạnh mẽ dựa trên React, được thiết
                    kế để giúp bạn xây dựng các ứng dụng web tĩnh và động một
                    cách dễ dàng. Trong bài viết này, chúng ta sẽ khám phá các
                    bước cơ bản để bắt đầu với Next.js, từ cài đặt đến triển
                    khai ứng dụng đầu tiên của bạn.
                  </p>
                </section>
                <section className="bg-white shadow-md rounded-lg p-6 mb-6">
                  <h2 className="text-2xl font-semibold mb-4 hover:underline hover:text-blue-700">
                    <Link href={"/"}>
                      Blog 2: Tối ưu hóa SEO cho các ứng dụng Next.js
                    </Link>
                  </h2>
                  <p>
                    SEO (Search Engine Optimization) là một yếu tố quan trọng
                    đối với bất kỳ trang web nào. Với Next.js, bạn có thể dễ
                    dàng tối ưu hóa SEO nhờ vào tính năng render phía máy chủ và
                    các công cụ tích hợp. Bài viết này sẽ giới thiệu các phương
                    pháp tối ưu hóa SEO cho ứng dụng Next.js của bạn.
                  </p>
                </section>
                <section className="bg-white shadow-md rounded-lg p-6 mb-6">
                  <h2 className="text-2xl font-semibold mb-4 hover:underline hover:text-blue-700">
                    <Link href={"/"}>
                      Blog 3: Sử dụng API Routes trong Next.js để xây dựng API
                      mạnh mẽ
                    </Link>
                  </h2>
                  <p>
                    API Routes là một tính năng mạnh mẽ của Next.js, cho phép
                    bạn xây dựng các API endpoint trực tiếp trong ứng dụng của
                    mình. Trong bài viết này, chúng ta sẽ khám phá cách tạo và
                    sử dụng API Routes để xây dựng một API mạnh mẽ với Next.js.
                  </p>
                </section>
                <section className="bg-white shadow-md rounded-lg p-6 mb-6">
                  <h2 className="text-2xl font-semibold mb-4 hover:underline hover:text-blue-700">
                    <Link href={"/"}>
                      Blog 4: Bắt đầu với ASP.NET Core - Hướng dẫn chi tiết cho
                      người mới bắt đầu
                    </Link>
                  </h2>
                  <p>
                    ASP.NET Core là một framework mã nguồn mở, hiệu năng cao để
                    xây dựng các ứng dụng web hiện đại và dịch vụ. Trong bài
                    viết này, chúng ta sẽ tìm hiểu cách bắt đầu với ASP.NET
                    Core, từ cài đặt môi trường đến tạo và chạy ứng dụng đầu
                    tiên.
                  </p>
                </section>
                <section className="bg-white shadow-md rounded-lg p-6 mb-6">
                  <h2 className="text-2xl font-semibold mb-4 hover:underline hover:text-blue-700">
                    <Link href={"/"}>
                      Blog 5: Xây dựng JWT Authentication với ASP.net core 8.0
                    </Link>
                  </h2>
                  <p>
                    Xác thực là một phần không thể thiếu của bất kỳ ứng dụng web
                    nào. JSON Web Tokens (JWT) là một phương pháp phổ biến để
                    thực hiện xác thực cho các ứng dụng web và di động. Trong
                    bài viết này, chúng ta sẽ tìm hiểu cách tích hợp JWT
                    authentication vào asp.net core 8.0 để xây dựng một API xác
                    thực mạnh mẽ.
                  </p>
                </section>
                <section className="bg-white shadow-md rounded-lg p-6 mb-6">
                  <h2 className="text-2xl font-semibold mb-4 hover:underline hover:text-blue-700">
                    <Link href={"/"}>
                      Blog 6: Bắt đầu với Django - Hướng dẫn chi tiết cho người
                      mới bắt đầu
                    </Link>
                  </h2>
                  <p>
                    Django là một framework web mạnh mẽ và linh hoạt cho phép
                    bạn xây dựng các ứng dụng web phức tạp một cách dễ dàng.
                    Trong bài viết này, chúng ta sẽ xây dựng một ứng dụng blog
                    đơn giản với Django, từ việc thiết kế mô hình dữ liệu đến
                    triển khai ứng dụng.
                  </p>
                </section>
                <section className="bg-white shadow-md rounded-lg p-6 mb-6">
                  <h2 className="text-2xl font-semibold mb-4 hover:underline hover:text-blue-700">
                    <Link href={"/"}>
                      Blog 7: Bắt đầu với Angular - Hướng dẫn chi tiết cho người
                      mới bắt đầu
                    </Link>
                  </h2>
                  <p>
                    Angular là một framework phát triển ứng dụng web mạnh mẽ do
                    Google phát triển. Nó giúp tạo ra các ứng dụng web đơn trang
                    (Single Page Applications - SPA) hiệu quả và dễ bảo trì.
                    Trong bài viết này, chúng ta sẽ đi qua các bước cơ bản để
                    bắt đầu với Angular, từ cài đặt môi trường đến tạo ứng dụng
                    đầu tiên.
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
