import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../axiosService";

const Create = () => {
    const [cateName, setCateName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setCateName(event.target.value);
        if (event.target.value === '') {
            setError('CategoryName can not blank!');
        } else {
            setError('');
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (cateName === '') {
            setError('CategoryName can not blank!');
        } else {
            setError('');
            createProduct(cateName, status)
            navigate("/lab7", { replace: true })
        }
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input className="form-control" type="text" value={cateName} onChange={handleChange} />
                </label>
                <b style={{ color: "red" }}>{error}</b>
                <br />
                <input className="btn btn-success mt-2" type="submit" value="Add new" />
            </form>
        </>
    );
};

export default Create;
