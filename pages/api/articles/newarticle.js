const postArticle = (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) return res.status(404).json({ error: true });
  return res
    .status(200)
    .json({ msg: 'successfully add article', article: { title, content } });
};
export default postArticle;
