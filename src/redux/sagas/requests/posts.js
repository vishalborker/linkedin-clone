import { POSTS } from "../../../constants/posts";

// async calls (side effects should happen here, change data store or API endpoints here)

export function requestGetPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(POSTS);
        }, 400)
    })
}