export default () => ({
  mongo_url: process.env.MONGO_URL || 'mongodb://localhost:27017/nest-blog-svc',
});
