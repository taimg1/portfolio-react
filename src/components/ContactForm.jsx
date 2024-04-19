import { Formik, Field, Form } from 'formik';
import { object, string, InferType } from 'yup';
import {useEffect, useState} from "react";

const validationSchema = object({
    firstName: string().required('First name is required'),
    lastName: string().required('Last name is required'),
    email: string().email('Invalid email format').required('Email is required'),
    message: string().required('Message is required').min(10, 'Message must be at least 10 characters').max(500, 'Message must be less than 500 characters')
});

export const ContactForm = () => {
    const [emailMassage, setEmailMassage] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const isDisabled = emailMassage.email.length === 0 ||
        emailMassage.firstName.length === 0 ||
        emailMassage.lastName.length === 0 ||
        emailMassage.message.length === 0;

    const handlerChange = (e, name) => {
        setEmailMassage({
            ...emailMassage,
            [name]: e.target.value
        })

    }
    return (
        <div id="contact" className="max-w-lg mx-auto bg-gray-900 mt-7 rounded-lg">
            <h1 className="text-center text-2xl text-gray-400">Contact us</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: ''
                }}
                //validationSchema={validationSchema}
                onSubmit={async () => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(emailMassage, null, 2));
                }}
            >
                {({ values, handleChange, errors, touched }) => (
                <Form className="p-4">

                    <div className="relative z-0 w-full mb-5 group">
                        <Field type="email" name="floating_email" id="floating_email"
                                 value={emailMassage.email}
                               onChange={(e) => handlerChange(e, 'email')}
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>

                        <label htmlFor="floating_email"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                            address</label>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <Field type="text" name="floating_first_name" id="floating_first_name"
                                      value={emailMassage.firstName}
                                   onChange={(e) => handlerChange(e, 'firstName')}
                                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                   placeholder=" " required/>
                            <label htmlFor="floating_first_name"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First
                                name</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <Field type="text" name="floating_last_name" id="floating_last_name"
                                   value={emailMassage.lastName}
                                   onChange={(e) => handlerChange(e, 'lastName')}
                                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                   placeholder=" " required/>
                            <label htmlFor="floating_last_name"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last
                                name</label>
                        </div>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <label htmlFor="message"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                            message</label>
                        <Field as="textarea" id="message" rows="4"
                                  value={emailMassage.message}
                                  onChange={(e) => handlerChange(e, 'message')}
                                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Leave a comment..."/>
                    </div>
                    <button type="submit" disabled={isDisabled}
                            className={`text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                                ${isDisabled ? 'bg-gray-500 hover:bg-gray-600 focus:ring-gray-300 dark:bg-gray-400 dark:hover:bg-gray-500 dark:focus:ring-gray-600' : 'bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'}`}>
                        Submit
                    </button>
                </Form>
                )}
            </Formik>
        </div>
    )
}