const apiKey = process.env.GOOGLE_BOOKS_API_KEY;
const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}${AIzaSyBjfGYMeRZ60LBYnChnygAg_ML6WdUtPB8 ? `&key=${AIzaSyBjfGYMeRZ60LBYnChnygAg_ML6WdUtPB8}` : ''}`;
export default async function handler(req, res) {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: 'Missing search query' });
  }

  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`);
  const data = await response.json();

  res.status(200).json(data);
}
