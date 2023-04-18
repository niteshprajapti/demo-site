import React, { useState } from 'react';
import { Link } from '@inertiajs/inertia-react';
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Header from '../common/Header'
import Footer from '../common/Footer'

function Addaddress(props) {
    let History = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const user = JSON.parse(localStorage.getItem('user'));
    const [inputList, setInputList] = useState([{ address_line1: "", address_line2: "", address_line3: "" }]);
    const onSubmit = data => {

        // const userData = {...userInfo, ...data}

        fetch("http://127.0.0.1:8000/api/addresses", {
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body": JSON.stringify({
                address_line10: data.address_line10,
                address_line20: data.address_line20,
                address_line30: data.address_line30,
                address_line11: data.address_line11,
                address_line21: data.address_line21,
                address_line31: data.address_line31,
                address_line12: data.address_line12,
                address_line22: data.address_line22,
                address_line32: data.address_line32,
                user_id: data.user_id,
            })
        })
            .then(response => response.json())
            .then(response => {

                if (parseInt(response.status) == 200) {
                    History('/thankyou');
                }

            })
            .catch(err => {
                console.log(err);
            });
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { address_line1: "", address_line2: "", address_line3: "" }]);
        console.log([...inputList]);
    };

    const handleBack = () => {
        History('/address-page');
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
                                    <div id="slide04" >
                                        <h3>Enter your Previous Address</h3>
                                        {console.log(inputList)}
                                        {inputList.map((x, i) => {
                                            return (
                                                <div className="mb-3 text-start">
                                                    <input
                                                        {...register("user_id", {

                                                        })}
                                                        type="hidden" defaultValue={user.id} />
                                                    <label className="form-label">Previous Address {i + 1}</label>
                                                    <input
                                                        type="text"
                                                        {...register(`address_line1${i}`, {
                                                            required: {
                                                                value: true,
                                                                message: "Address Line 1 is required!"
                                                            },
                                                        })}
                                                        defaultValue={Object.values(x)[0]}

                                                        className="form-control mb-3"
                                                        placeholder="Address line 1" />
                                                    <span className="error_msg error">{errors.address_line1?.message}</span>
                                                    <input
                                                        type="text"
                                                        {...register(`address_line2${i}`, {
                                                            required: {
                                                                value: true,
                                                                message: "Address Line 2 is required!"
                                                            },
                                                        })}
                                                        defaultValue={Object.values(x)[1]}

                                                        className="form-control mb-3"
                                                        placeholder="Address line 2" />
                                                    <span className="error_msg error">{errors.address_line2?.message}</span>
                                                    <input type="text"
                                                        {...register(`address_line3${i}`, {
                                                            required: {
                                                                value: true,
                                                                message: "Address Line 3 is required!"
                                                            },
                                                        })}
                                                        defaultValue={Object.values(x)[2]}

                                                        className="form-control mb-3"
                                                        placeholder="Address line 3" />
                                                    <span className="error_msg error">{errors.address_line3?.message}</span>
                                                </div>

                                            );
                                        })}
                                        <div className="mb-3 text-center" id="submitoradd01">
                                            <button type="button" className="btn btn-success tothank" onClick={handleSubmit(onSubmit)} >Submit</button>
                                            {inputList.length !== 3 &&
                                                <p> <a href="javascript:;" onClick={handleAddClick} id="showadrs2">Add Another Address</a></p>}

                                            {inputList.length === 1 &&
                                                <p> <a href="javascript:;" onClick={handleBack} id="showadrs2">back</a></p>
                                            }

                                            {inputList.length !== 1 &&
                                                <p><a href="javascript:;" id="remove4" onClick={() => handleRemoveClick()}>Remove Address</a></p>}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                :
                <section className="bnrsection">
                    <div className="container">
                        <div className="row">
                            <div className="offset-lg-1 col-lg-10 col-md-12 col-12 text-center">

                                <p>Somthing went wrong!</p>
                            </div>
                        </div>
                    </div>

                </section>

            }

            <Footer />
        </>

    );
}

export default Addaddress;
