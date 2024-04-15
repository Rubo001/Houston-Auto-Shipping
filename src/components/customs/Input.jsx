import InputMask from 'react-input-mask';

export default function Input({ name, placeholder, label, value, handleChange, error, type, mask, className }) {
  return (
    <div className={`input-container ${className}`}>
      {label && <label htmlFor={name}>{label}</label>}
      {mask ? (
        <InputMask
          mask={mask}
          maskPlaceholder={placeholder} // Set maskPlaceholder to the placeholder value
          name={name}
          placeholder={placeholder} // Set placeholder for browsers that don't support mask
          id={name}
          value={value}
          onChange={handleChange}
          className={error ? 'error' : ''}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          id={name}
          value={value}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (type === 'number') {
              const allowedCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'Tab'];
              if (!allowedCharacters.includes(e.key)) {
                e.preventDefault();
              }
            }
          }}
          className={error ? 'error' : ''}
        />
      )}
      {error && <p className={`error-message ${label ? 'error-with-label' : 'error-without-label'}`}>{error}</p>}
    </div>
  );
}
