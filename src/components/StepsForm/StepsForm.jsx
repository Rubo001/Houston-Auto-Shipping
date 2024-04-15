import { useEffect, useState } from 'react'
import './StepsForm.scss'
import Form1 from '../Form1/Form1';
import Form2 from '../Form2/Form2';
import Form3 from '../Form3/Form3';
import Form4 from '../Form4/Form4';
import Modal from '../Modal/Modal';

export default function StepsForm() {

  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const [data, setData] = useState([])
  const nextStep = (values) => {
    if (selectedFormID < 4) {
      setSelectedFormID(selectedFormID + 1)
    } else {
      setSelectedFormID(1)
      toggleModal();
    }

    setData({ ...data, ...values })
  }

  const prevStep = () => {
    setSelectedFormID(selectedFormID > 1 ? selectedFormID - 1 : selectedFormID)
  }

  const selected = [
    {
      id: 1,
      title: 'Select a Route',
      form: <Form1 nextStep={nextStep} prevStep={prevStep} values={data} />
    },
    {
      id: 2,
      title: 'Select an Option',
      form: <Form2 prevStep={prevStep} nextStep={nextStep} data={data} />
    },
    {
      id: 3,
      title: 'Confirmation',
      form: <Form3 prevStep={prevStep} nextStep={nextStep} data={data} />
    },
    {
      id: 4,
      title: 'Get a Quote',
      form: <Form4 prevStep={prevStep} nextStep={nextStep} data={data} />
    }
  ];


  const [selectedFormID, setSelectedFormID] = useState(1);
  const [selectedForm, setSelectedForm] = useState(selected.find(elem => elem.id === selectedFormID));


  useEffect(() => {
    const form = selected.find(elem => elem.id === selectedFormID);
    setSelectedForm(form);
  }, [selectedFormID]);


  return (
    <>
      {isOpen
        ? <Modal toggleModal={toggleModal} isOpen={isOpen}>
          <div className="DataModal">
            <span onClick={toggleModal}>&#xF628;</span>
            <div className="DataModal-content">
              {Object.entries(data).map(([key, value]) => (
                <div key={key} className="form-entry">
                  <p className="form-key">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                  <h6 className="form-value">{value}</h6>
                </div>
              ))}
            </div>
          </div>
        </Modal>
        : null
      }
      <div className="StepsForm">
        {
          selected.map((elem, index) => {
            return (
              <div key={elem.id} className={`${elem.id <= selectedFormID ? 'active' : ''}  ${elem.id === 1 ? 'start-arrow' : ''} ${elem.id === 2 ? 'mid-arrow' : ''} ${elem.id === 3 ? 'end-arrow' : ''} Steps`}>
                <span>{elem.id}</span>
                <p>{elem.title}</p>
                {index < 3 && (
                  <div className='hr-block'>
                    <div className='box-rotate'></div>
                    <hr />
                    <div className='box-rotate'></div>
                  </div>
                )}
              </div>
            )
          })
        }
      </div>
      <div className="StepsForm__content">
        <div className="left-content">
          <h2>Explore <span>Houston Auto</span>Transport</h2>
          <p>Open Car Transport is one of the most popular and cheapest methods to ship your vehicle.Ship your vehicle using open car Transport.</p>
          <h4>Open Car Transport and Full Insurance Benefits <i className="bi bi-square"></i><i className="bi bi-square"></i><i className="bi bi-square"></i><i className="bi bi-square"></i></h4>
        </div>
        <div className="right-content">
          {selectedForm.form}
        </div>
      </div>
    </>
  )
}