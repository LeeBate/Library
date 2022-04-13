import React from "react";
import { IUser } from "./interface";

interface IProps {
  users: Array<IUser>;
  onEdit: (user: IUser) => void;
  onDelete: (user: IUser) => void;
}

const UserTable: React.FunctionComponent<IProps> = (props) => {
  return (
    <div className="user-table">
      <h1>View users</h1>
      <table>
        <thead>
          <tr>
            <th>รหัสนักศึกษาหรือพนักงาน</th>
            <th>ชื่อคนยืม</th>
            <th>ชื่อหนังสือ</th>
            <th>อายุ</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};
export default UserTable;
