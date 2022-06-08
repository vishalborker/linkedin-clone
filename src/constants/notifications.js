import { v4 } from 'uuid';

export const notificationTypes = {
    RESHARED: 'reshared',
    VIEWED: 'viewed',
    COMMENTED: 'commented',
    MENTIONED: 'mentioned',
    CONGRATULATE: 'congratulate',
    FOLLOWED: 'followed',
    LIVE: 'live',
};

export const notifications = [
    {
        id: v4(),
        type: notificationTypes.VIEWED,
        author: 'John Abraham',
        authorId: v4(),
        time: '7h',
        read: false,
        image: 'https://source.unsplash.com/random/100x100?brand'
    }, {
        id: v4(),
        type: notificationTypes.VIEWED,
        author: 'Abhishek Verma',
        authorId: v4(),
        time: '3h',
        read: true,
        image: 'https://source.unsplash.com/random/100x100?brand'

    }, {
        id: v4(),
        type: notificationTypes.RESHARED,
        author: 'Akshay Sharma',
        authorId: v4(),
        time: '1h',
        post: 'Think of all possibilities, before...',
        read: true,
        image: 'https://source.unsplash.com/random/100x100?brand'

    }, {
        id: v4(),
        type: notificationTypes.LIVE,
        author: 'Sonia Sharma',
        authorId: v4(),
        time: '1h',
        post: 'How to go from junior software engineer to senior',
        read: false,
        image: 'https://source.unsplash.com/random/100x100?brand'

    }, {
        id: v4(),
        type: notificationTypes.RESHARED,
        author: 'Alisson',
        authorId: v4(),
        time: '1h',
        post: 'Download the resource https://bit.ly/jk2jcb98aD',
        read: true,
        image: 'https://source.unsplash.com/random/100x100?brand'

    }, {
        id: v4(),
        type: notificationTypes.VIEWED,
        author: 'Abhishek Verma',
        authorId: v4(),
        time: '3h',
        read: false,
        image: 'https://source.unsplash.com/random/100x100?brand'

    }, {
        id: v4(),
        type: notificationTypes.RESHARED,
        author: 'Akshay Sharma',
        authorId: v4(),
        time: '1h',
        post: 'Think of all possibilities, before...',
        read: true,
        image: 'https://source.unsplash.com/random/100x100?brand'

    }, {
        id: v4(),
        type: notificationTypes.LIVE,
        author: 'Sonia Sharma',
        authorId: v4(),
        time: '1h',
        post: 'How to go from junior software engineer to senior',
        read: false,
        image: 'https://source.unsplash.com/random/100x100?brand'

    }, {
        id: v4(),
        type: notificationTypes.RESHARED,
        author: 'Alisson',
        authorId: v4(),
        time: '1h',
        post: 'Download the resource https://bit.ly/jk2jcb98aD',
        read: true,
        image: 'https://source.unsplash.com/random/100x100?brand'

    }, {
        id: v4(),
        type: notificationTypes.VIEWED,
        author: 'Abhishek Verma',
        authorId: v4(),
        time: '3h',
        read: false,
        image: 'https://source.unsplash.com/random/100x100?brand'

    }, {
        id: v4(),
        type: notificationTypes.RESHARED,
        author: 'Akshay Sharma',
        authorId: v4(),
        time: '1h',
        post: 'Think of all possibilities, before...',
        read: true,
        image: 'https://source.unsplash.com/random/100x100?brand'

    }, {
        id: v4(),
        type: notificationTypes.LIVE,
        author: 'Sonia Sharma',
        authorId: v4(),
        time: '1h',
        post: 'How to go from junior software engineer to senior',
        read: false,
        image: 'https://source.unsplash.com/random/100x100?brand'

    }
]