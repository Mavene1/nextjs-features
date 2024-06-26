import React from "react";

const CRUD = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="text-2xl font-bold mb-4 p-4">CRUD</div>
      <form className="mb-6 p-4 bg-gray-100 rounded-lg">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-r-md hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      </form>
      <form action="" className="mb-6 p-4 bg-gray-100 rounded-lg">
        <h1 className="text-xl font-bold mb-2">Post One</h1>
        <p className="text-gray-700 mb-4">
          In the public cloud model, all the physical hardware, infrastructure,
          and data center management responsibilities are handled by the cloud
          service provider (such as Microsoft Azure, AWS, or Google Cloud). This
          enables organizations to eliminate their on-premises data centers and
          rely entirely on the public cloud provider&apos;s infrastructure.
        </p>
        <button
          type="submit"
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
        >
          Delete
        </button>
      </form>
      <form action="" className="p-4 bg-gray-100 rounded-lg">
        <h1 className="text-xl font-bold mb-2">Post Two</h1>
        <p className="text-gray-700 mb-4">
          In the private cloud model, none of the physical hardware,
          infrastructure, and data center management responsibilities are
          handled by the cloud service provider (such as Microsoft Azure, AWS,
          or Google Cloud). This enables organizations to eliminate their
          on-premises data centers and rely entirely on the public cloud
          provider&apos;s infrastructure.
        </p>
        <button
          type="submit"
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
        >
          Delete
        </button>
      </form>
    </div>
  );
};

export default CRUD;
