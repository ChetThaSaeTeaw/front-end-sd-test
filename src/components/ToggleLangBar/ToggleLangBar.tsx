import "./ToggleLangBar.scss"; // CSS

import { Select } from 'antd';

export default function ToggleLangBar() {

    const lang = localStorage.getItem("LANGUAGE");

    const toggleLanguage = (lang : string) => {
        localStorage.setItem("LANGUAGE" , lang);
        window.location.reload();
    };

  return (
    <div className='toggle-lang-box'>
        <Select
            defaultValue={!lang ? "th" : lang}  
            style={{ width: 90 }}
            onChange={toggleLanguage}
            options={ lang === "th" 
                ? 
                [
                    { 
                        label: 'ไทย', 
                        value: 'th' 
                    },
                    { 
                        label: 'อังกฤษ',
                        value: 'en' 
                    },
                ] 
                : 
                [
                    { 
                        label: 'Thai', 
                        value: 'th' 
                    },
                    { 
                        label: 'English',
                        value: 'en' 
                    },
                ]
            }
        />
    </div>
  );
};
