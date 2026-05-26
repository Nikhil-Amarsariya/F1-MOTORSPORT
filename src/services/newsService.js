export async function fetchNews() {
  try {
    const response = await fetch(
      `/api/news?q=formula 1`
    );

    const data = await response.json();

    return data.articles || [];
  } catch (error) {
    console.log("News API Error:", error);

    return [];
  }
}