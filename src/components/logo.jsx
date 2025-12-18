import React from "react";

const Logo = () => {
  return (
    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white flex items-center justify-center">
     <img src="/logo.png" alt="logo" height={80} width={80} />
    </div>
  );
};

export default Logo;