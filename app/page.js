"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Home() {
  const [comics, setComics] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:1337/api/comics');
      const fetchedComics = res.data.data.map((comic) => ({
        id: comic.id,
        ...comic.attributes,
      }));
      setComics(fetchedComics);
    };
    fetchData();
  }, []);

  const filteredComics = comics.filter((comic) =>
    comic.Title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 text-center bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6">Comics Review</h1>
      <input
        type="text"
        placeholder="Search comics..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="form-control mb-3 p-2 border rounded-lg"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredComics.map((comic) => (
          <div key={comic.id} className="border p-4 rounded-lg shadow bg-white">
            <h2 className="text-2xl font-semibold mb-2">{comic.Title}</h2>
            <p className="text-gray-700 mb-1">by {comic.Author}</p>
            <p className="text-gray-500 mb-3">{comic.Date}</p>
            <Link href={`/comics/${comic.id}`}>
              <p className="text-blue-500 hover:underline cursor-pointer">Read More</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
