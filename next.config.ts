import type { NextConfig } from "next";

// GitHub Pages는 https://seobeomsu.github.io/seobeomsu-portfolio/ 하위 경로로 서빙된다.
// 프로덕션 빌드(next build)에서만 basePath를 적용해, 로컬 `next dev`는 basePath 없이 동작하게 한다.
const isProd = process.env.NODE_ENV === "production";
const repoBasePath = "/seobeomsu-portfolio";

const nextConfig: NextConfig = {
  output: "export", // out/ 폴더에 정적 HTML/CSS/JS 생성
  basePath: isProd ? repoBasePath : "",
  assetPrefix: isProd ? `${repoBasePath}/` : "",
  images: { unoptimized: true }, // 정적 배포에는 서버 이미지 최적화 불가
  trailingSlash: true, // /about -> /about/index.html 로 안정적 라우팅
};

export default nextConfig;
