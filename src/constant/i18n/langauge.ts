export const languages = [
    {
      label: "ภาษาไทย",
      value: "th",
    },
    {
      label: "English",
      value: "en",
    },
  ];
  
  export const getTranslation = (key : string) => {
    const text = (en : string, th : string) => ({ en , th }[key]);
  
    return {
      [key]: {
        translation: {
          app: {
            home: {
              title: text("Title", "ชื่อเรื่อง"),
              thai : text("TH" , "ไทย"),
              eng : text("EN" , "อังกฤษ"),
              back : text("Back" , "กลับ"),
              quiz : text("Quiz" , "แบบทดสอบที่"),
              quiz_1 : text("Layout & Style" , "การจัดการหน้าเว็บ"),
              quiz_2 : text("Connect API" , "การเชื่อมต่อ API"),
              quiz_3 : text("Form & Table" , "การจัดการหน้าฟอร์ม"),
            },
            layout : {
              title : text("Layout & Style" , "การจัดหน้าเว็บและสไตล์"),
              move_shape : text("Move shape" , "เลื่อนรูปแบบ"),
              move_position : text("Move position" , "เปลี่ยนตำแหน่ง")
            },
            form : {
              title : text("Form & Table" , "การจัดการหน้าฟอร์ม"),
              prefix : text("prefix" , "คำนำหน้า"),
              please_enter : text("Please enter" , "โปรดระบุ"),
              fname : text("firstname" , "ชื่อจริง"),
              lname : text("lastname" , "นามสกุล"),
              birthday : text("birthday" , "วันเกิด"),
              format_date : text("MM/DD/YYY" , "เดือน/วัน/ปี"),
              nationality : text("nationality" , "สัญชาติ"),
              please_select : text("- - Please Select - -" , "- - กรุณาเลือก - -"),
              id_card : text("id card member" , "เลขบัตรประชาชน"),
              gender : text("gender" , "เพศ"),
              male : text("male" , "ผู้ชาย"),
              female : text("female" , "ผู้หญิง"),
              none : text("none" , "ไม่ระบุ"),
              phone_number : text("phone number" , "หมายเลขโทรศัพท์มือถือ"),
              passport : text("passport" , "หนังสือเดินทาง"),
              salary : text("salary" , "เงินเดือนที่คาดหวัง"),
              clear_data : text("clear" , "ล้างข้อมูล"),
              submit_data : text("submit" , "ส่งข้อมูล")
            },
            table : {
              select_all : text("select all" , "เลือกทั้งหมด"),
              delete : text("delete" , "ลบข้อมูล"),
              name : text("Name" , "ชื่อ"),
              firstname : text("Name" , "ชื่อ"),
              gender : text("Gender" , "เพศ"),
              phone_number : text("Phone Number" , "หมายเลขโทรศัพท์มือถือ"),
              nationality : text("Nationality" , "สัญชาติ"),
              management : text("Management" , "จัดการ")
            },
            connect_api : {
              title : text("Connect API" , "การเชื่อมต่อ API")
            },
            etc : {
              quiz : text("Quiz" , "แบบทดสอบ"),
              confirm_delete : text("Do you want to delete this user ?" , "ต้องการลบผู้มใช้งานนี้ใช่ไหม ?"),
              ok : text("OK" , "ตกลง"),
              cancel : text("Cancel" , "ยกเลิก"),
              edit_user : text("Edit user data" , "แก้ไขข้อมูลผู้ใช้งาน")
            }
          },
        },
      },
    };
  };
  