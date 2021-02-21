import React from 'react';
import {
    ContactSection, ContatctTitle, Span, Form, InputEmail, InputText, InputSubmit, FormInput, 
    SubInput, TextArea
} from './style'
const Contact = (props) => {
    return(
        <ContactSection>
        <div className="container">
            <ContatctTitle><Span>Drop </Span>Me A line</ContatctTitle>
            <Form action="">
                <FormInput>
                    <InputText type="text" placeholder="Your Name" />
                    <InputEmail type="email" placeholder="Your Email" />
                </FormInput>
                <SubInput type="text" placeholder="Your Subject" />
                <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                <InputSubmit type="submit" value="Send Message" />
            </Form>
        </div>
    </ContactSection>
    )
}

export default Contact;

