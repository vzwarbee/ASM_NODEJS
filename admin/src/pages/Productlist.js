import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { delProduct, getProducts } from '../features/product/productSlice';
import { Link } from 'react-router-dom'
import { AiOutlineEdit, AiTwotoneDelete } from 'react-icons/ai'
import HeadTitle from '../component/UI/titleHead'
import { toast } from "react-toastify"
const columns = [
    {
        title: 'SNo',
        dataIndex: 'key',
    },
    {
        title: 'Title',
        dataIndex: 'title',
    },
    {
        title: 'Category',
        dataIndex: 'category',
    },
    {
        title: 'Thương hiệu',
        dataIndex: 'brand',
    },
    {
        title: 'Mô tả',
        dataIndex: 'desc',
    },
    {
        title: 'Giá',
        dataIndex: 'price',
    },
    {
        title: 'Action',
        dataIndex: 'action',
    },
];


const Productlist = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const deleteProduct = (id) => {
        if (id) {
            console.log(id);
            dispatch(delProduct(id));
        } else {
            toast.error("Lỗi id người sản phẩm")
        }
    }

    const productState = useSelector((state) => state.product.products);

    const data1 = [];
    for (let i = 0; i < productState.length; i++) {
        data1.push({
            key: i,
            title: productState[i].title,
            category: productState[i].prodCategory,
            brand: productState[i].brand,
            desc: productState[i].description,
            price: productState[i].price,
            action: (<div className='  fs-3 d-flex w-100 align-items-center gap-3'>
                <button className='green button-action' ><AiOutlineEdit /></button>
                <button className='red button-action' onClick={() => deleteProduct(productState[i]._id)}><AiTwotoneDelete /></button>
            </div>
            ),

        });
    }


    return (
        <div>
            <HeadTitle title='List Product' />
            <h3 className='mt-2 title'>Danh sách sản phẩm</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
}

export default Productlist