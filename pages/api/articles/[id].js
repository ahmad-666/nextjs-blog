import articles from '../../../public/data/articles';

const getArticle = (req, res) => {
  const articleId = req.query.id;
  const article = articles.find(art => art._id === articleId);
  if (!Object.keys(article).length)
    return res.status(200).json({ error: true, msg: 'article not found' });
  return res.status(200).json({ article });
};
export default getArticle;
