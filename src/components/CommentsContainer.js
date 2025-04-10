import React from "react";

const commentsData = [
  {
    id: 1,
    name: "Roy",
    text: "loremm what is this.",
    replies: [
      { id: 2, name: "Dwayne", text: "loremm what is this.", replies: [] },
      { id: 3, name: "Rock", text: "loremm what is this.", replies: [] },
      { id: 4, name: "Bruce", text: "loremm what is this.", replies: [] },
    ],
  },
  {
    id: 5,
    name: "Maxx",
    text: "loremm what is this.",
    replies: [
      { id: 6, name: "Kate", text: "loremm what is this.", replies: [] },
      {
        id: 7,
        name: "Sam",
        text: "loremm what is this.",
        replies: [
          { id: 8, name: "Dexter", text: "loremm what is this.", replies: [] },
          { id: 9, name: "Sheldon", text: "loremm what is this.", replies: [] },
          { id: 10, name: "Joe", text: "loremm what is this.", replies: [] },
        ],
      },
      { id: 11, name: "Chris", text: "loremm what is this.", replies: [] },
    ],
  },
  { id: 12, name: "Max", text: "loremm what is this.", replies: [] },
  { id: 13, name: "Evans", text: "loremm what is this.", replies: [] },
  {
    id: 14,
    name: "Sojin",
    text: "loremm what is this.",
    replies: [
      { id: 15, name: "Brad", text: "loremm what is this.", replies: [] },
      { id: 16, name: "Leonardo", text: "loremm what is this.", replies: [] },
      { id: 17, name: "Lorem", text: "loremm what is this.", replies: [] },
    ],
  },
];

const Comment = ({ data }) => {
  const { text, name, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-200 my-2 p-2 rounded-lg">
      <img
        src="https://tse2.mm.bing.net/th?id=OIP.Crq9sn3Qu3HyHwPJi2zW8QHaHa&pid=Api&P=0&h=180"
        alt="user"
        className="h-10 rounded-full"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 ">
      <h1 className="font-bold  text-xl">Comments :</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
