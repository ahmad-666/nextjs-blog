import articles from '../../../public/data/articles';

const getArticles = (req, res) => {
  if (!articles.length) return res.status(404).json({ error: true });
  return res.status(200).json({ articles });
};
export default getArticles;
