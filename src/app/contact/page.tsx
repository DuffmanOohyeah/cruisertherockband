'use client';
import React, { JSX, useState } from 'react';
import Header from '@/components/Header';
import { FaCommentDots } from 'react-icons/fa';
import { ContactFormProps, HandleContactChangeProps } from '@/utils/types';
import { isEmailValid } from '@/utils/isEmailValid';
import Footer from '@/components/Footer';

const formArgs: ContactFormProps = {
    name: '',
    email: '',
    message: '',
};

const getFormAction = ({ name, email, message }: ContactFormProps): string => {
    let mailTo: string = 'duff_beer_corp@hotmail.com';
    if (process.env.NODE_ENV === 'production')
        mailTo = 'cruisertherockband@outlook.com';
    const crlf = '\r\n';
    let formAction: string = `mailto:${mailTo}`;
    formAction += `?subject=Hey Cruiser!`;
    formAction += `&body=${message}`;
    formAction += `${crlf.repeat(2)}Cheers,${crlf}${name}`;
    formAction += `${crlf}${email}`;
    return encodeURI(formAction);
};

const Contact = (): JSX.Element => {
    /*const inpName = useRef<HTMLInputElement>(null);
    const inpEmail = useRef<HTMLInputElement>(null);
    const inpMessage = useRef<HTMLTextAreaElement>(null);*/

    /* const [, setStatus] = useState<string>('');
	const [, setError] = useState<string>(''); */

    const [formValues, setFormValues] = useState<ContactFormProps>(formArgs); // set default
    const emailValid = isEmailValid(formValues.email);

    const handleChange = (evt: HandleContactChangeProps): void => {
        const {
            target: { id, value },
        } = evt;
        // setFormValues((prevState) => ({ ...prevState, [id]: value.trim() }));
        setFormValues((prev) => ({ ...prev, [id]: value.trim() }));
        // console.log('id/value:', `${id}/${value}`);
    };

    /*const handleFormSubmit = async (event: { preventDefault: () => void; target: unknown; }) => {
		event.preventDefault();
		try {
			setStatus('pending');
			setError('');
			const myForm = event.target;
			const formData = new FormData(myForm);

			console.log('myForm:', myForm);
			console.log('formData:', formData);

			const res = await fetch('/__forms.html', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: new URLSearchParams(formData).toString(),
			});

			console.log('res:',res);

			if (res.status === 200) {
				setStatus('ok');
			} else {
				setStatus('error');
				setError(`${res.status} ${res.statusText}`);
			}
		} catch (err) {
			setStatus('error');
			setError(`${err}`);
		}
	};*/

    return (
        <div id='contactBg' className='pageBg'>
            <Header />
            <div className='pageCard w-[90%] md:w-[70%] lg:w-[50%]'>
                <h1>
                    <FaCommentDots className='align-middle inline-block mr-[7px]' />{' '}
                    Contact :: Give us a shout
                </h1>
                <br />
                <form
                    action={getFormAction(formValues)}
                    method='post'
                    encType='application/x-www-form-urlencoded'
                    // onSubmit={handleFormSubmit}
                    data-netlify='true'
                >
                    <label
                        htmlFor='name'
                        className='w-[25%] inline-block text-right pr-[20px]'
                    >
                        Name:
                    </label>
                    <input
                        id='name'
                        type='text'
                        size={40}
                        //ref={inpName}
                        className={`bg-white shadow appearance-none border-[1px] rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            !formValues.name.trim().length
                                ? 'border-(--color-red-light)'
                                : ''
                        }`}
                        defaultValue={formValues.name}
                        onChange={handleChange}
                    />
                    {!formValues.name ? (
                        <>
                            <br />
                            <div className='max-w-[90%] md:max-w-[85%] lg:max-w-[88%] xl:max-w-[80%] 2xl:max-w-[70%] text-(--color-red-light) text-right text-sm'>
                                Name required.
                            </div>
                        </>
                    ) : (
                        <br />
                    )}
                    <br />
                    <label
                        htmlFor='email'
                        className='w-[25%] inline-block text-right pr-[20px]'
                    >
                        Email:
                    </label>
                    <input
                        id='email'
                        type='text'
                        size={40}
                        //ref={inpEmail}
                        className={`bg-white shadow appearance-none border-[1px] rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            emailValid ? '' : 'border-(--color-red-light)'
                        }`}
                        defaultValue={formValues.email}
                        onChange={handleChange}
                    />
                    {!emailValid ? (
                        <>
                            <br />
                            <div className='max-w-[90%] md:max-w-[85%] lg:max-w-[88%] xl:max-w-[80%] 2xl:max-w-[70%] text-(--color-red-light) text-right text-sm'>
                                Valid email required.
                            </div>
                        </>
                    ) : (
                        <br />
                    )}
                    <br />
                    <label
                        htmlFor='message'
                        className='w-[25%] inline-block text-right pr-[20px] align-top'
                    >
                        Message:
                    </label>
                    <textarea
                        id='message'
                        cols={44}
                        rows={5}
                        //ref={inpMessage}
                        className={`bg-white shadow appearance-none border-[1px] rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            !formValues.message.trim().length
                                ? 'border-(--color-red-light)'
                                : ''
                        }`}
                        defaultValue={formValues.message}
                        onChange={handleChange}
                    ></textarea>
                    {!formValues.message && (
                        <>
                            <br />
                            <div className='max-w-[90%] md:max-w-[85%] lg:max-w-[88%] xl:max-w-[80%] 2xl:max-w-[70%] text-(--color-red-light) text-right text-sm'>
                                Message required.
                            </div>
                        </>
                    )}

                    <div className='text-right pt-[50px]'>
                        <button
                            type='submit'
                            className='bg-(--color-gold-light) hover:bg-(--color-gold-dark) py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer'
                            disabled={
                                !formValues.name ||
                                !emailValid ||
                                !formValues.message
                            }
                        >
                            Send It
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
