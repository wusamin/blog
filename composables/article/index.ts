export const useArticles = async () => {
  const articles = await queryContent('article').sort({ date: -1 }).find()
  articles.forEach((article) => {
    console.log(`title:${article.title}`)
  })

  return { articles: [] }
}
