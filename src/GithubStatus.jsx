import { BookMarked, CalendarClock, Link, Users } from "lucide-react";

const GithubStatus = ({ user }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 text-center bg-white rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        <img
          src={user?.avatar_url}
          className="w-24 h-24 mb-3 rounded-full"
          alt="user avatar"
        />
        <h1 className="text-xl font-semibold">{user?.name}</h1>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <BookMarked className="w-6 h-6 mb-1" />
          <span className="text-lg font-medium">{user?.public_repos}</span>
          <p className="text-sm text-gray-500">Repositories</p>
        </div>
        <div className="flex flex-col items-center">
          <Users className="w-6 h-6 mb-1" />
          <span className="text-lg font-medium">{user?.followers}</span>
          <p className="text-sm text-gray-500">Followers</p>
        </div>
        <div className="flex flex-col items-center">
          <Link className="w-6 h-6 mb-1" />
          <a
            className="text-lg font-medium"
            target="_blank"
            href={user?.html_url}
          >
            <p className="text-sm text-gray-500">{user?.login}</p>
          </a>
        </div>
        <div className="flex flex-col items-center">
          <CalendarClock className="w-6 h-6 mb-1" />
          <p className="text-sm font-medium text-gray-500">
            {new Date(user?.created_at).toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GithubStatus;
