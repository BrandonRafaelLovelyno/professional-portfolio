export interface Feature {
  title: string;
  description: string;
  video: string;
}

export const SPOTIFY_FEAT: Feature[] = [
  {
    description: "Create an account with your email address",
    video: "/video/project/spotify/login-email.mp4",
    title: "Email login",
  },
  {
    description: "Create an account with your github account",
    video: "/video/project/spotify/login-github.mp4",
    title: "Github login",
  },
  {
    description: "Add song locally from your computer or phone",
    video: "/video/project/spotify/play-song.mp4",
    title: "Add song",
  },
  {
    description: "Play uploaded song by all users",
    video: "/video/project/spotify/upload-song.mp4",
    title: "Play song",
  },
];

export const OUTFITAI_FEAT: Feature[] = [
  {
    description: "Upload your image to detect clothing",
    video: "/video/project/outfit-ai/classify-cloth.mp4",
    title: "Classify clothing into 13 classes",
  }
]

export const TWITTER_FEAT: Feature[] = [
  {
    description: "Create an account with a random email address",
    video: "/video/project/twitter/auth/register-email.mp4",
    title: "Email login",
  },
  {
    description: "Edit your user profile",
    video: "/video/project/twitter/user/edit-user.mp4",
    title: "Edit user",
  },
  {
    description: "Follow other user on twitter clone",
    video: "/video/project/twitter/user/follow-user.mp4",
    title: "Follow user",
  },
  {
    description: "Post your tweet on real-time fetching",
    video: "/video/project/twitter/tweet/real-time-tweet.mp4",
    title: "Real-time tweet",
  },
  {
    description: "Like and comment twitter tweet",
    video: "/video/project/twitter/tweet/like-comment.mp4",
    title: "Engage in tweets",
  },
  {
    description: "Receive notification about followers and tweet",
    video: "/video/project/twitter/notification/notification.mp4",
    title: "Real-time notification",
  },
];

export const DISCORD_FEAT: Feature[] = [
  {
    description: "Create an account with your google account",
    video: "/video/project/discord/auth/login-google.mp4",
    title: "Google login",
  },
  {
    description: "Select your theme preferences",
    video: "/video/project/discord/theme/light-dark-mode.mp4",
    title: "Change discord theme",
  },
  {
    description: "Create server with title and image",
    video: "/video/project/discord/server/create-server.mp4",
    title: "Create server",
  },
  {
    description: "Delete server",
    video: "/video/project/discord/server/delete-server.mp4",
    title: "Delete server",
  },
  {
    description: "Edit server icon or server name",
    video: "/video/project/discord/server/edit-server.mp4",
    title: "Edit server",
  },
  {
    description: "Invite another user to a server",
    video: "/video/project/discord/server/invite-friends.mp4",
    title: "Invite friends",
  },
  {
    description: "Manage server members role or kick server members",
    video: "/video/project/discord/server/manage-members.mp4",
    title: "Manage server members",
  },
  {
    description: "Create text channel on a server",
    video: "/video/project/discord/channel/text/create-channel.mp4",
    title: "Create text channel",
  },
  {
    description: "Real-time chat with websocket or refetch on 50ms interval",
    video: "/video/project/discord/channel/text/real-time-chat.mp4",
    title: "Real-time chat",
  },
  {
    description: "Real-time audio meeting",
    video: "/video/project/discord/channel/audio/voice-meeting.mp4",
    title: "Audio meeting",
  },
  {
    description: "Real-time video meeting",
    video: "/video/project/discord/channel/video/video-meeting.mp4",
    title: "Video meeting",
  },
];
