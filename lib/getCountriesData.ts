export default async function getCountriesData(): Promise<Country[]> {
  const response = await fetch('https://restcountries.com/v3.1/independent?status=true');

  if (!response.ok) {
    throw new Error('Failed to fetch data!')
  }

  return response.json();
}