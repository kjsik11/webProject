import React from 'react';

const Portfolio = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            사용한 프로그램 정보
          </h2>
          <a
            href="https://reactjs.org/"
            target="black"
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 hover:text-gray-600 cursor-pointer sm:text-4xl"
          >
            React
          </a>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            React는 페이스북에서 개발한 유저 인터페이스 라이브러리로서 개발자로
            하여금
            <br className="hidden md:block" /> 재사용 가능한 UI를 생성할 수 있게
            해주는 JavaScript 라이브러리입니다.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <a
                  target="blank"
                  href="https://tailwindcss.com/"
                  className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 hover:bg-indigo-300 text-white"
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </a>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Styled Component, Tailwind CSS
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                styled component란 JS파일 내에서 CSS를 사용할 수 있게 해주는
                대표적 CSS-in JS 라이브러리이며 Tailwind CSS란 기존 컴포넌트
                위주의 CSS 대신 HTML문서에 저수준의 유틸리티 클래스를 정의하여
                디자인을 도와주는 라이브러리이며 이 홈페이지 디자인 대부분은
                Tailwind CSS를 사용하였습니다.
              </dd>
            </div>
            <div className="relative">
              <dt>
                <a
                  target="blank"
                  href="https://vercel.com/"
                  className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 hover:bg-indigo-300 text-white"
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </a>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Vercel
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Vercel은 Github와 같은 저장소에 있는 파일들을 받아 스스로 빌드한
                뒤 전 세계 CDN에 무료로 제공해주는 서비스입니다.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <a
                  target="blank"
                  href="https://github.com/"
                  className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 hover:bg-indigo-300 text-white"
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </a>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Github
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Github는 대표적인 무료 Git 저장소입니다. 한국을 포함한 전 세계
                IT 업계에서 GitHub 계정이 일종의 포트폴리오 역할을 할 수 있는
                만큼 IT 관련 업계에서는 반드시 사용해야하는 저장소입니다.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <a
                  target="blank"
                  href="https://mongodb.com"
                  className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 hover:bg-indigo-300 text-white"
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </a>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  MongoDB
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                MongoDB는 JSON과 같은 동적 스키마형 Document들을 선호하는
                전통적인 테이블 기반 구조의 DB입니다.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <h2 className="text-base text-indigo-600 text-center mt-12 mb-4 font-semibold tracking-wide uppercase">
        Portfolio
      </h2>
      <div className="mb-12 px-2 sm:px-8 grid gap-16 lg:grid-cols-3 lg:gap-x-5">
        <div>
          <div>
            <a
              href="https://tlcommunity.co.kr/"
              target="blank"
              className="inline-block"
            >
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-200 hover:bg-indigo-300 text-indigo-800">
                https://tlcommunity.co.kr/
              </span>
            </a>
          </div>
          <div className="block mt-4">
            <p className="text-xl font-semibold text-gray-900">교회 사이트</p>
            <p className="mt-3 text-base text-gray-500">
              신세를 지고 있는 교회를 위해 Db, Api, Front 모두 혼자 가볍게
              만들고 있는 프로젝트 입니다.
            </p>
          </div>
        </div>

        <div>
          <div>
            <a
              href="https://github.com/kjsik11"
              target="blank"
              className="inline-block"
            >
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 hover:bg-pink-300 text-pink-800">
                https://github.com/kjsik11
              </span>
            </a>
          </div>
          <div className="block mt-4">
            <p className="text-xl font-semibold text-gray-900">깃 허브</p>
            <p className="mt-3 text-base text-gray-500">
              깃 허브 링크입니다. 주요 프로젝트들은 Private설정이라 보이지
              않습니다.
            </p>
          </div>
        </div>

        <div>
          <div>
            <a
              href="https://jb.jongsik.site/"
              target="blank"
              className="inline-block"
            >
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 hover:bg-green-300 text-green-800">
                https://jb.jongsik.site/
              </span>
            </a>
          </div>
          <div className="block mt-4">
            <p className="text-xl font-semibold text-gray-900">
              대충정했조 졸업작품
            </p>
            <p className="mt-3 text-base text-gray-500">
              대충정했조 졸업작품 사이트 입니다 현재는 개발중입니다
              (프론트엔드는 거의 안함).
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
