import "./FormSubmit.scss"; // CSS

import { useState , useEffect } from "react";
import { Space , Typography , Form , Input , Select , DatePicker , Radio , Button } from 'antd';
import { useForm } from "antd/es/form/Form";
import Swal from 'sweetalert2';

import { useSelector , useDispatch } from "react-redux";
import { addUser } from "../../services/users";

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

export default function FormSubmit({ t , todos , setTodos } : any) {

    const [ gender , setGender ] = useState("");
    const [ birthday , setBirthday ] = useState("");
    const [form] = useForm();

    const userList = useSelector((state) => state.users.value); // Read Data From Redux
    const dispatch = useDispatch();

    // Handle Birth Day
    const handleSelectDate = (date : any , dateString : any) => {
        console.log(date , dateString);
        setBirthday(dateString);
    }

    // Request Submit Data
    const requestSubmit = async (values : any) => {
        // const key = userList[userList.length - 1].id + 1;
        // const chekcKey = !todos.id ? "1" : todos.id + 1;
        // const key = chekcKey.toString();
        let key = Math.floor(Math.random() * 999);
        const userData : UserData = {
            // id : userList[userList.length - 1].id + 1,
            id : Math.floor(Math.random() * 999),
            key : key.toString(),
            prefix : values.prefix,
            firstname : values.firstname,
            lastname : values.lastname,
            birthday : birthday,
            nationality : values.nationality,
            id_card_member : values.id_card_member_1 + values.id_card_member_2 + values.id_card_member_3 + values.id_card_member_4 + values.id_card_member_5,
            gender : gender,
            phone_number : "0" + values.phone_number,
            passport : values.passport,
            salary : values.salary
        }
        if (userData) {
            setTodos([
                ...todos ,
                userData
            ])
        }
        await dispatch(addUser(userData));
        await form.resetFields();
        
        await Swal.fire({
            icon : 'success',
            title : 'บันทึกข้อมูลสำเร็จ',
            text : 'สามารถตรวจสอบข้อมูลที่ตาราง',
            timer : 2000
        });
        // await window.location.reload();
    };

    
    // Request Submit Failed
    const requestFailed = (errorInfo : any) => {
        if (errorInfo) {
            Swal.fire({
                icon : 'error',
                title : 'บันทึกข้อมูลไม่สำเร็จ',
                text : 'โปรดกรอกข้อมูลให้ครบ',
                timer : 2000   
            });
        }
    };

    // Clear Form 
    const clearFormData = () => {
        form.resetFields();
    };

    useEffect(() => {
        {!localStorage.getItem('users') ? localStorage.setItem('users' , userList) : localStorage.setItem('users' , JSON.stringify(userList));}
    },[userList]);

  return (
        <Form 
            className="form-container"
            form={form}
            onFinish={requestSubmit}
            onFinishFailed={requestFailed}
        > 
            <Space wrap>
                <Form.Item 
                    name="prefix" 
                    label={t("app.form.prefix")} 
                    rules={[
                        {
                            required: true , 
                            message : t("app.form.please_enter") + " " + t("app.form.prefix")
                        }
                    ]}
                >
                    <Select 
                        defaultValue={t("app.form.please_enter")}
                        style={{ width : 100 }}
                        options={[
                            { value: 'นาย', label: 'นาย' },
                            { value: 'นางสาว', label: 'นางสาว' },
                            { value: 'นาง', label: 'นาง' },
                        ]}
                    />
                </Form.Item>
                <Form.Item 
                    name="firstname" 
                    label={t("app.form.fname")} 
                    rules={[
                        { 
                            required: true ,
                            message : t("app.form.please_enter") + " " + t("app.form.fname")
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item 
                    name="lastname" 
                    label={t("app.form.lname")} 
                    rules={[
                        { 
                            required: true ,
                            message : t("app.form.please_enter") + " " + t("app.form.lname")
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
            </Space>
            <Space wrap>
                <Form.Item 
                    name="birthday" 
                    label={t("app.form.birthday")} 
                    rules={[
                        { 
                            required: true ,
                            message : t("app.form.please_enter") + " " + t("app.form.birthday")
                        }
                    ]}
                >
                    <DatePicker
                        format="MM/DD/YYYY"
                        placeholder={t("app.form.format_date")}
                        onChange={handleSelectDate}
                    />
                </Form.Item>
                <Form.Item 
                    name="nationality" 
                    label={t("app.form.nationality")} 
                    rules={[
                        { 
                            required: true ,
                            message : t("app.form.please_enter") + " " + t("app.form.nationality")
                        }
                    ]}
                >
                    <Select 
                        defaultValue={t("app.form.please_select")}
                        style={{ width : 250 }}
                        options={[
                            { value: 'ไทย', label: 'ไทย' },
                            { value: 'ต่างชาติ', label: 'ต่างชาติ' },
                        ]}
                    />
                </Form.Item>
            </Space>
            <Space wrap style={{ width : "100%" }}>
                <Form.Item 
                    name="id_card_member_1" 
                    label={t("app.form.id_card")} 
                    style={{ width : 166 }}
                    // rules={[{ required: true }]}
                >
                    <Input maxLength={1} />
                </Form.Item>
                <Text className="line-between-member-card">-</Text>
                <Form.Item 
                    name="id_card_member_2" 
                    style={{ width : 100 }}
                >
                    <Input maxLength={4} />
                </Form.Item>
                <Text className="line-between-member-card">-</Text>
                <Form.Item 
                    name="id_card_member_3" 
                    style={{ width : 90 }}
                >
                    <Input maxLength={3} />
                </Form.Item>
                <Text className="line-between-member-card">-</Text>
                <Form.Item 
                    name="id_card_member_4" 
                    style={{ width : 100 }}
                >
                    <Input maxLength={3} />
                </Form.Item>
                <Text className="line-between-member-card">-</Text>
                <Form.Item 
                    name="id_card_member_5" 
                    style={{ width : 45 }}
                >
                    <Input maxLength={2} />
                </Form.Item>
            </Space>
            <Space 
                wrap 
                style={{ width : "100%" , margin : "0 0 16px 0" }}
            >
                <Text>*{t("app.form.gender")}:</Text>
                <Radio.Group 
                    options={[
                        { label: 'ผู้ชาย', value: 'ผู้ชาย' },
                        { label: 'ผู้หญิง', value: 'ผู้หญิง' },
                        { label: 'ไม่ระบุ', value: 'ไม่ระบุ' },
                    ]}
                    onChange={e => setGender(e.target.value)}
                />
            </Space>
            <Space wrap>
                <Form.Item 
                    name="phone_number" 
                    label={t("app.form.phone_number")} 
                    rules={[
                        { 
                            required: true ,
                            message : t("app.form.please_enter") + " " + t("app.form.phone_number")
                        }
                    ]}
                >
                    <Space>
                        <Select
                            defaultValue="+66"
                            style={{ width : 90 }}
                            options={[
                                { value: '0', label: '+66' },
                            ]}
                        />
                        <Text>-</Text>
                        <Input maxLength={9} />
                    </Space>
                </Form.Item>
            </Space>
            <Space style={{ width : "100%" }}>
                <Form.Item 
                    name="passport" 
                    label={t("app.form.passport")} 
                >
                    <Input />
                </Form.Item>
            </Space>
            <Space
                wrap
            >
                <Space>
                    <Form.Item 
                        name="salary" 
                        label={t("app.form.salary")} 
                        style={{ width : 350 }}
                        rules={[
                            { 
                                required: true ,
                                message : t("app.form.please_enter") + " " + t("app.form.salary")
                            }
                        ]}
                    >
                        <Input />   
                    </Form.Item>
                </Space>
                <Space style={{ display : 'flex' , alignItems : "center" , justifyContent : "center" ,  width : 500 }}>
                    <Form.Item>
                        <Button 
                            onClick={clearFormData} 
                            htmlType="submit"
                            style={{ margin : "0 20px" }}
                        >
                            {t("app.form.clear_data")} 
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Button 
                            htmlType="submit"
                            style={{ margin : "0 20px" }}
                        >
                            {t("app.form.submit_data")} 
                        </Button>
                    </Form.Item>
                </Space>
            </Space>
        </Form>
  );
};
