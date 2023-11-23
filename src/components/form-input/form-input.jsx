import './form-input.scss';
const FormInput = ({label, ...otherProps }) => {
    return (
        <div className="formInput">
            <input className='formInput_input' {...otherProps} /> 
            {label && (
        <label className={`${ otherProps.value.length ? 'shrink' : ''} formInput_label`}>{label}</label> )}
       
        </div>
    );
};
export default FormInput;