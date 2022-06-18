import { ImageCategory } from "./images";
import { USER_DETAILS } from "./user";


export const NEW_POST_FIELDS = {
    author: USER_DETAILS.username,
    authorId: USER_DETAILS.id,
    profileImg: USER_DETAILS.profileImg,
    subtitle: USER_DETAILS.subtitle,
    type: 'post',
    following: true,
    postPrivacy: 'public',
    image: `https://source.unsplash.com/random/400x400?${ImageCategory[Math.floor(Math.random() * ImageCategory.length)]}`,
    video: null,
    reacted: {
      liked: false,
    },
    interaction: {
      likes: 0,
      love: 0,
      support: 0,
      celebrate: 0,
      insightful: 0,
      curious: 0,
      laugh: 0,
    },
    comments: [],
    shares: 0
};