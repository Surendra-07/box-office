const Api_base_url = "https://api.tvmaze.com";

export async function apiGet(queryString) {
  const response = fetch(`${Api_base_url}${queryString}`);
  return response;
}
