const MainLinkIcon = (props: { children: React.ReactNode }) => {
  return (
    <div className="group-hover:rotate-6 transition-all duration-200 ease-in-out">
      {props.children}
    </div>
  );
};

export default MainLinkIcon;