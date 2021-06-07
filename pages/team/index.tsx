import React from 'react';
import cn from 'classnames';
import { Header } from '@components/core';
import Button from '@components/ui/Button';
import Link from '@components/ui/Link';
import getAllTeams from '@lib/getAllTeams';
import Avatar from '@components/ui/Avatar';

const TeamPage = () => {
  const [team, setTeam] = React.useState<
    { name: string; age: string; position: string }[] | null
  >(null);
  const [error, setError] = React.useState<string>('');

  React.useEffect(() => {
    getAllTeams()
      .then((team) => setTeam(team))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>{error}</p>;

  if (team === null) return <p>loading...</p>;
  return (
    <>
      <div className="max-w-4xl mx-auto py-16 px-4">
        <Link href="/team/upload">
          <button className="bg-indigo-600 rounded-md py-2 hover:opacity-80 text-white px-4 mx-2">
            팀원 추가
          </button>
        </Link>
        <div>
          <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
              <div className="space-y-5 sm:space-y-4">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  우리 팀원들
                </h2>
                <p className="text-xl text-gray-500">
                  회사의 팀원들을 만나보세요
                </p>
              </div>
              <div className="lg:col-span-2">
                <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
                  {team.map((val, idx) => (
                    <li key={`${val.name}-${idx}`}>
                      <div className="flex items-center space-x-4 lg:space-x-6">
                        <Avatar />
                        <div className="font-medium text-lg leading-6 space-y-1">
                          <h3>{val.name}</h3>
                          <p className="text-indigo-600">
                            {val.age} / {val.position}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
TeamPage.Layout = Header;
