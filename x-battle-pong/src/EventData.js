import React, {useState, useMemo} from 'react';
import DateTimePicker from 'react-datetime-picker';
import {AutoComplete} from "@progress/kendo-react-dropdowns";
import {countriesSpanish, countriesEnglish, countriesPortuguese} from "./countries";
import {Button} from 'react-bootstrap';
import './EventData.css';
function EventData(){
    const eventName = useFormInput('');
    const [startDateTime, onChangeStart] = useState(new Date());
    const [endDateTime, onChangeEnd] = useState(new Date());
    const country = useFormInput('');
    const localization = useFormInput('');
    const eventCode = useFormInput('');
    const clientName = useFormInput('');
    return(
        <div>
            <div>
                <h1>XBattlePong System</h1>
                <h2>Create event</h2>
            </div>
            <div className='formulary'>
                <h4>Event name</h4>
                <input type='text'{...eventName} autoComplete='new-password'/>
                
                <h4>Intial date and time</h4>
                <DateTimePicker
                    onChange = {onChangeStart}
                    value = {startDateTime}/>

                <h4>End date and time</h4>
                <DateTimePicker
                    onChange = {onChangeEnd}
                    value = {endDateTime}/>

                <h4>Country</h4>
                <form className='form'>
                    <AutoComplete {...country} data={countriesEnglish} textField="label" suggest/>
                </form>

                <h4>Event code</h4>
                <input type='text'{...eventCode} autoComplete='new-password'/>

                <h4>Event localization</h4>
                <input type='text'{...localization} autoComplete='new-password'/>

                <h4>Client name (optional)</h4>
                <input type='text'{...clientName} autoComplete='new-password'/>
                
                <div className='createEventButton'>
                    <Button
                        onClick={() => {
                            if(eventName.value!==""&&startDateTime!==null&&endDateTime!==null&&country.value!==""&&localization.value!==""&&eventCode.value!==""){
                                alert('Todo en orden');
                            }else{
                                 alert("Faltó ingresar un valor");
                            }

                        }}
                    >
                        Create event
                    </Button>
                </div>

            </div>
            
        </div>



    );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default EventData;