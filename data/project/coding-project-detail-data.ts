export interface Feature {
  title: string;
  desc: string;
  pcVideo: string;
}

export const SPOTIFY_FEAT: Feature[] = [
  {
    desc: "Create an account with your email address",
    pcVideo: "/videos/coding-pro/spotify/login-email.mp4",
    title: "Email login",
  },
  {
    desc: "Create an account with your github account",
    pcVideo: "/videos/coding-pro/spotify/login-github.mp4",
    title: "Github login",
  },
  {
    desc: "Add song locally from your computer or phone",
    pcVideo: "/videos/coding-pro/spotify/play-song.mp4",
    title: "Add song",
  },
  {
    desc: "Play uploaded song by all users",
    pcVideo: "/videos/coding-pro/spotify/upload-song.mp4",
    title: "Play song",
  },
];

export const TWITTER_FEAT: Feature[] = [
  {
    desc: "Create an account with a random email address",
    pcVideo: "/videos/coding-pro/twitter/auth/register-email.mp4",
    title: "Email login",
  },
  {
    desc: "Edit your user profile",
    pcVideo: "/videos/coding-pro/twitter/user/edit-user.mp4",
    title: "Edit user",
  },
  {
    desc: "Follow other user on twitter clone",
    pcVideo: "/videos/coding-pro/twitter/user/follow-user.mp4",
    title: "Follow user",
  },
  {
    desc: "Post your tweet on real-time fetching",
    pcVideo: "/videos/coding-pro/twitter/tweet/real-time-tweet.mp4",
    title: "Real-time tweet",
  },
  {
    desc: "Like and comment twitter tweet",
    pcVideo: "/videos/coding-pro/twitter/tweet/like-comment.mp4",
    title: "Engage in tweets",
  },
  {
    desc: "Receive notification about followers and tweet",
    pcVideo: "/videos/coding-pro/twitter/notification/notification.mp4",
    title: "Real-time notification",
  },
];

export const DISCORD_FEAT: Feature[] = [
  {
    desc: "Create an account with your google account",
    pcVideo: "/video/discord/auth/login-google.mp4",
    title: "Google login",
  },
  {
    desc: "Select your theme preferences",
    pcVideo: "/video/discord/theme/light-dark-mode.mp4",
    title: "Change discord theme",
  },
  {
    desc: "Create server with title and image",
    pcVideo: "/video/discord/server/create-server.mp4",
    title: "Create server",
  },
  {
    desc: "Delete server",
    pcVideo: "/video/discord/",
    title: "Delete server",
  },
  {
    desc: "Edit server icon or server name",
    pcVideo: "/video/discord/server/delete-server.mp4",
    title: "Edit server",
  },
  {
    desc: "Invite another user to a server",
    pcVideo: "/video/discord/server/invite-friends.mp4",
    title: "Invite friends",
  },
  {
    desc: "Manage server members role or kick server members",
    pcVideo: "/video/discord/server/manage-members.mp4",
    title: "Manage server members",
  },
  {
    desc: "Create text channel on a server",
    pcVideo: "/video/discord/channel/text/create-channel.mp4",
    title: "Create text channel",
  },
  {
    desc: "Real-time chat with websocket or refetch on 50ms interval",
    pcVideo: "/video/discord/channel/text/real-time-chat.mp4",
    title: "Real-time chat",
  },
  {
    desc: "Real-time audio meeting",
    pcVideo: "/video/discord/channel/audio/voice-meeting.mp4",
    title: "Audio meeting",
  },
  {
    desc: "Real-time video meeting",
    pcVideo: "/video/discord/channel/video/video-meeting.mp4",
    title: "Video meeting",
  },
];
