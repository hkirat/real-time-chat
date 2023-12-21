import React from "react";
import AllChats from "../components/AllChats";
import ImportantChats from "../components/ImportantChats";
import VeryImportantChats from "../components/VeryImportantChats";

export default function Home() {
  const messages = [
    {
      sender: "user 1",
      messageOwner: false,
      text: "hii this is my message",
      upvote: 0,
      userAvatar:
        "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    {
      sender: "user 2",
      messageOwner: false,
      text: "hii this is my message 2",
      upvote: 2,
      userAvatar:
        "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    {
      sender: "user 3",
      messageOwner: true,
      text: "hii this is my message 3",
      upvote: 0,
      userAvatar:
        "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    {
      sender: "user 1",
      messageOwner: false,
      text: "hii this is my message 4",
      upvote: 1,
      userAvatar:
        "https://as1.ftcdn.net/v2/jpg/02/37/99/02/1000_F_237990255_1aEQWdxPgdLMVlXEVdPllr1D5VBkmYde.jpg",
    },
    {
      sender: "user 3",
      messageOwner: true,
      text: "hii this is my message 3",
      upvote: 0,
      userAvatar:
        "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    {
      sender: "user 1",
      messageOwner: false,
      text: "hii this is my message 4",
      upvote: 3,
      userAvatar:
        "https://as1.ftcdn.net/v2/jpg/02/37/99/02/1000_F_237990255_1aEQWdxPgdLMVlXEVdPllr1D5VBkmYde.jpg",
    },
    {
      sender: "user 3",
      messageOwner: true,
      text: "hii this is my message 3",
      upvote: 4,
      userAvatar:
        "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    {
      sender: "user 1",
      messageOwner: false,
      text: "hii this is my message 4",
      upvote: 0,
      userAvatar:
        "https://as1.ftcdn.net/v2/jpg/02/37/99/02/1000_F_237990255_1aEQWdxPgdLMVlXEVdPllr1D5VBkmYde.jpg",
    },
    {
      sender: "user 3",
      messageOwner: true,
      text: "hii this is my message 3",
      upvote: 50,
      userAvatar:
        "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    {
      sender: "user 1",
      messageOwner: false,
      text: "hii this is my message 4",
      upvote: 0,
      userAvatar:
        "https://as1.ftcdn.net/v2/jpg/02/37/99/02/1000_F_237990255_1aEQWdxPgdLMVlXEVdPllr1D5VBkmYde.jpg",
    },
    {
      sender: "user 3",
      messageOwner: true,
      text: "hii this is my message 3",
      upvote: 10,
      userAvatar:
        "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    {
      sender: "user 1",
      messageOwner: false,
      text: "hii this is my message 4",
      upvote: 3,
      userAvatar:
        "https://as1.ftcdn.net/v2/jpg/02/37/99/02/1000_F_237990255_1aEQWdxPgdLMVlXEVdPllr1D5VBkmYde.jpg",
    },
    {
      sender: "user 3",
      messageOwner: true,
      text: "hii this is my message 3",
      upvote: 10,
      userAvatar:
        "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    {
      sender: "user 3",
      messageOwner: true,
      text: "hii this is my message 3",
      upvote: 10,
      userAvatar:
        "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    {
      sender: "user 1",
      messageOwner: false,
      text: "hii this is my message 4",
      upvote: 3,
      userAvatar:
        "https://as1.ftcdn.net/v2/jpg/02/37/99/02/1000_F_237990255_1aEQWdxPgdLMVlXEVdPllr1D5VBkmYde.jpg",
    },
    {
      sender: "user 3",
      messageOwner: true,
      text: "hii this is my message 3",
      upvote: 10,
      userAvatar:
        "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    {
      sender: "user 3",
      messageOwner: true,
      text: "hii this is my message 3",
      upvote: 10,
      userAvatar:
        "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    {
      sender: "user 1",
      messageOwner: false,
      text: "hii this is my message 4",
      upvote: 3,
      userAvatar:
        "https://as1.ftcdn.net/v2/jpg/02/37/99/02/1000_F_237990255_1aEQWdxPgdLMVlXEVdPllr1D5VBkmYde.jpg",
    },
    {
      sender: "user 3",
      messageOwner: true,
      text: "hii this is my message 3",
      upvote: 10,
      userAvatar:
        "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    {
      sender: "user 3",
      messageOwner: true,
      text: "hii this is my message 3",
      upvote: 10,
      userAvatar:
        "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    {
      sender: "user 1",
      messageOwner: false,
      text: "hii this is my message 4",
      upvote: 3,
      userAvatar:
        "https://as1.ftcdn.net/v2/jpg/02/37/99/02/1000_F_237990255_1aEQWdxPgdLMVlXEVdPllr1D5VBkmYde.jpg",
    },
    {
      sender: "user 3",
      messageOwner: true,
      text: "hii this is my message 3",
      upvote: 10,
      userAvatar:
        "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    {
      sender: "user 3",
      messageOwner: true,
      text: "hii this is my message 3",
      upvote: 10,
      userAvatar:
        "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    {
      sender: "user 1",
      messageOwner: false,
      text: "hii this is my message 4",
      upvote: 3,
      userAvatar:
        "https://as1.ftcdn.net/v2/jpg/02/37/99/02/1000_F_237990255_1aEQWdxPgdLMVlXEVdPllr1D5VBkmYde.jpg",
    },
    {
      sender: "user 3",
      messageOwner: true,
      text: "hii this is my message 3",
      upvote: 10,
      userAvatar:
        "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    {
      sender: "user 3",
      messageOwner: true,
      text: "hii this is my message 3",
      upvote: 10,
      userAvatar:
        "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    {
      sender: "user 1",
      messageOwner: false,
      text: "hii this is my message 4",
      upvote: 3,
      userAvatar:
        "https://as1.ftcdn.net/v2/jpg/02/37/99/02/1000_F_237990255_1aEQWdxPgdLMVlXEVdPllr1D5VBkmYde.jpg",
    },
    {
      sender: "user 3",
      messageOwner: true,
      text: "hii this is my message 3",
      upvote: 10,
      userAvatar:
        "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    {
      sender: "user 3",
      messageOwner: true,
      text: "hii this is my message 3",
      upvote: 10,
      userAvatar:
        "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    {
      sender: "user 1",
      messageOwner: false,
      text: "hii this is my message 4",
      upvote: 3,
      userAvatar:
        "https://as1.ftcdn.net/v2/jpg/02/37/99/02/1000_F_237990255_1aEQWdxPgdLMVlXEVdPllr1D5VBkmYde.jpg",
    },
    {
      sender: "user 3",
      messageOwner: true,
      text: "hii this is my message 3",
      upvote: 10,
      userAvatar:
        "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    {
      sender: "user 1",
      messageOwner: false,
      text: "hii this is my message 4",
      upvote: 0,
      userAvatar:
        "https://as1.ftcdn.net/v2/jpg/02/37/99/02/1000_F_237990255_1aEQWdxPgdLMVlXEVdPllr1D5VBkmYde.jpg",
    },
    {
      sender: "user 3",
      messageOwner: true,
      text: "hii this is my message 3",
      upvote: 5,
      userAvatar:
        "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    {
      sender: "user 1",
      messageOwner: false,
      text: "hii this is my message 4",
      upvote: 0,
      userAvatar:
        "https://as1.ftcdn.net/v2/jpg/02/37/99/02/1000_F_237990255_1aEQWdxPgdLMVlXEVdPllr1D5VBkmYde.jpg",
    },
    {
      sender: "user 3",
      messageOwner: true,
      text: "hii this is my message 3 la wgf wa gawhgew h rh dr hd h drh drh  drh r h SEh e she sh es he sh es hes h esh se h se he sh es hes h seh seh esheshesheshes hse h se h",
      upvote: 3,
      userAvatar:
        "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    {
      sender: "user 1",
      messageOwner: false,
      text: "hii this is my message 4",
      upvote: 5,
      userAvatar:
        "https://as1.ftcdn.net/v2/jpg/02/37/99/02/1000_F_237990255_1aEQWdxPgdLMVlXEVdPllr1D5VBkmYde.jpg",
    },
    {
      sender: "user 3",
      messageOwner: true,
      text: "hii this is my message 3",
      upvote: 3,
      userAvatar:
        "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    {
      sender: "user 1",
      messageOwner: false,
      text: "hii this is my message 4",
      upvote: 3,
      userAvatar:
        "https://as1.ftcdn.net/v2/jpg/02/37/99/02/1000_F_237990255_1aEQWdxPgdLMVlXEVdPllr1D5VBkmYde.jpg",
    },
  ];
  return (
    <div className="__home h-[calc(100dvh-60px)] flex">
      <AllChats messages={messages} />
      <ImportantChats messages={messages} />
      <VeryImportantChats messages={messages} />
    </div>
  );
}
