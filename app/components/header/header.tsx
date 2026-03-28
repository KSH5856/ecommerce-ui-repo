export const Header = () => {
  return (
    <>
      <div className="h-20 mb-24 z-50 sticky top-0 bg-white flex justify-between items-center px-10">
        <h3>Curator Collective</h3>
        <div className={`flex justify-between items-center w-[34%]`}>
          <h4>Home</h4>
          <h4>About</h4>
          <h4>Cart</h4>
          <h4>Manage Users</h4>
        </div>
        <button>Logout</button>
      </div>
    </>
  );
};
