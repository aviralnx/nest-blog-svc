export default () => ({
  mongo_url: process.env.MONGO_URL || 'mongodb://localhost:27017/nest-blog-svc',
  port: parseInt(process.env.PORT) || 3333,
  node_env: process.env.NODE_ENV || 'local',
});
