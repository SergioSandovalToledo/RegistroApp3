module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'd8dab3dd2bbc2bb9f3aa17ddfa3d385a'),
    },
  },
});
