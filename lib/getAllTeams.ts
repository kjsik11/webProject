import fetcher from '@lib/fetcher';

const getAllTeams: () => Promise<
  { name: string; age: string; position: string }[]
> = async () => {
  const { teams } = await fetcher('/api/team');

  return teams;
};

export default getAllTeams;
