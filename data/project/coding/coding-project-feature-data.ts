export interface Feature {
  title: string;
  description: string;
  video: string;
}

export const SPOTIFY_FEAT: Feature[] = [
  {
    description: "Create an account with your email address",
    video: "/video/coding-pro/spotify/login-email.mp4",
    title: "Email login",
  },
  {
    description: "Create an account with your github account",
    video: "/video/coding-pro/spotify/login-github.mp4",
    title: "Github login",
  },
  {
    description: "Add song locally from your computer or phone",
    video: "/video/coding-pro/spotify/play-song.mp4",
    title: "Add song",
  },
  {
    description: "Play uploaded song by all users",
    video: "/video/coding-pro/spotify/upload-song.mp4",
    title: "Play song",
  },
];

export const TWITTER_FEAT: Feature[] = [
  {
    description: "Create an account with a random email address",
    video: "/video/coding-pro/twitter/auth/register-email.mp4",
    title: "Email login",
  },
  {
    description: "Edit your user profile",
    video: "/video/coding-pro/twitter/user/edit-user.mp4",
    title: "Edit user",
  },
  {
    description: "Follow other user on twitter clone",
    video: "/video/coding-pro/twitter/user/follow-user.mp4",
    title: "Follow user",
  },
  {
    description: "Post your tweet on real-time fetching",
    video: "/video/coding-pro/twitter/tweet/real-time-tweet.mp4",
    title: "Real-time tweet",
  },
  {
    description: "Like and comment twitter tweet",
    video: "/video/coding-pro/twitter/tweet/like-comment.mp4",
    title: "Engage in tweets",
  },
  {
    description: "Receive notification about followers and tweet",
    video: "/video/coding-pro/twitter/notification/notification.mp4",
    title: "Real-time notification",
  },
];

export const DISCORD_FEAT: Feature[] = [
  {
    description: "Create an account with your google account",
    video: "/video/discord/auth/login-google.mp4",
    title: "Google login",
  },
  {
    description: "Select your theme preferences",
    video: "/video/discord/theme/light-dark-mode.mp4",
    title: "Change discord theme",
  },
  {
    description: "Create server with title and image",
    video: "/video/discord/server/create-server.mp4",
    title: "Create server",
  },
  {
    description: "Delete server",
    video: "/video/discord/",
    title: "Delete server",
  },
  {
    description: "Edit server icon or server name",
    video: "/video/discord/server/delete-server.mp4",
    title: "Edit server",
  },
  {
    description: "Invite another user to a server",
    video: "/video/discord/server/invite-friends.mp4",
    title: "Invite friends",
  },
  {
    description: "Manage server members role or kick server members",
    video: "/video/discord/server/manage-members.mp4",
    title: "Manage server members",
  },
  {
    description: "Create text channel on a server",
    video: "/video/discord/channel/text/create-channel.mp4",
    title: "Create text channel",
  },
  {
    description: "Real-time chat with websocket or refetch on 50ms interval",
    video: "/video/discord/channel/text/real-time-chat.mp4",
    title: "Real-time chat",
  },
  {
    description: "Real-time audio meeting",
    video: "/video/discord/channel/audio/voice-meeting.mp4",
    title: "Audio meeting",
  },
  {
    description: "Real-time video meeting",
    video: "/video/discord/channel/video/video-meeting.mp4",
    title: "Video meeting",
  },
];
