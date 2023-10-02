import React, { useEffect, useState } from "react";

const CapsuleForm = ({ capsule }: any) => {
  return (
    <div className=" pl-5 pr-5">
      <div className="mb-4 ">
        <label
          htmlFor="capsule_id"
          className="block text-sm font-medium text-gray-700"
        >
          Capsule ID
        </label>
        <input
          type="text"
          id="capsule_id"
          name="capsule_id"
          value={capsule.capsule_id}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="capsule_serial"
          className="block text-sm font-medium text-gray-700"
        >
          Capsule Serial
        </label>
        <input
          type="text"
          id="capsule_serial"
          name="capsule_serial"
          value={capsule.capsule_serial}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="details"
          className="block text-sm font-medium text-gray-700"
        >
          Details
        </label>
        <textarea
          id="details"
          name="details"
          value={capsule.details}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="landings"
          className="block text-sm font-medium text-gray-700"
        >
          Landings
        </label>
        <input
          type="number"
          id="landings"
          name="landings"
          value={capsule.landings}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="original_launch"
          className="block text-sm font-medium text-gray-700"
        >
          Original Launch
        </label>
        <input
          type="text"
          id="original_launch"
          name="original_launch"
          value={capsule.original_launch}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="reuse_count"
          className="block text-sm font-medium text-gray-700"
        >
          Reuse Count
        </label>
        <input
          type="number"
          id="reuse_count"
          name="reuse_count"
          value={capsule.reuse_count}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="status"
          className="block text-sm font-medium text-gray-700"
        >
          Status
        </label>
        <input
          type="text"
          id="status"
          name="status"
          value={capsule.status}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>
      <div className="">
        <label
          htmlFor="type"
          className="block text-sm font-medium text-gray-700"
        >
          Type
        </label>
        <input
          type="text"
          id="type"
          name="type"
          value={capsule.type}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>
    </div>
  );
};

export default CapsuleForm;
