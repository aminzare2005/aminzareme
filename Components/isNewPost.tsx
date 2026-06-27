import { FaFireAlt } from "react-icons/fa";

interface PostTitleProps {
  pubDate: string;
}

export function IsNewPost({ pubDate }: PostTitleProps) {
  const isNewPost = checkIfNewPost(pubDate);

  if (isNewPost) {
    return (
      <div className="bg-orange-400 z-20 w-fit px-2 py-1 rounded-md text-xs items-center gap-1 inline-flex">
        <FaFireAlt />
        پست جدید
      </div>
    );
  }

  return null;
}

function checkIfNewPost(pubDate: string): boolean {
  const postDate = new Date(pubDate);
  const currentDate = new Date();
  const threeDaysInMs = 3 * 24 * 60 * 60 * 1000;

  return currentDate.getTime() - postDate.getTime() <= threeDaysInMs;
}
