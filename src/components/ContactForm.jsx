// import { Formik, Field, Form } from 'formik';
// import {useState} from "react";
import { useForm } from 'react-hook-form';
import {
    Card,
    Input,
    Button,
    Typography,
    Textarea,
} from "@material-tailwind/react";
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
    const { register, handleSubmit, formState: { errors, isValid } }
        = useForm({ mode: 'onChange' ,
        defaultValues:{
            "Full name": "",
            "Email": "",
            "Subject": "",
            "Message": "",
    }});
    const onSubmit = data => {

        const templateParams = {
            from_name: data["Full name"],
            from_email: data["Email"],
            subject: data["Subject"],
            message: data["Message"],
        };
        console.log(templateParams);
        // emailjs
        //     .sendForm('service_awneimj', 'template_uq96yni', templateParams, {
        //         publicKey: '7WcfcRvn67m1D_kXJ',
        //     })
        //     .then(
        //         () => {
        //             console.log('SUCCESS!');
        //         },
        //         (error) => {
        //             console.log('FAILED...', error.text);
        //         },
        //     );
    };

    return (
        <div className="flex justify-center mt-5 ">
            <Card color="white" className="p-6">
                <Typography variant="h4" color="blue-gray">
                    Contact Us
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    If you have any questions, feel free to contact us
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Name
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="John Smith"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            {...register("Full name", {required: true})}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Email
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Subject
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Subject"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            {...register("Subject", {required: true, min:5, max: 25})}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Message
                        </Typography>
                        <Textarea
                            size="lg"
                            placeholder="Message..."
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            {...register("Message", {required: true, minLength: 5})}
                        />
                        {errors.Message && <p>Your message must be at least 5 characters</p>}
                    </div>

                    <Button type="submit" className="mt-6" fullWidth disabled={!isValid}>
                        Send
                    </Button>

                </form>
            </Card>
        </div>

    );
}


