export default {
    name: 'postedBy',
    title: 'PostedBy',
    type: 'reference',//connect to difference documents
    to: [{ type: 'user' }], //1 user can post multiple comments and we can keep track of who posted it
  };