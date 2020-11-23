import { API_KEY, API_URL } from './settings';

export default async function getGifs({ limit = 25, keyword = 'random', page = 0 } = {}) {
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=G&lang=en`
    const res = await fetch(apiURL)
    const response = await res.json()
    const gifs = response.data.map(image => {
        const { images, title, id } = image
        const { url } = images.downsized_medium
        return { title, id, url }
    })
    return gifs
}