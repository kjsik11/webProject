import React from 'react';
import styled from 'styled-components';

// importing components
import { Head } from '@components/core';

const Root = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  .videoBox {
    padding-top: ${(9 / 16) * 100}%;
  }

  .titleShadow {
    text-shadow: 0em 0.08em 0em rgb(0 0 0 / 10%);
  }
`;

const Home: React.FC = () => {
  // set data as a state with type Data(which is declaired in global.d.ts).

  return (
    <Root>
      <Head>
        <title>WebProject</title>
      </Head>

      <main className="my-4 mx-auto max-w-7xl px-4 sm:my-16">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">개인</span>
            <span className="block text-indigo-600 xl:inline"> 홈페이지</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            React를 사용한 웹 사이트 만들기
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="/team-project"
                className="w-full flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-2"
              >
                팀 프로젝트 설명 보러가기
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="/profile"
                className="w-full flex items-center justify-center px-2 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-2"
              >
                프로필 보러가기
              </a>
            </div>
          </div>
        </div>
        <div className="relative mt-8 md:mt-20 w-full videoBox rounded-md overflow-hidden">
          <iframe
            className="w-full h-full absolute inset-0"
            frameBorder="0"
            allow="encrypted-media"
            allowFullScreen
            title="youtube"
            src={`https://www.youtube.com/embed/1YQxYFCILEg?enablejsapi=1`}
          />
        </div>
      </main>
    </Root>
  );
};

export default Home;
