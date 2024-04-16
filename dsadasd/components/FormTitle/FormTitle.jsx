import './FormTitle.scss'

export default function FormTitle({ prevStep, editable }) {
  return (
    <div className='FormTitle'>
      <p className={editable ? '' : 'not-editable'} onClick={prevStep}> <span>&#xF129;</span> Edit</p>
      <h3>Get A <span>FREE</span> Quote</h3>
    </div>
  )
}
