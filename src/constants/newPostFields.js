import { USER_DETAILS } from "./user";

export const NEW_POST_FIELDS = {
    author: USER_DETAILS.username,
    authorId: USER_DETAILS.id,
    profileImg: USER_DETAILS.profileImg,
    subtitle: USER_DETAILS.subtitle,
    type: 'post',
    following: true,
    postPrivacy: 'public',
    image: null,
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
      curious: 0
    },
    comments: [],
    shares: 0
};