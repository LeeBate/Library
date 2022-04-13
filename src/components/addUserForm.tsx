import React, { useState } from "react";
import { IBaseUser } from "./interface";
interface IProps {
  onAddUser: (user: IBaseUser) => void;
}
const initUser = { uid:"", uname: "", ubook: "", age: "", };
const AddUserForm: React.FunctionComponent<IProps> = props => {
  const [formValue, setFormValue] = useState(initUser);
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const rules = [
      { key: "uid", required: true, label: "uid" },
      { key: "uname", required: true, label: "uname" },
      { key: "ubook", required: true, label: "ubook" },
      { key: "age", required: true, label: "Age" },
      { key: "name", maxLength: 16, label: "name" },
      
    ];
    
  };
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <div className="user-form">
      <h1>เพิ่มข้อมูล</h1>
      <form className="form-edit" onSubmit={onFormSubmit}>
        <div className="form-row">
          <label>รหัสนักศึกษาหรือพนักงาน</label>
          <input
            type="text"
            placeholder="รหัสนักศึกษาหรือพนักงาน"
            name="uid"
            value={formValue.uid}
            onChange={onInputChange}
          />
        </div>
        <div className="form-row">
          <label>ชื่อคนยืม</label>
          <input
            type="text"
            placeholder="ชื่อคนยืม"
            name="uname"
            value={formValue.uname}
            onChange={onInputChange}
          />
        </div>
        <div className="form-row">
          <label>ชื่อหนังสือ</label>
          <input
            type="text"
            placeholder="ชื่อหนังสือ"
            name="ubook"
            value={formValue.ubook}
            onChange={onInputChange}
          />
        
        </div>
        <div className="form-row">
          <label>อายุ</label>
          <input
            type="number"
            placeholder="อายุ"
            name="age"
            value={formValue.age}
            onChange={onInputChange}
          />
        </div>
        <div className="form-row">
          <button>เพิ่มข้อมูล</button>
        </div>
      </form>
    </div>
  );
};
export default AddUserForm;
