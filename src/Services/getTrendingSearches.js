import { API_KEY, API_URL } from './settings'

export default async function getTrendingTerms() {
    const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`

    const response = await fetch(apiURL)
    const res = await response.json()
    const { data = [] } = res
    return data.slice(0,5)

}