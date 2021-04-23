import React from 'react';
import { MailIcon, PhoneIcon } from '@heroicons/react/solid';

const people = [
  {
    name: '김종식',
    title: 'software engineer',
    role: 'Admin',
    email: 'kjsik11@gmail.com',
    telephone: '010-9908-9336',
    imageUrl: '/profile.jpeg',
  },
];

const stats = [
  { name: '총 구독자 수', stat: '71,897' },
  { name: '총 방문 수', stat: '102,004' },
  { name: '구독자 비율', stat: '70.48%' },
];

const TeamProject = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            팀 프로젝트 설명
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            대시보드형 웹 사이트 만들기
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            사이드바 레이아웃을 사용하여 관리자 페이지로써 동작하는 대시보드형
            웹 사이트를 제작할 예정입니다.
          </p>
        </div>
      </div>
      <h2 className="text-center text-base font-semibold text-indigo-600 tracking-wide uppercase">
        프로젝트 예시
      </h2>

      <p className="pl-4 text-lg">팀 카드</p>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 p-4 lg:grid-cols-3">
        {people.map((person) => (
          <>
            <li
              key={person.email}
              className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
            >
              <div className="w-full flex items-center justify-between p-6 space-x-6">
                <div className="flex-1 truncate">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-gray-900 text-sm font-medium truncate">
                      {person.name}
                    </h3>
                    <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                      {person.role}
                    </span>
                  </div>
                  <p className="mt-1 text-gray-500 text-sm truncate">
                    {person.title}
                  </p>
                </div>
                <img
                  className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
                  src={person.imageUrl}
                  alt=""
                />
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="w-0 flex-1 flex">
                    <a
                      href={`mailto:${person.email}`}
                      className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                    >
                      <MailIcon
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3">Email</span>
                    </a>
                  </div>
                  <div className="-ml-px w-0 flex-1 flex">
                    <a
                      href={`tel:${person.telephone}`}
                      className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                    >
                      <PhoneIcon
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3">Call</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li
              key={person.email}
              className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
            >
              <div className="w-full flex items-center justify-between p-6 space-x-6">
                <div className="flex-1 truncate">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-gray-900 text-sm font-medium truncate">
                      {person.name}
                    </h3>
                    <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                      {person.role}
                    </span>
                  </div>
                  <p className="mt-1 text-gray-500 text-sm truncate">
                    {person.title}
                  </p>
                </div>
                <img
                  className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
                  src={person.imageUrl}
                  alt=""
                />
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="w-0 flex-1 flex">
                    <a
                      href={`mailto:${person.email}`}
                      className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                    >
                      <MailIcon
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3">Email</span>
                    </a>
                  </div>
                  <div className="-ml-px w-0 flex-1 flex">
                    <a
                      href={`tel:${person.telephone}`}
                      className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                    >
                      <PhoneIcon
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3">Call</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li
              key={person.email}
              className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
            >
              <div className="w-full flex items-center justify-between p-6 space-x-6">
                <div className="flex-1 truncate">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-gray-900 text-sm font-medium truncate">
                      {person.name}
                    </h3>
                    <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                      {person.role}
                    </span>
                  </div>
                  <p className="mt-1 text-gray-500 text-sm truncate">
                    {person.title}
                  </p>
                </div>
                <img
                  className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
                  src={person.imageUrl}
                  alt=""
                />
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="w-0 flex-1 flex">
                    <a
                      href={`mailto:${person.email}`}
                      className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                    >
                      <MailIcon
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3">Email</span>
                    </a>
                  </div>
                  <div className="-ml-px w-0 flex-1 flex">
                    <a
                      href={`tel:${person.telephone}`}
                      className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                    >
                      <PhoneIcon
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3">Call</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </>
        ))}
      </ul>
      <p className="pl-4 py-8 text-lg">뉴스레터</p>
      <div className="bg-white pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="inline text-3xl font-extrabold tracking-tight text-gray-900 sm:block sm:text-4xl">
            새로운 업데이트는 뭐가 있을까요?
          </h2>
          <p className="inline text-3xl font-extrabold tracking-tight text-indigo-600 sm:block sm:text-4xl">
            새 소식을 듣고싶다면 당신의 이메일을 적어주세요
          </p>
          <form className="mt-8 sm:flex">
            <label htmlFor="emailAddress" className="sr-only">
              Email address
            </label>
            <input
              id="emailAddress"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-5 py-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                메일 보내기
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <p className="pl-4 py-8 text-lg">통계</p>
        <div className="p-4 flex flex-col justify-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            지난 한 달 통계
          </h3>
          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.name}
                className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
              >
                <dt className="text-sm font-medium text-gray-500 truncate">
                  {item.name}
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {item.stat}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default TeamProject;
