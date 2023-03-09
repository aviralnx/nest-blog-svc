export default () => ({
  mongo_url: process.env.MONGO_URL || 'mongodb://localhost:27017/nest-blog-svc',
  port: parseInt(process.env.PORT) || 3333,
  node_env: process.env.NODE_ENV || 'local',
  jwt_secret: 'super_secret_key_to_protect_this_dummy_service',
  jwt_expire: '60m',
});
