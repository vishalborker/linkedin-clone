export const POSTS = [
    {
      id: 1,
      author: 'Gerard Butler',
      authorId: 1,
      profileImg: 'https://source.unsplash.com/random/300x300?profile',
      type: 'post',
      postedAt: '2d',
      subtitle: 'Follow me for system design & book-writing tips | Author of System Design Interval how are you there',
      contentText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries.`,
      following: true,
      postPrivacy: 'public',
      image: `https://source.unsplash.com/random/airplane`,
      video: null,
      reacted: {
        liked: true,
      },
      interaction: {
        likes: 5,
        love: 12,
        support: 44,
        celebrate: 19,
        insightful: 12,
        curious: 1
      },
      comments: [
        {
          author: 'Tom Cruise',
          text: 'Final comment'
        }
      ],
      shares: 14
    }, {
      id: 2,
      author: 'Jim Parsley',
      authorId: 2,
      profileImg: 'https://source.unsplash.com/random/300x300?profile',
      type: 'post',
      postedAt: '4d',
      subtitle: 'Follow me for system design & book-writing tips | Author of System Design Interval how are you there',
      contentText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries.`,
      following: false,
      postPrivacy: 'public',
      image: null,
      video: null,
      reacted: {
        liked: true,
      },
      interaction: {
        likes: 0,
        love: 1,
        support: 4,
        celebrate: 9,
        insightful: 2,
        curious: 12
      },
      comments: [],
      shares: 44
    }, {
      id: 3,
      author: 'John Krasinki',
      authorId: 3,
      profileImg: 'https://source.unsplash.com/random/300x300?profile',
      type: 'post',
      postedAt: '7d',
      subtitle: 'Author || TedX Speaker',
      contentText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
      following: false,
      postPrivacy: 'public',
      image: null,
      video: null,
      reacted: {
        liked: true,
      },
      interaction: {
        likes: 0,
        love: 0,
        support: 43,
        celebrate: 91,
        insightful: 22,
        curious: 121
      },
      comments: [],
      shares: 0
    }, {
      id: 4,
      author: 'Priya Tendulkar',
      authorId: 4,
      profileImg: 'https://source.unsplash.com/random/300x300?profile',
      type: 'post',
      postedAt: '1h',
      subtitle: 'Devops Engineer @Microsoft',
      contentText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries.`,
      following: false,
      postPrivacy: 'public',
      image: null,
      video: null,
      reacted: {
        liked: true,
      },
      interaction: {
        likes: 0,
        love: 0,
        support: 0,
        celebrate: 10,
        insightful: 12,
        curious: 31
      },
      comments: [],
      shares: 0
    }, {
      id: 5,
      author: 'Web Dev Simplified',
      authorId: 8,
      profileImg: 'https://source.unsplash.com/random/300x300?profile',
      type: 'post',
      postedAt: '7h',
      subtitle: 'Making web development easy',
      contentText: 'Learn css flexbox quickly, by web dev simplified',
      following: true,
      postPrivacy: 'public',
      image: null,
      video: "https://www.youtube.com/embed/fYq5PXgSsbE",
      reacted: {
        liked: true,
      },
      interaction: {
        likes: 10451,
        love: 0,
        support: 43,
        celebrate: 91,
        insightful: 22,
        curious: 121
      },
      comments: [],
      shares: 1
    }, {
      id: 6,
      author: 'John Krasinki',
      authorId: 3,
      profileImg: 'https://source.unsplash.com/random/300x300?profile',
      type: 'post',
      postedAt: '7h',
      subtitle: 'HR Manager || Hiring Tech Talent',
      contentText: 'My sweet dog, running',
      following: true,
      postPrivacy: 'public',
      image: 'https://source.unsplash.com/random/700x600?dogs',
      video: null,
      reacted: {
        liked: true,
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
      shares: 200
    }
  ]