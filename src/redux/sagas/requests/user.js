import { USER_DETAILS } from "../../../constants/user";

// async calls (side effects should happen here, change data store or API endpoints here)

export function requestGetUser(payload) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(USER_DETAILS);
        }, 200)
    })
}