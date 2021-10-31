export default () => {
  const isProduction = process.env.NODE_ENV === 'production';

  console.log(
    `Getting ${isProduction ? 'production' : 'development'} env variables.`,
  );

  return {
    isProduction,
  };
};
