import React, { Component } from 'react';
import Input from './input';
import Joi from 'joi-browser';
import Select from './select';
import ImageInput from './imageInput';
import TextArea from './textArea';

class Form extends Component {
    state = { 
        data: {},
        errors: {}
    }

    validate = () => {
        const options = { abortEarly: false}
        const {error} = Joi.validate(this.state.data, this.schema, options);
        if(!error) return null;

        const errors = {};
        for(let item of error.details)
            errors[item.path[0]] = item.message;

        return errors;
    }

    validateProperty = ({name, value}) => {
        const obj = { [name]: value};
        const schema = { [name]: this.schema[name]};
        const {error} = Joi.validate(obj, schema);

        return error ? error.details[0].message : null;
    }

    handleChange = ({ target: input}) => {
        const errors = {...this.state.errors}
        const errorMessage = this.validateProperty(input)
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name]

        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({data, errors});
    }

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        console.log(errors);
        this.setState({ errors: errors || {} })
        if(errors) return;

        this.doSubmit()
    }

    renderInput(name, placeholder, symbol, label, type = 'text') {
        const { data, errors} = this.state;
        return (
            <Input 
                name={name}
                type={type}
                value={data[name]}
                label={label}
                onChange={this.handleChange} 
                error={errors[name]} 
                placeholder={placeholder}
                symbol={symbol} 
            />
        )
    }

    renderImage(name, label) {
        const { data, errors} = this.state;
        return (
            <ImageInput 
                name={name}
                value={data[name]}
                label={label}
                onChange={this.handleChange} 
                error={errors[name]} 
            />
        )
    }

    renderTextArea(name, placeholder) {
        const {data, errors} = this.state;
        return (
            <TextArea 
                name={name}
                value={data[name]}
                placeholder={placeholder}
                onChange={this.handleChange}
                error={errors[name]}
            />
        )
    }

    renderSelect(name, label, options) {
        const { data, errors } = this.state;
        return (
            <Select 
                name={name}
                value={data[name]}
                label={label}
                options={options}
                onChange={this.handleChange}
                error={errors[name]}
            />
        );
    }

    renderButton(label) {
        return (
            <button disabled={this.validate()} className="btn btn-block btn-sm font-weight-bold py-2" style={{ backgroundColor: '#727CF5', color: '#fff', borderRadius: 20}}>
                {label}
            </button>
        )
        
    } 
}
 
export default Form;