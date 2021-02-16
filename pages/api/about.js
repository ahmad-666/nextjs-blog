const aboutTxt =
  'about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content about us content';
const getAbout = (req, res) => {
  if (!aboutTxt)
    return res
      .status(200)
      .json({ error: true, msg: 'about content not found' });
  return res.status(200).json({ aboutTxt });
};
export default getAbout;
