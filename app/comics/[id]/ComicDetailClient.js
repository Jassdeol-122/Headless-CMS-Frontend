"use client";

const ComicDetailClient = ({ comic }) => {
  return (
    <div className="container mx-auto p-4 text-center bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6">{comic.Title}</h1>
      <p className="text-gray-700 text-xl mb-2">by {comic.Author}</p>
      <p className="text-gray-500 mb-4">{comic.Date}</p>
      <div className="border p-4 rounded-lg shadow bg-white">
        <p className="mb-4">{comic.Content}</p>
        <p className="text-yellow-500">Rating: {comic.Rating}</p>
      </div>
    </div>
  );
};

export default ComicDetailClient;

