import React from 'react';
import cn from 'classnames';

interface Props {
  projectItem: any;
}

const Project: React.FC<Props> = ({ projectItem }) => {
  const [youtubeId, setYoutubeId] = React.useState<string>('');

  React.useEffect(() => {
    if (projectItem)
      setYoutubeId(projectItem.items[0].snippet.resourceId.videoId);
  }, [projectItem]);

  if (!projectItem) return <div>loading</div>;

  return (
    <div className="max-w-5xl mx-auto my-12">
      <iframe
        className="w-full max-w-5xl mx-auto h-64 sm:h-96 md:h-120 mb-20 rounded-md"
        frameBorder="0"
        allow="encrypted-media"
        allowFullScreen
        title="youtube"
        src={`https://www.youtube.com/embed/${youtubeId}?enablejsapi=1`}
      />
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 m-4 mb-20"
      >
        {projectItem.items.map((item: any, idx: number) => (
          <li className="relative" key={`projectItem-${idx}`}>
            <div
              className="group block overflow-hidden cursor-pointer"
              onClick={() => setYoutubeId(item.snippet.resourceId.videoId)}
            >
              <img
                src={item.snippet.thumbnails.medium.url}
                alt=""
                className={cn(
                  'group-hover:opacity-75 object-cover w-full h-full pointer-events-none rounded-lg',
                  {
                    'opacity-75': item.snippet.resourceId.videoId === youtubeId,
                  },
                )}
              />
              <p
                className={cn(
                  'block text-sm lg:text-lg text-center w-full font-medium text-gray-800 pointer-events-none pt-2',
                  {
                    'opacity-75': item.snippet.resourceId.videoId === youtubeId,
                  },
                )}
              >
                {item.snippet.title}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const seriesId = process.env.NEXT_PUBLIC_PLAYLIST_ID;

  if (!apiKey) throw new Error('No Youtube API Key.');
  if (!seriesId) throw new Error('No Youtube seriesId.');

  try {
    const projectItem = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,id&playlistId=${seriesId}&key=${apiKey}&maxResults=15`,
    ).then((res) => res.json());

    return {
      props: {
        projectItem: JSON.parse(JSON.stringify(projectItem)),
      },
      revalidate: 1,
    };
  } catch (err) {
    console.log('[Projects] error on getStaticProps. error: ', err);

    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
}

export default Project;
