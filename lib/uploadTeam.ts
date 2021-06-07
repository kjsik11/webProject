import fetcher from '@lib/fetcher';

const uploadTeam: ({
  name,
  position,
  age,
}: {
  name: string;
  position: string;
  age: string;
}) => Promise<void> = async ({ name, position, age }) => {
  try {
    await fetcher('/api/team', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, position, age }),
    });
  } catch (err) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[uploadTeam] error', err);
    }
    const { code, additionalInfo } = err;
    let message: string;
    switch (code) {
      case 2:
        message = '필수 요소를 모두 채우지 않았습니다.';
        break;
      default:
        message = `[${code}] 서버 에러 발생 ${err.message}`;
        break;
    }

    const error = new Error(message) as CustomError;
    error.code = code;
    error.additionalInfo = additionalInfo;

    throw error;
  }
};

export default uploadTeam;
