export const Header = () => {
  return (
    <>
      <div className="h-20 mb-24 z-50 sticky top-0 bg-white flex justify-between items-center px-10">
        <h2>Curator Collective</h2>
        <div className={`flex justify-between items-center w-[34%]`}>
          <h3>Home</h3>
          <h3>About</h3>
          <h3>Cart</h3>
          <h3>Manage Users</h3>
        </div>
        <button>Logout</button>
      </div>
    </>
  );
};
