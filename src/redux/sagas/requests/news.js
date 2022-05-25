import { NEWS_ITEMS } from "../../../constants/listItems";

// async calls (side effects should happen here, change data store or API endpoints here)

export function requestGetNews(payload) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(NEWS_ITEMS);
        }, 400)
    })
}