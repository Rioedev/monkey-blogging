import DashboardHeading from "../dashboard/DashboardHeading";
import { useState } from "react";
import UserTable from "./UserTable";
import Button from "../../components/button/Button";
import { userRole } from "../../utils/constants";
import { useAuth } from "../../contexts/auth-context";

const UserManage = () => {
  const { userInfo } = useAuth();
  if (userInfo.role !== userRole.ADMIN) return null;
  return (
    <div>
      <DashboardHeading title="Users" desc="Manage your user">
        <Button kind="ghost" height="60px" to="/manage/add-user">
          Add new user
        </Button>
      </DashboardHeading>
      <UserTable></UserTable>
    </div>
  );
};

export default UserManage;
