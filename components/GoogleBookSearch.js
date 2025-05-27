// components/GoogleBooksSearch.js
import { useState } from 'react';

export default function GoogleBooksSearch() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    const res = await fetch(`/api/google-books?query=${query}`);
    const data = await res.json();
    setBooks(data.items || []);
  };

  return (
    <div>
      <h2>Buscar Livros (Google Books)</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Título ou Autor"
      />
      <button onClick={handleSearch}>Buscar</button>

      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.volumeInfo.title}</strong><br />
            {book.volumeInfo.authors?.join(', ')}<br />
            {book.volumeInfo.publishedDate}
          </li>
        ))}
      </ul>
    </div>
  );
}
