export async function fetchNews() {
  try {
    const response = await fetch(
      `https://gnews.io/api/v4/search?q=formula%201&lang=en&max=10&apikey=${
        import.meta.env.VITE_GNEWS_API
      }`
    );

    const data = await response.json();

    return data.articles || [];
  } catch (error) {
    console.log("News API Error:", error);

    return [];
  }
}