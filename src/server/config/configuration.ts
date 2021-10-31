type ConfigType = {
  isProduction: boolean;
  playground: boolean;
};

export default (): ConfigType => {
  const isProduction = process.env.NODE_ENV === 'production';

  console.log(
    `Getting ${isProduction ? 'production' : 'development'} env variables.`,
  );

  return {
    isProduction,
    playground: !isProduction,
  };
};
