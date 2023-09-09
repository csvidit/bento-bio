const Footer = () => {
  return (
    <div className="col-span-4 flex flex-row space-x-4 items-center row-span-1 bg-transparent text-gray-800 rounded-2xl">
      <div className="w-fit">
        &copy; {new Date().getFullYear()} Vidit Khandelwal. All rights reserved.
        All wrongs reserved, too.
      </div>
      <div className="grow border-b border-b-gray-600" />
    </div>
  );
};

export default Footer;
