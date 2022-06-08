import { API_URL } from "../../../constants/url";

// async calls (side effects should happen here, change data store or API endpoints here)

export function requestGetNews(payload) {
    return new Promise((resolve, reject) => {

        fetch(`${API_URL}/news`)
        .then(res => res.json())
        .then(data => resolve(data));
    })
}