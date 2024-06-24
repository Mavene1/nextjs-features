import React from "react";

const CRUD = () => {
  return (
    <div>
      CRUD
      <form>
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </form>
      <form action="">
        <h1>Post One</h1>
        <p>
          In the public cloud model, all the physical hardware, infrastructure,
          and data center management responsibilities are handled by the cloud
          service provider (such as Microsoft Azure, AWS, or Google Cloud). This
          enables organizations to eliminate their on-premises data centers and
          rely entirely on the public cloud provider&apos;s infrastructure.
        </p>
        <button>Delete</button>
      </form>
      <form action="">
        <h1>Post Two</h1>
        <p>
          In the private cloud model, none of the physical hardware, infrastructure,
          and data center management responsibilities are handled by the cloud
          service provider (such as Microsoft Azure, AWS, or Google Cloud). This
          enables organizations to eliminate their on-premises data centers and
          rely entirely on the public cloud provider&apos;s infrastructure.
        </p>
        <button>Delete</button>
      </form>
    </div>
  );
};

export default CRUD;
