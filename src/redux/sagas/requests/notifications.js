// import { notifications } from "../../../constants/notifications";
import { API_URL } from "../../../constants/url";


// async calls (side effects should happen here, change data store or API endpoints here)

export function requestGetNotifications() {
    return new Promise((resolve, reject) => {
        // setTimeout(() => {
        //     resolve(notifications);
        // }, 200)
        fetch(`${API_URL}/notifications`)
        .then(res => res.json())
        .then(data => resolve(data));
    })
}