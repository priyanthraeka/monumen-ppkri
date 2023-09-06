const Title = ({ children, marginTop, marginBottom, lgMarginBottom }) => {
  return (
    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-yatra-one">
      {children}
    </h1>
  );
};

export default Title;
