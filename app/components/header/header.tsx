import Link from "next/link";

export const Header = () => {
  return (
    <>
      <div className="h-20 mb-24 z-50 sticky top-0 bg-white flex justify-between items-center px-10">
        <h3>Curator Collective</h3>
        <div className={`flex justify-between items-center w-[34%]`}>
          <h4><Link href="/">Home</Link></h4>
          <h4><Link href="/shop">Shop All</Link></h4>
          <h4><Link href="/about">About</Link></h4>
          <h4><Link href="/cart">Cart</Link></h4>
          <h4><Link href="/manage-users">Manage Users</Link></h4>
        </div>
        <button>Logout</button>
      </div>
    </>
  );
};
