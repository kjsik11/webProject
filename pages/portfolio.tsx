import React from 'react';

const Portfolio = () => {
  return (
    <div className="my-12 sm:my-24 px-2 sm:px-8 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
      <div>
        <div>
          <a
            href="https://church-jongsik.vercel.app/"
            target="blank"
            className="inline-block"
          >
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-200 hover:bg-indigo-300 text-indigo-800">
              https://church-jongsik.vercel.app/
            </span>
          </a>
        </div>
        <div className="block mt-4">
          <p className="text-xl font-semibold text-gray-900">교회 사이트</p>
          <p className="mt-3 text-base text-gray-500">
            신세를 지고 있는 교회를 위해 Db, Api, Front 모두 혼자 가볍게 만들고
            있는 프로젝트 입니다.
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
            대충정했조 졸업작품 사이트 입니다 현재는 개발중입니다 (프론트엔드는
            거의 안함).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
