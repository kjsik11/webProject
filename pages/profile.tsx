import Insta from '@components/icons/Insta';
import React from 'react';

const Profile = () => {
  return (
    <div className="bg-gray-100 h-full">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              내 프로필
            </h2>
            <p className="text-xl text-gray-500">
              프로필 사진은 그냥 뭐든 넣어야할꺼 같아서 찾던중에 미어캣이
              귀여워서 이걸로 정했습니다.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
              <li className="sm:py-8">
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                  <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                    <img
                      className="object-cover shadow-lg rounded-lg"
                      src="/profile.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>김종식</h3>
                        <p className="text-indigo-600">Software Engineer</p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">
                          현재 4학년이고 IT,미술작품 갤러리 관련 스타트업 회사에
                          취직해서 일하고 있습니다. <br />
                          사용 언어는 C++ ,JavaScript, Python이며 현재는
                          JavaScript를 사용한 웹, Api, Db 를 모두 사용하는
                          풀스택 개발자가 되기위한 개발 공부중입니다.
                        </p>
                      </div>
                      <ul className="flex space-x-5">
                        <li>
                          <a
                            href="https://www.instagram.com/kjjjongsk/"
                            target="blank"
                            className="text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Insta</span>
                            <Insta className="w-6 h-6 text-gray-500" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/kjsik11"
                            target="blank"
                            className="text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Github</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
