import './FormButton.scss'


export default function FormButton({ children }) {
  return (
    <div className="FormButton">
      <button type='submit'>{children}</button>
    </div>
  )
}
