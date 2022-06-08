import { notifications } from "../../../constants/notifications";

// async calls (side effects should happen here, change data store or API endpoints here)

export function requestGetNotifications() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(notifications);
        }, 200)
    })
}