
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['9fUouC7vNJvkh3DAt57huv'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  