import { Component } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import Header from '../Header'
import YellowBanner from '../yellowBanner';
import Footer from '../Footer';

import './tablecontent.css'

 class Table extends Component {
  render() {
    return (
    <>
    <Header/>
    <YellowBanner/>
      <div className='table-bg-container'>
        <table>
            <thead>
                <tr>
                    <th>Patient Name</th>
                    <th>Status</th>
                    <th>Enroolment Type</th>
                    <th>Device ID</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Remaining Time</th>
                    <th>Provider</th>
                </tr>

            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className='patient-image-down'>
                    <div className='image-patient-name'>
                            <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1676791917/samples/bike.jpg' 
                            alt='sample'
                            className='patient-img'
                            />
                            <p>Tracey Oliver   </p>
                            
                        </div>
                        <IoMdArrowDropdown/>

                        </div>
                    </td>
                    <td><p className='status-text'>Active</p></td>
                    <td>30 DAY MCT</td>
                    <td>1224511152541541</td>
                    <td>4/26/2024 (1:30 pm)</td>
                    <td>5/26/2024</td>
                    <td>50 Days</td>
                    <td>Survarchala Dara</td>

                </tr>
                <tr>
                    <td>
                        <div className='patient-image-down'>
                    <div className='image-patient-name'>
                            <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1676791916/samples/people/smiling-man.jpg' 
                            alt='sample'
                            className='patient-img'
                            />
                            <p>Andrea Marshall   </p>
                            
                        </div>
                        <IoMdArrowDropdown/>

                        </div>
                    </td>
                    <td><p className='status-text'>Active</p></td>
                    <td>30 DAY MCT</td>
                    <td>1224511152541541</td>
                    <td>4/26/2024 (1:30 pm)</td>
                    <td>5/26/2024</td>
                    <td>50 Days</td>
                    <td>Survarchala Dara</td>

                </tr>

                <tr>
                    <td>
                        <div className='patient-image-down'>
                    <div className='image-patient-name'>
                            <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1676791914/samples/people/kitchen-bar.jpg' 
                            alt='sample'
                            className='patient-img'
                            />
                            <p>Planter, Elmore</p>
                            
                        </div>
                        <IoMdArrowDropdown/>

                        </div>
                    </td>
                    <td><p className='status-text'>Active</p></td>
                    <td>30 DAY MCT</td>
                    <td>1224511152541541</td>
                    <td>4/26/2024 (1:30 pm)</td>
                    <td>5/26/2024</td>
                    <td>50 Days</td>
                    <td>Survarchala Dara</td>

                </tr>
                <tr>
                    <td>
                        <div className='patient-image-down'>
                    <div className='image-patient-name'>
                            <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1676791917/samples/bike.jpg' 
                            alt='sample'
                            className='patient-img'
                            />
                            <p>Joshua White</p>
                            
                        </div>
                        <IoMdArrowDropdown/>

                        </div>
                    </td>
                    <td><p className='status-text'>Active</p></td>
                    <td>30 DAY MCT</td>
                    <td>1224511152541541</td>
                    <td>4/26/2024 (1:30 pm)</td>
                    <td>5/26/2024</td>
                    <td>50 Days</td>
                    <td>Survarchala Dara</td>

                </tr>
                <tr>
                    <td>
                        <div className='patient-image-down'>
                    <div className='image-patient-name'>
                            <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1676791918/samples/people/boy-snow-hoodie.jpg' 
                            alt='sample'
                            className='patient-img'
                            />
                            <p>Michelle Ogden</p>
                            
                        </div>
                        <IoMdArrowDropdown/>

                        </div>
                    </td>
                    <td><p className='status-text'>Active</p></td>
                    <td>30 DAY MCT</td>
                    <td>1224511152541541</td>
                    <td>4/26/2024 (1:30 pm)</td>
                    <td>5/26/2024</td>
                    <td>50 Days</td>
                    <td>Survarchala Dara</td>

                </tr>
                <tr>
                    <td>
                        <div className='patient-image-down'>
                    <div className='image-patient-name'>
                            <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1676791917/samples/bike.jpg' 
                            alt='sample'
                            className='patient-img'
                            />
                            <p>Ian Hodges</p>
                            
                        </div>
                        <IoMdArrowDropdown/>

                        </div>
                    </td>
                    <td><p className='status-text'>Active</p></td>
                    <td>30 DAY MCT</td>
                    <td>1224511152541541</td>
                    <td>4/26/2024 (1:30 pm)</td>
                    <td>5/26/2024</td>
                    <td>50 Days</td>
                    <td>Survarchala Dara</td>

                </tr>
                <tr>
                    <td>
                        <div className='patient-image-down'>
                    <div className='image-patient-name'>
                            <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1676791917/samples/bike.jpg' 
                            alt='sample'
                            className='patient-img'
                            />
                            <p>Ian Hodges</p>
                            
                        </div>
                        <IoMdArrowDropdown/>

                        </div>
                    </td>
                    <td><p className='status-text'>Active</p></td>
                    <td>30 DAY MCT</td>
                    <td>1224511152541541</td>
                    <td>4/26/2024 (1:30 pm)</td>
                    <td>5/26/2024</td>
                    <td>50 Days</td>
                    <td>Survarchala Dara</td>

                </tr>
                <tr>
                    <td>
                        <div className='patient-image-down'>
                    <div className='image-patient-name'>
                            <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1676791917/samples/bike.jpg' 
                            alt='sample'
                            className='patient-img'
                            />
                            <p>Ian Hodges</p>
                            
                        </div>
                        <IoMdArrowDropdown/>

                        </div>
                    </td>
                    <td><p className='status-text'>Active</p></td>
                    <td>30 DAY MCT</td>
                    <td>1224511152541541</td>
                    <td>4/26/2024 (1:30 pm)</td>
                    <td>5/26/2024</td>
                    <td>50 Days</td>
                    <td>Survarchala Dara</td>

                </tr>
                <tr>
                    <td>
                        <div className='patient-image-down'>
                    <div className='image-patient-name'>
                            <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1676791917/samples/bike.jpg' 
                            alt='sample'
                            className='patient-img'
                            />
                            <p>Ian Hodges</p>
                            
                        </div>
                        <IoMdArrowDropdown/>

                        </div>
                    </td>
                    <td><p className='status-text'>Active</p></td>
                    <td>30 DAY MCT</td>
                    <td>1224511152541541</td>
                    <td>4/26/2024 (1:30 pm)</td>
                    <td>5/26/2024</td>
                    <td>50 Days</td>
                    <td>Survarchala Dara</td>

                </tr>
                <tr>
                    <td>
                        <div className='patient-image-down'>
                    <div className='image-patient-name'>
                            <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1676791917/samples/bike.jpg' 
                            alt='sample'
                            className='patient-img'
                            />
                            <p>Ian Hodges</p>
                            
                        </div>
                        <IoMdArrowDropdown/>

                        </div>
                    </td>
                    <td><p className='status-text'>Active</p></td>
                    <td>30 DAY MCT</td>
                    <td>1224511152541541</td>
                    <td>4/26/2024 (1:30 pm)</td>
                    <td>5/26/2024</td>
                    <td>50 Days</td>
                    <td>Survarchala Dara</td>

                </tr>
                <tr>
                    <td>
                        <div className='patient-image-down'>
                    <div className='image-patient-name'>
                            <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1676791917/samples/bike.jpg' 
                            alt='sample'
                            className='patient-img'
                            />
                            <p>Ian Hodges</p>
                            
                        </div>
                        <IoMdArrowDropdown/>

                        </div>
                    </td>
                    <td><p className='status-text'>Active</p></td>
                    <td>30 DAY MCT</td>
                    <td>1224511152541541</td>
                    <td>4/26/2024 (1:30 pm)</td>
                    <td>5/26/2024</td>
                    <td>50 Days</td>
                    <td>Survarchala Dara</td>

                </tr>
                <tr>
                    <td>
                        <div className='patient-image-down'>
                    <div className='image-patient-name'>
                            <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1676791917/samples/bike.jpg' 
                            alt='sample'
                            className='patient-img'
                            />
                            <p>Ian Hodges</p>
                            
                        </div>
                        <IoMdArrowDropdown/>

                        </div>
                    </td>
                    <td><p className='status-text'>Active</p></td>
                    <td>30 DAY MCT</td>
                    <td>1224511152541541</td>
                    <td>4/26/2024 (1:30 pm)</td>
                    <td>5/26/2024</td>
                    <td>50 Days</td>
                    <td>Survarchala Dara</td>

                </tr>
  
 
                

            </tbody>
        </table>
      </div>
      <div className='table-content-footer'>
      <Footer/>
      </div>
      </>
    )
  }
}


export default Table