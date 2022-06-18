import { v4 } from 'uuid';
export const POSTS = [
    {
      id: v4(),
      author: 'Gerard Butler',
      authorId: 1,
      profileImg: 'https://source.unsplash.com/random/300x300?profile',
      type: 'post',
      postedAt: '2d',
      subtitle: 'Professional Photographer | graphics designer',
      contentText: `“Taking pictures is savoring life intensely, every hundredth of a second.”`,
      following: true,
      postPrivacy: 'public',
      image: `https://source.unsplash.com/random/airplane`,
      video: null,
      reacted: {
        liked: true,
      },
      interaction: {
        likes: 5,
        laugh: 3,
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
      id: v4(),
      author: 'Jim Parsley',
      authorId: 2,
      profileImg: 'https://source.unsplash.com/random/300x300?profile',
      type: 'post',
      postedAt: '4d',
      subtitle: 'Data Scientist | Data Engineering',
      contentText: `You can learn DSA for free from websites like W3Schools, GeeksforGeeks, Freecodecamp and many more. 
      You can also learn from courses which you can buy from linkedin premium`,
      following: false,
      postPrivacy: 'public',
      image: null,
      video: null,
      file: 'https://www.cs.bham.ac.uk/~jxb/DSA/dsa.pdf',
      reacted: {
        liked: true,
      },
      interaction: {
        likes: 0,
        love: 1,
        laugh: 0,
        support: 4,
        celebrate: 9,
        insightful: 2,
        curious: 12
      },
      comments: [],
      shares: 44
    }, {
      id: v4(),
      author: 'John Krasinki',
      authorId: 3,
      profileImg: 'https://source.unsplash.com/random/300x300?profile',
      type: 'post',
      postedAt: '7d',
      subtitle: 'Author || TedX Speaker',
      contentText: `In the spirit of ideas worth spreading, TED has created a program called TEDx. 
      TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. 
      Our event is called TEDxLarnaca, where x = independently organized TED event. 
      At our TEDxLarnaca event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. 
      The TED Conference provides general guidance for the TEDx program, but individual TEDx events, 
      including ours, are self-organized.`,
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
        laugh: 23,
        support: 43,
        celebrate: 91,
        insightful: 22,
        curious: 121
      },
      comments: [],
      shares: 0
    }, {
      id: v4(),
      author: 'Priya Tendulkar',
      authorId: 4,
      profileImg: 'https://source.unsplash.com/random/300x300?profile',
      type: 'post',
      postedAt: '1h',
      subtitle: 'Devops Engineer @Microsoft',
      contentText: `Infrastructure as Code (IaC) is an important part of Cloud Applications. 
      Developers rely on various Static Application Security Testing (SAST) tools to identify 
      security/compliance issues and mitigate these issues early on, 
      before releasing their applications to production. Additionally, 
      SAST tools often provide reporting mechanisms that can help developers verify compliance during security reviews. 
      cdk-nag integrates`,
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
        laugh: 100,
        support: 0,
        celebrate: 10,
        insightful: 12,
        curious: 31
      },
      comments: [],
      shares: 0
    }, {
      id: v4(),
      author: 'Web Dev Simplified',
      authorId: 8,
      profileImg: 'https://source.unsplash.com/random/300x300?profile',
      type: 'post',
      postedAt: '7h',
      subtitle: 'Making web development easy',
      contentText: 'Learn CSS flexbox quickly, by Web Dev Simplified',
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
        laugh: 3,
        support: 43,
        celebrate: 91,
        insightful: 22,
        curious: 121
      },
      comments: [],
      shares: 1
    }, {
      id: v4(),
      author: 'John Krasinki',
      authorId: 3,
      profileImg: 'https://source.unsplash.com/random/300x300?profile',
      type: 'post',
      postedAt: '7h',
      subtitle: 'HR Manager || Hiring Tech Talent',
      contentText: 'Our dogs day out! Looking forward to this day!',
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
        laugh: 0,
        support: 0,
        celebrate: 0,
        insightful: 0,
        curious: 0
      },
      comments: [],
      shares: 200
    }
  ]