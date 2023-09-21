import "./TableData.scss"; // CSS 

import { useState } from "react";
import { useSelector , useDispatch } from "react-redux";
// import { removeUser } from "../../services/users";
import { Table , Checkbox , Space , Button , Layout , Modal , Form , Input , Typography , Radio , Select } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { TableRowSelection } from 'antd/es/table/interface';

const { Text } = Typography;

interface UserData {
  id : number,
  key : string,
  prefix : string,
  firstname : string,
  lastname : string,
  birthday : string,
  nationality : string,
  id_card_member : string,
  gender : string,
  phone_number : string,
  passport : string,
  salary : string
};

interface DataType {
  key : React.Key;
  firstname : string;
  gender : string;
  phone_number : string;
  nationality : string,
  management : string
};

// interface EditData {
//   firstname : string,
//   gender : string,
//   phone_number : string,
//   nationality : string,
// };

// Icons
import { DeleteOutlined , EditOutlined } from '@ant-design/icons';

 // Data
  const data : DataType[] = [
    {
      key : '1',
      firstname : 'กาโล่',
      gender : 'ผู้ชาย',
      phone_number : '0989878765',
      nationality : 'ไทย',
      management : 'จัดการ'
    },
    {
      key: '3',
      firstname : 'ฮานีย์',
      gender : 'ผู้หญิง',
      phone_number : '0989874321',
      nationality : 'ต่างชาติ',
      management : 'จัดการ'
    },{
      key: '4',
      firstname : 'คาริน',
      gender : 'ไม่ระบุ',
      phone_number : '0989874321',
      nationality : 'ต่างชาติ',
      management : 'จัดการ'
    },
  ];

export default function TableData({ t , todos , setTodos } : any) {

  const [ checkStrictly, setCheckStrictly ] = useState<boolean>(false);
  const [ showEdit , setShowEdit ] = useState<boolean>(false);
  const [ editingUser , setEditingUser ] = useState("");
  const [ gender , setGender ] = useState<string>("");

  const users = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  // Title In Table
  const columns : ColumnsType<DataType> = [
    {
      title: t("app.table.firstname"),
      dataIndex: 'firstname',
      sorter: (a, b) => a.firstname.length - b.firstname.length,
    },{
      title: t("app.table.gender"),
      dataIndex: 'gender',
      filters: [
        { text: 'ผู้ชาย', value: 'male' },
        { text: 'ผู้หญิง', value: 'female' },
        { text: 'ไม่ระบุ', value: 'none' },
      ],
    },{
      title: t("app.table.phone_number"),
      dataIndex: 'phone_number',
      sorter: (a, b) => a.firstname.length - b.firstname.length,
    },{
      title: t("app.table.nationality"),
      dataIndex: 'nationality',
      filters: [
        { text: 'ไทย', value: 'ไทย' },
        { text: 'ต่างชาติ', value: 'ต่างชาติ' },
      ],
    },{
      title: t("app.table.management"),
      key : 'action',
      render : (_ , record) => (
        <Space size="middle">
          <Button onClick={() => editUser(record)}>
            <EditOutlined style={{ color : "var(--mainColor)" }} />
          </Button>
          <Button onClick={() => deleteUser(record)}>
            <DeleteOutlined style={{ color : "#eb2f96" }} />
          </Button>
        </Space>
      )
    }
  ];
  
  // const storageData = localStorage.getItem("users") || "";
  // const data = !localStorage.getItem("users") ? [] : JSON.parse(storageData);
  
  // Remove User
  const deleteUser = (record : any) => {
    // dispatch(removeUser({ id : record.id }));
    Modal.confirm({
      title : t("app.etc.confirm_delete"),
      okText : t("app.etc.ok"),
      cancelText : t("app.etc.cancel"),
      onOk : () => {
        setTodos((prev : any) => {
          return prev.filter((todo : UserData) => todo.key !== record.key);
        });
      }
    })
  };

  // Edit 
  const editUser = (record : any) => {
    setShowEdit(true);
    setEditingUser({...record});
  };

  const resetEditUser = () => {
    setShowEdit(false);
    setEditingUser(null);
  };
  
  // Select All In Table
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.firstname === 'Disabled User', // Column configuration not to be checked
      name: record.firstname,
    }),
  };

  // Select All Outside Table
  const checkSelectAll = () => {
    const rowSelection : TableRowSelection<DataType> = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
      },
    };
    console.log(rowSelection);
    setCheckStrictly(!checkStrictly);
  };

  // For Select Change
  const handleChange = (value: string) => {
    setEditingUser((prev) => {
      return {...prev , nationality : value}
    })
  };

  return (
    <Layout className='table-data-container'>
        <Space direction='horizontal' style={{ padding : "12px 0" }}>
            <Checkbox
              onChange={checkSelectAll}
            >
              {t("app.table.select_all")}
            </Checkbox>
            <Button 
              htmlType='submit'
              style={{ fontWeight : 'bold' }}
            >
              {t("app.table.delete")}
            </Button>
        </Space>
        <Table
          columns={columns} 
          // dataSource={data === "" ? [] : data}
          // dataSource={users}
          // dataSource={data}
          dataSource={todos}
          pagination={{ pageSize : 3 }}
          rowSelection={{ ...rowSelection, checkStrictly }}
        />
        <Modal 
          title = {t("app.etc.edit_user")}
          okText = {t("app.etc.ok")}
          cancelText = {t("app.etc.cancel")}
          visible={showEdit}
          onCancel={() => resetEditUser()}
          onOk={() => {
            setTodos((todo : any) => {
              return todo.map((user : any) => {
                if (user.key === editingUser.key) {
                  return editingUser
                } else {
                  return user;
                }
              })
            })
            resetEditUser();
          }}
        >
            <Space
                wrap 
                style={{ width : "100%" , margin : "16px 0" }}
            >
              <Text>*{t("app.form.fname")}:</Text>
              <Input 
                value={editingUser?.firstname}
                onChange={(e) => {
                    setEditingUser((prev) => {
                      return {...prev , firstname : e.currentTarget.value}
                    })
                }}
              />
            </Space>
            <Space 
                wrap 
                style={{ width : "100%" , margin : "0 0 16px 0" }}
            >
                <Text>*{t("app.form.gender")}:</Text>
                <Radio.Group 
                  defaultValue={editingUser?.gender}
                    options={[
                        { label: 'ผู้ชาย', value: 'ผู้ชาย' },
                        { label: 'ผู้หญิง', value: 'ผู้หญิง' },
                        { label: 'ไม่ระบุ', value: 'ไม่ระบุ' },
                    ]}
                    onChange={(e) => {
                      setEditingUser((prev) => {
                        return {...prev , gender : e.target.value}
                      })
                    }}
                />
            </Space>
            <Space
                wrap 
                style={{ width : "100%" , margin : "0 0 16px 0" }}
            >
              <Text>*{t("app.form.phone_number")}:</Text>
              <Input 
                value={editingUser?.phone_number}
                onChange={(e) => {
                  setEditingUser((prev) => {
                    return {...prev , phone_number : e.currentTarget.value}
                  })
              }}
              />
            </Space>
            <Space
              style={{ width : "100%" , margin : "0 0 16px 0" }}
            >
              <Text>*{t("app.form.nationality")}:</Text>
              <Select 
                style={{ width : 100 }}
                defaultValue={editingUser?.nationality}
                options={[
                    { value: 'ไทย', label: 'ไทย' },
                    { value: 'ต่างชาติ', label: 'ต่างชาติ' },
                ]}
                onChange={handleChange}
              />
            </Space>
        </Modal>
    </Layout>
  );
};;
