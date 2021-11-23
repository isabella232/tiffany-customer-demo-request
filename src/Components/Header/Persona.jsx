import React from 'react'
import Select from 'react-select'
import { useDispatch } from "react-redux";
import {selectPersona} from '../../actions/selectPersona'

const SelectPersona = () => {
    const options = [
        { value: 'Asda_Tiffany', label: 'Tiffany' },
        { value: 'Asda_Ben', label: 'Ben' },
        { value: 'Neutral', label: 'Neutral' }
    ]

    //STYLE SELECT

    const colourStyles = {
        control: styles => ({ backgroundColor: 'transparent', display: 'flex', width: '100%', position: 'relative' }),
        input: styles => ({ width: '100%', cursor: 'pointer' }),
        container: styles => ({ width: '100%', cursor: 'pointer' }),
        valueContainer: styles => ({ backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', cursor: 'pointer' }),
        placeholder: styles => ({ backgroundColor: 'transparent', fontSize: '0.8rem', color: 'black', fontFamily: "Open Sans", textTransform: 'capitalise', cursor: 'pointer' }),
        indicatorSeparator: styles => ({ display: "none" }),
        dropdownIndicator: styles => ({ color: 'black', display: "none"}),
        singleValue: styles => ({ top: '0', width: '50%' }),
        menu: styles => ({ width: '8rem', top: '2.5rem', position: 'absolute', backgroundColor: 'white', borderRadius: '2px', zIndex: '99' }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                backgroundColor: isFocused ? 'black' : 'white',
                color: isFocused ? 'white' : 'black',
                fontSize: '0.8rem', fontFamily: "Open Sans", margin: '1rem',
                transition: 'all 0.2s',
                cursor: 'pointer',
                width: '80%',
                textAlign: 'center',
                textTransform: "uppercase",
                fontWeight: 'bold',
                borderRadius: '2px'



            };
        },
        menuList: styles => ({ backgroundColor: 'transparent', })

    };
    const dispatch = useDispatch()

    const selectValue = (e) => {
        dispatch(selectPersona(e.value))
    }


    return (
        <Select options={options} onChange={selectValue}  styles={colourStyles} placeholder={"Persona"} />
    )

}

export default SelectPersona