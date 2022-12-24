
export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
      {
        name: 'caption',
        title: 'Caption',
        type: 'string',
      },
      {
        name: 'video',
        title: 'Video',
        type: 'file',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'userId',
        title: 'UserId',
        type: 'string',
      },
      {
        name: 'postedBy',
        title: 'PostedBy',
        type: 'postedBy',
      },
      {
        name: 'likes',
        title: 'Likes',
        type: 'array',
        of: [ //an array of reference to the user that liked a post
          {
            type: 'reference',
            to: [{ type: 'user' }],
          },
        ],
      },
      {
        name: 'comments',
        title: 'Comments',
        type: 'array', //aray of comments
        of: [{ type: 'comment' }],
      },
      {
        name: 'topic', //categories
        title: 'Topic',
        type: 'string',
      },
    ],
  };