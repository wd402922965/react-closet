import { Popup, Input, List, Radio } from 'antd-mobile'
import { useState } from 'react'

function BrandSelector({ value, onChange,getBrand }) {
    const [visible, setVisible] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [selected, setSelected] = useState(value || '')

    const options = ['angelicPretty', 'BABY, THE STARS SHINE BRIGHT']

    const handleClickSelect = (option) => {
        onChange?.(option)
        getBrand(option);
    }

    const handleClickInput = (inputValue) => {
        setSelected('');
        onChange?.(inputValue)
        getBrand(inputValue);
    }

    const handleOnBlur = () => {
        onChange?.(inputValue)
        getBrand(inputValue);
    }


    return (
        <>
            <Input
                placeholder="请选择或输入品牌"
                value={value}
                onClick={() => setVisible(true)}

            />

            <Popup
                visible={visible}
                onMaskClick={() => setVisible(false)}
                position='bottom'
            >
                <div style={{ padding: '16px' }}>
                    <List header="常用品牌">
                        <Radio.Group value={selected} onChange={val => setSelected(val)}>
                            {options.map(option => (
                                <List.Item key={option}  onClick={() => handleClickSelect(option)}>
                                    <Radio value={option}>{option}</Radio>
                                </List.Item>
                            ))}
                        </Radio.Group>
                    </List>

                    <div style={{ marginTop: 16 }}>
                        <Input
                            placeholder="或手动输入品牌"
                            value={inputValue}
                            onChange={val => setInputValue(val)}
                            onClick={() => handleClickInput(inputValue)}
                            onBlur={() => handleOnBlur()}
                        />
                    </div>
                </div>
            </Popup>
        </>
    )
}

export default BrandSelector;