import { useState, useEffect } from "react";
import axios from "axios";
import ModalForm from "./ModalForm";
import { getProduct } from "../axiosService";

const Index = () => {
    
    const [categories, setCategories] = useState([]);


    const deleteCategory = (id) => {
        if (window.confirm("Are you want to delete?")) {
            axios.delete(`http://localhost:3000/categories/${id}`).then(res => {
                if (res.status === 200) {
                    alert("Delete success!");
                    getCategories()
                }
            })
        }
    }

    const getCategories = async () => {
        try {
            const response = await getProduct();
            setCategories(response.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

    const getCategoryContent = (myArr) => {
        if (myArr.length > 0) {
            return myArr.map((item) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.categoryName}</td>
                    <td >
                        <ModalForm title="Update" type="update" params={item.id}/>
                        <button className="btn btn-danger" onClick={() => deleteCategory(item.id)}>Delete</button>
                    </td>
                </tr>
            ));
        }
    };

    

    return (
        <>
            <h1>Categories Management</h1>
                        <ModalForm title="Create Category" type='create'/>
            <table className="table table-bordered mt-3">
                <thead>
                    <tr border="1">
                        <th>Id</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {getCategoryContent(categories)}
                </tbody>
            </table>
            

        </>
    );
};

export default Index;
