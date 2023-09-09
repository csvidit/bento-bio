const MainContent = (props: { children: React.ReactNode }) => {
  return (
    <div className="p-8 grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-8 w-screen lg:w-8/12 h-full">
      {props.children}
    </div>
  );
};

export default MainContent;