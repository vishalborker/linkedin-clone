export const GET_NOTIFICATIONS = 'GET_NOTIFICATIONS';
export const GET_NOTIFICATIONS_DATA = 'GET_NOTIFICATIONS_DATA';
export const SET_NOTIFICATIONS_DATA = 'SET_NOTIFICATIONS_DATA';


export const getNotifications = () => ({
    type: GET_NOTIFICATIONS
})

export const setNotifications = (notifications) => ({
    type: SET_NOTIFICATIONS_DATA,
    payload: notifications
})

export const getNotificationsData = () => ({
    type: GET_NOTIFICATIONS_DATA
})

export const notificationReducer = (state, action) => {
    switch(action.type) {
        case GET_NOTIFICATIONS:
            return { ...state };
        case SET_NOTIFICATIONS_DATA:
            return { ...state, notifications: action.payload };
        default:
            return { ...state };
    }
}


