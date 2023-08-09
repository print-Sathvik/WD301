import React from "react";
import {
  useMembersDispatch,
  useMembersState,
} from "../../context/members/context";
import { TrashIcon } from "@heroicons/react/24/outline";
import { deleteMember } from "../../context/members/actions";

export default function MemberListItems() {
  let state: any = useMembersState();
  const dispatchMembers = useMembersDispatch();

  const { members, isLoading, isError, errorMessage } = state;
  console.log(members);

  if (members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>{errorMessage}</span>;
  }

  return (
    <>
      {members.map((member: any) => (
        <div
          key={member.id}
          className="member block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <button
            className="float-right"
            onClick={() => deleteMember(dispatchMembers, member.id)}
          >
            <TrashIcon className="h-4 w-4 text-red-600" aria-hidden="true" />
          </button>
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            {member.name}
          </h5>
          <h6 className="mb-2 text-sm tracking-tight text-gray-900 dark:text-white">
            {member.email}
          </h6>
        </div>
      ))}
    </>
  );
}
