export async function fetchRaces() {
  try {
    const currentYear =
      new Date().getFullYear();

    const response = await fetch(
      `https://api.openf1.org/v1/sessions?year=${currentYear}&session_name=Race`
    );

    const data = await response.json();

    const uniqueRaces = Array.from(
      new Map(
        data.map((race) => [
          race.meeting_key,
          race,
        ])
      ).values()
    );

    return uniqueRaces;
  } catch (error) {
    console.error("Error fetching races:", error);

    return [];
  }
}