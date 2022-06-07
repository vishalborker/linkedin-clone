import { v4 } from 'uuid';

export const USER_DETAILS = {
    username: 'John Doe',
    email: 'johndoe@example.com',
    profileImg: 'https://source.unsplash.com/random/300x300?profile',
    profileBgImg: 'https://source.unsplash.com/random/600x200',
    title: 'Senior Software Engineer',
    subtitle: 'Associate Engineer | XYZ Technologies | (JavaScript | ReactJS | NodeJS | Angular | MongoDB | System Design | Microservices | Cloud )',
    profileLink: 'johndoe365-abcdefgh',
    profileViewed: 344,
    postImpressions: 698,
    premiumUser: true,
    bookmarks: [],
    id: v4(),
}

export const LOGIN_USER = {
    email: 'johndoe@example.com',
    password: 'example@123',
}