import React, { useState, useEffect } from 'react'
import BreadCrumb from '../component/UI/BreadCrumb';
import Helmet from 'react-helmet'
import ReactStars from 'react-rating-stars-component'
import ProductCard from '../component/UI/ProductCard'
import { getAllProducts } from '../feature/product/productSlice'
import { useDispatch, useSelector } from "react-redux"

import "../style/Stores.css"
import { getProdCategorys } from '../feature/proCate/prodCateSlice';
import { Link } from 'react-router-dom';

const Store = () => {
    const [grid, setGrid] = useState(4);
    const dispatch = useDispatch()

    const prodCateState = useSelector((state) => state.prodCate.productCategorys)
    const getProducts = () => {
        dispatch(getAllProducts())
    }
    const getProdCate = () => {
        dispatch(getProdCategorys())
    }
    useEffect(() => {
        getProducts()
        getProdCate()
    }, [])
    const [productState, setProductState] = useState()
    const allProduts = useSelector((state) => state.product.products.filter((item) => item.prodCategory === "Đang cập nhật"));
    useEffect(() => {
        setProductState(allProduts)
    }, [allProduts])

    console.log(productState);
    const handleFilter = category => {

        if (category === "Đang cập nhật") {
            const filteredProducts = productState.filter((item) => item.prodCategory === "Đang cập nhật")
            setProductState(filteredProducts);
        }
        if (category === "Dị Giới") {
            const filteredProducts = productState.filter((item) => item.prodCategory === "Dị Giới")
            setProductState(filteredProducts);
        }
        if (category === "Ecchi") {
            const filteredProducts = productState.filter((item) => item.prodCategory === "Ecchi")
            setProductState(filteredProducts);
        }
        if (category === "Gia Đình") {
            const filteredProducts = productState.filter((item) => item.prodCategory === "Gia Đình")
            setProductState(filteredProducts);
        }
        if (category === "Hình Sự") {
            const filteredProducts = productState.filter((item) => item.prodCategory === "Hình Sự")
            setProductState(filteredProducts);
        }
        if (category === "Harem") {
            const filteredProducts = productState.filter((item) => item.prodCategory === "Harem")
            setProductState(filteredProducts);
        }
        if (category === "Isekai") {
            const filteredProducts = productState.filter((item) => item.prodCategory === "Isekai")
            setProductState(filteredProducts);
        }
        if (category === "Khoa Học") {
            const filteredProducts = productState.filter((item) => item.prodCategory === "Khoa Học")
            setProductState(filteredProducts);
        }
        if (category === "Gây cấn") {
            const filteredProducts = productState.filter((item) => item.prodCategory === "Gây cấn")
            setProductState(filteredProducts);
        }
        if (category === "Học Đường") {
            const filteredProducts = productState.filter((item) => item.prodCategory === "Học Đường")
            setProductState(filteredProducts);
        }


    }

    return (
        <div>
            <Helmet>
                <title>Store</title>
            </Helmet>
            <BreadCrumb title={"Store"} />
            <div className='store-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>
                                    Shop by Category
                                </h3>
                                <div>
                                    <ul className='ps-0'>
                                        {
                                            prodCateState?.map((item) => {
                                                return (
                                                    <li><button className='btn border-0' onClick={() => handleFilter(item?.title)}>{item?.title}</button></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            {/* <div className='filter-card mb-3'>
                                <h3 className='filter-title'>
                                    hop by Category
                                </h3>
                                <div>
                                    <h5 className='sub-title'>Availablity</h5>
                                    <div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type="checkbox" value="" id='' />
                                            <label className='form-check-label' htmlFor="">in stock (1)</label>
                                        </div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type="checkbox" value="" id='' />
                                            <label className='form-check-label' htmlFor="">in stock (0)</label>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'>Price</h5>
                                    <div className='d-flex align-items-center gap-3'>
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="floatingInput" placeholder="From" />
                                            <label for="floatingInput">From</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="floatingInput" placeholder="To" />
                                            <label for="floatingInput">To</label>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'>Color</h5>
                                    <div>
                                        <ul className='colors ps-0'>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                    <h5 className='sub-title'>Size</h5>
                                    <div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type="checkbox" value="" id='color-1' />
                                            <label className='form-check-label' htmlFor="color-1">S (2)</label>
                                        </div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type="checkbox" value="" id='color-2' />
                                            <label className='form-check-label' htmlFor="color-2">M (2)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>
                                    Product Tag
                                </h3>
                                <div>
                                    <div className='product-tags d-flex flex-wrap align-items-center gap-3'>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Headphone
                                        </span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Laptop
                                        </span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Mobile
                                        </span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Wireless
                                        </span>
                                    </div>
                                </div>
                            </div> */}
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>
                                    Random Product
                                </h3>
                                <div>
                                    <div className='random-products d-flex'>
                                        <div className='w-50 '>
                                            <img src={allProduts[0]?.image[0]?.url} className='img-fluid' alt='watch' />
                                        </div>
                                        <div className='w-50'>
                                            <h5>{allProduts[0]?.title}</h5>
                                            <ReactStars count={5} size={25} value="3" edit={false} activeColor="#ffd700" />
                                            <h6 className='brand type'><span className='text-dark'>Tác giả:</span> {allProduts[0]?.brand}</h6>
                                            <h6 className='category mb-2 type'><span className='text-dark'>Thể loại:</span> {allProduts[0]?.prodCategory}</h6>
                                        </div>
                                    </div>
                                    <div className='random-products d-flex'>
                                        <div className='w-50'>
                                            <img src={allProduts[1]?.image[0]?.url} className='img-fluid' alt='watch' />
                                        </div>
                                        <div className='w-50'>
                                            <h5>{allProduts[1]?.title}</h5>
                                            <ReactStars count={5} size={25} value="3" edit={false} activeColor="#ffd700" />
                                            <h6 className='brand type'><span className='text-dark'>Tác giả:</span> {allProduts[1]?.brand}</h6>
                                            <h6 className='category mb-2 type'><span className='text-dark'>Thể loại:</span> {allProduts[1]?.prodCategory}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-9'>
                            <div className='filter-sort-grid mb-4'>
                                <div className='d-flex justify-content-between align-content-center'>
                                    <div className='d-flex align-items-center gap-3'>
                                        <p className='mb-0 w-50'>Sort By:</p>
                                        <select name='' className='form-control form-select' id=''>
                                            <option value="manual">Featured</option>
                                            <option value="best-selling" selected="selected">Best selling</option>
                                            <option value="title-ascending">Alphabetically, A-Z</option>
                                            <option value="title-descending">Alphabetically, Z-A</option>
                                            <option value="price-ascending">Price, low to high</option>
                                            <option value="price-descending">Price, high to low</option>
                                            <option value="created-ascending">Date, old to new</option>
                                            <option value="created-descending">Date, new to old</option>
                                        </select>
                                    </div>
                                    <div className='d-flex align-items-center gap-10'>
                                        <p className='totalproduct mb-0'>21 Prodcuts</p>
                                        <div className='d-flex gap-10 align-items-center grid'>
                                            <img onClick={() => { setGrid(3) }} src='images/gr4.svg' className='img-fluid d-block' alt='grid' />
                                            <img onClick={() => { setGrid(4) }} src='images/gr3.svg' className='img-fluid d-block' alt='grid' />
                                            <img onClick={() => { setGrid(6) }} src='images/gr2.svg' className='img-fluid d-block' alt='grid' />
                                            <img onClick={() => { setGrid(12) }} src='images/gr.svg' className='img-fluid d-block' alt='grid' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='products-list pb-5'>
                                <div className='d-flex gap-3 flex-wrap'>
                                    <ProductCard data={productState ? productState : []} grid={grid} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Store