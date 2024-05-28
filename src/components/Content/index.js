
import './content.css'
import ECGChart from '../ecg'

import { Component } from 'react'

class Content extends Component {
  render() {
    return (
      <div className='content-bg-container'>
            <div className='individual-container'>
                <div className='text-container'>
                    <p className='date-time-para'>02/05/24(10:30am)</p>
                    <p  className='date-time-para'>02/05/24(10:30am)</p>
                    <div className='dot-container'>
                        <p className='dot'></p>
                        <p   className='days'>(24 Days)</p>
                    </div>
                </div>
                <hr className='dash-board-horizontal-line1'/>
                <div className='patient-details-container'>
                    <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1676791920/samples/people/bicycle.jpg'
                    alt='patient1'
                    className='patients-image'
                    />
                    <div className='patient-text-container'>
                        <h1 className='patient-name1'>Matt Dowd</h1>
                        <p className='patient-text-date-para'>04-03-1975</p>
                        <p className='para2'>CC: Heart Palpaitations</p>
                        <p  className='para2'>Doctor: Grace Kerr</p>
                    </div>

                </div>
                <div className='ecg-container'>
                  <ECGChart/>
                </div>
            </div>
            <div className='individual-container'>
                <div className='text-container'>
                    <p className='date-time-para'>02/05/24(10:30am)</p>
                    <p  className='date-time-para'>02/05/24(10:30am)</p>
                    <div className='dot-container'>
                        <p className='dot'></p>
                        <p   className='days'>(24 Days)</p>
                    </div>
                </div>
                <hr className='dash-board-horizontal-line2'/>
                <div className='patient-details-container'>
                    <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1676791916/samples/landscapes/girl-urban-view.jpg'
                    alt='patient1'
                    className='patients-image'
                    />
                    <div className='patient-text-container'>
                        <h1 className='patient-name2'>Matt Dowd</h1>
                        <p className='patient-text-date-para'>04-03-1975</p>
                        <p className='para2'>CC: Heart Palpaitations</p>
                        <p  className='para2'>Doctor: Grace Kerr</p>
                    </div>

                </div>
                <div className='ecg-container'>
                  <ECGChart/>
                </div>
            </div>
            <div className='individual-container'>
                <div className='text-container'>
                    <p className='date-time-para'>02/05/24(10:30am)</p>
                    <p  className='date-time-para'>02/05/24(10:30am)</p>
                    <div className='dot-container'>
                        <p className='dot'></p>
                        <p   className='days'>(24 Days)</p>
                    </div>
                </div>
                <hr className='dash-board-horizontal-line3'/>
                <div className='patient-details-container'>
                    <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1676791918/samples/people/boy-snow-hoodie.jpg'
                    alt='patient1'
                    className='patients-image'
                    />
                    <div className='patient-text-container'>
                        <h1 className='patient-name3'>Matt Dowd</h1>
                        <p className='patient-text-date-para'>04-03-1975</p>
                        <p className='para2'>CC: Heart Palpaitations</p>
                        <p  className='para2'>Doctor: Grace Kerr</p>
                    </div>

                </div>
                <div className='ecg-container'>
                  <ECGChart/>
                </div>
            </div>

            <div className='individual-container'>
                <div className='text-container'>
                    <p className='date-time-para'>02/05/24(10:30am)</p>
                    <p  className='date-time-para'>02/05/24(10:30am)</p>
                    <div className='dot-container'>
                        <p className='dot'></p>
                        <p   className='days'>(24 Days)</p>
                    </div>
                </div>
                <hr className='dash-board-horizontal-line3'/>
                <div className='patient-details-container'>
                    <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1676791918/samples/people/boy-snow-hoodie.jpg'
                    alt='patient1'
                    className='patients-image'
                    />
                    <div className='patient-text-container'>
                        <h1 className='patient-name3'>Matt Dowd</h1>
                        <p className='patient-text-date-para'>04-03-1975</p>
                        <p className='para2'>CC: Heart Palpaitations</p>
                        <p  className='para2'>Doctor: Grace Kerr</p>
                    </div>

                </div>
                <div className='ecg-container'>
                  <ECGChart/>
                </div>
            </div>
      </div>
    )
  }
}


export default Content