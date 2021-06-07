import React from 'react';
import { Header } from '@components/core';
import Input from '@components/ui/Input';
import uploadTeam from '@lib/uploadTeam';
import { useRouter } from 'next/router';

const TeamUploadPage = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [teamInput, setTeamInput] = React.useState<{
    name: string;
    position: string;
    age: string;
  }>({ name: '', position: '', age: '' });

  const handleSubmit = React.useCallback(
    async ({
      name,
      position,
      age,
    }: {
      name: string;
      position: string;
      age: string;
    }) => {
      setLoading(true);
      try {
        await uploadTeam({ name, position, age });
      } catch (err) {
        console.log('[UploadNotice] error', err.message);
      } finally {
        setLoading(false);
      }
      router.push('/team');
    },
    [router],
  );
  return (
    <div className="max-w-4xl mx-auto py-16">
      <h3 className="text-center text-3xl font-bold">팀원 추가</h3>
      <div className="grid sm:grid-cols-3 gap-4 p-8">
        <Input
          label="이름 (*)"
          className="h-12 px-2"
          value={teamInput.name}
          onChange={(e) => {
            setTeamInput({ ...teamInput, name: e.target.value });
          }}
        />
        <Input
          label="나이 (*)"
          className="h-12 px-2"
          value={teamInput.age}
          onChange={(e) => {
            setTeamInput({ ...teamInput, age: e.target.value });
          }}
        />
        <Input
          label="직책 (*)"
          className="h-12 px-2"
          value={teamInput.position}
          onChange={(e) => {
            setTeamInput({ ...teamInput, position: e.target.value });
          }}
        />
      </div>

      <div className="flex justify-end px-8">
        <button
          onClick={() => handleSubmit(teamInput)}
          disabled={
            loading || !teamInput.name || !teamInput.age || !teamInput.position
          }
          className="bg-indigo-600 rounded-md py-2 px-4 hover:opacity-80 text-white"
        >
          추가하기
        </button>
      </div>
    </div>
  );
};

export default TeamUploadPage;
TeamUploadPage.Layout = Header;
