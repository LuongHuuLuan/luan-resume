"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { transition1 } from "@/app/transition";
import Link from "next/link";

type Props = {};

export default function Blog({}: Props) {
  useEffect(() => {
    document.body.classList.add('overflow-x-hidden');
    document.body.classList.add('overflow-y-scroll');
    
    const header = document.querySelector('header');
    if (header) {
      header.classList.add('bg-white');
      header.classList.add('lg:bg-transparent');
      header.classList.add('lg:relative');
    }
    return () => {
      document.body.classList.remove('overflow-x-hidden');
      document.body.classList.remove('overflow-y-scroll');
      const header = document.querySelector('header');
      if (header) {
        header.classList.remove('bg-white');
        header.classList.remove('lg:bg-transparent');
        header.classList.remove('lg:relative');
      }
    }
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
      <div className="max-w-3xl px-6 py-8 bg-white shadow-md rounded-md">
        <h1 className="text-4xl font-bold mb-6">Bắt đầu với Next.js - Hướng dẫn chi tiết cho người mới bắt đầu</h1>
        <p className="text-gray-700 mb-6">
          Next.js là một framework mạnh mẽ dựa trên React, được thiết kế để giúp bạn xây dựng các ứng dụng web tĩnh và động một cách dễ dàng. Next.js giảm thiểu sự phức tạp của việc cấu hình môi trường phát triển và triển khai, tập trung vào việc cung cấp các tính năng cần thiết cho một ứng dụng web hiện đại như routing tự động, tối ưu hóa SEO, hỗ trợ SSR (Server-side rendering), và nhiều hơn nữa.
        </p>
        <h2 className="text-2xl font-bold mb-4">Tại sao nên sử dụng Next.js?</h2>
        <p className="text-gray-700 mb-6">
          Next.js mang đến nhiều lợi ích quan trọng cho các nhà phát triển web:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li className="text-gray-700">Hỗ trợ SSR: Next.js hỗ trợ Server-side rendering (SSR), giúp tăng trải nghiệm người dùng và tối ưu hóa SEO cho ứng dụng web.</li>
          <li className="text-gray-700">Routing tự động: Next.js cung cấp hệ thống routing tự động dựa trên thư mục và tên file, giúp quản lý routing một cách hiệu quả.</li>
          <li className="text-gray-700">Tối ưu hóa hiệu suất: Với hỗ trợ pre-rendering và tối ưu hóa dự án, Next.js giúp ứng dụng hoạt động nhanh hơn và hiệu quả hơn.</li>
          <li className="text-gray-700">Đơn giản hóa triển khai: Next.js tích hợp sẵn các công cụ triển khai như Vercel, giúp việc đưa ứng dụng lên production trở nên dễ dàng và nhanh chóng.</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">Bắt đầu với Next.js</h2>
        <p className="text-gray-700 mb-6">
          Để bắt đầu với Next.js, bạn cần cài đặt Node.js và npm trước tiên. Sau đó, bạn có thể tạo một dự án Next.js mới bằng cách chạy lệnh sau trong terminal:
        </p>
        <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto mb-6">
          <code className="language-shell">
            npx create-next-app my-next-app
          </code>
        </pre>
        <p className="text-gray-700 mb-6">
          Lệnh này sẽ tạo ra một dự án Next.js mới có tên là `my-next-app`. Sau khi cài đặt hoàn tất, bạn có thể di chuyển vào thư mục của dự án và chạy ứng dụng Next.js bằng lệnh:
        </p>
        <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto mb-6">
          <code className="language-shell">
            cd my-next-app
            npm run dev
          </code>
        </pre>
        <p className="text-gray-700 mb-6">
          Đây là một trong những bước đầu tiên để bắt đầu với Next.js. Hãy khám phá thêm về các tính năng và khả năng của Next.js để xây dựng những ứng dụng web tuyệt vời!
        </p>
        <h2 className="text-2xl font-bold mb-4">Kết luận</h2>
        <p className="text-gray-700 mb-6">
          Next.js là một công cụ mạnh mẽ cho phát triển ứng dụng web với React, mang đến sự đơn giản trong việc xây dựng và triển khai các ứng dụng web hiện đại. Với cộng đồng phát triển lớn mạnh và sự hỗ trợ của các công cụ tối ưu hóa, Next.js là lựa chọn lý tưởng cho các dự án web đòi hỏi hiệu suất cao và khả năng mở rộng.
        </p>
        <p className="text-gray-700">
          Hy vọng bài viết này đã giúp bạn có cái nhìn tổng quan và khởi đầu thành công với Next.js. Hãy bắt đầu và khám phá thêm về những gì Next.js có thể mang đến cho dự án của bạn!
        </p>
      </div>
    </div>
    </motion.section>
  );
}
