import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import { useNavigate } from 'react-router-dom'
import Header from '../common/Header'
import Footer from '../common/Footer'

export default function AddressPage(props) {

    let History = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'));

    const onSelect = (e) => {
        if (e === 'yes') {
            History('/add-address');
        } else {
            localStorage.removeItem('user');
            History('/thankyou');
        }
    };

    return (
        <>
            <Header />
            {user ?
                <section className="bnrsection">
                    <div className="container">
                        <div className="row">
                            <div className="offset-lg-1 col-lg-10 col-md-12 col-12 text-center">
                                <h1>Hi <span>{user.first_name}</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                            <div className="offset-lg-2 col-lg-8 offset-md-1 col-md-10 col-12 text-center">
                                <div className="formpart">
                                    <div id="slide03" >
                                        <h3>Do you have a Previous Address?</h3>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={e => onSelect(e.target.value)} value='yes' />
                                            <label className="form-check-label next02" htmlFor="flexRadioDefault1">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" onClick={e => onSelect(e.target.value)} value='no' id="flexRadioDefault2" />
                                            <label className="form-check-label tothank" htmlFor="flexRadioDefault2">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                : <section className="bnrsection">
                    <div className="container">
                        <div className="row">
                            <div className="offset-lg-1 col-lg-10 col-md-12 col-12 text-center">

                                <p>Somthing went wrong!</p>
                            </div>
                        </div>
                    </div>

                </section>}

            <Footer />
        </>
    );
}
