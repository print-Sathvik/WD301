import React, { useEffect, useReducer } from "react";
import { fetchMembers } from "../../context/members/actions";
import { useMembersDispatch } from "../../context/members/context";
import MemberListItems from "./MemberListItems";

export interface Member {
  id: number;
  name: string;
  email: string;
  organisation_id?: string;
}

const MemberList: React.FC = () => {
  const dispatchMembers = useMembersDispatch();

  useEffect(() => {
    fetchMembers(dispatchMembers);
  }, []);

  return (
    <div className="grid gap-4 grid-cols-4 mt-5">
      <MemberListItems />
    </div>
  );
};

export default MemberList;
