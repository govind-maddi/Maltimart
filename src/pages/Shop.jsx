import React, { useEffect, useState } from 'react'
import ProductCard from '../components/UI/ProductCard'

import Select from 'react-select'

import '../styles/shop.css'
import products from '../assets/data/products'

import productbackground from '../assets/images/common-section-bg-crop.jpg'
import { useNavigate } from 'react-router-dom'

const selectStyles={
    control:(baseStyles,state) => ({
       ...baseStyles,
       width:'200px',
       padding:'0.3rem 0.5rem',
       color:'#ffffff',
       backgroundColor:'#0a1d37',
       border:'#f4ds2f',
       
       
    }),
    option:(baseStyles,state) => ({
       
       backgroundColor:'#0a1d37',
       color:'#ffffff',
       padding:'0.5rem 0.5rem 0.5rem 0.5rem',
       borderBottom:'0.2px #ffffff solid'
    }),
    container:(baseStyles,state) => ({
     ...baseStyles,
    width:'200px',
    border:'none',
    
  }),
  valueContainer:(baseStyles) => ({
     ...baseStyles,
     color:'#ffffff',
     padding:'0rem',
  }),
  menu:(provided) => ({
   ...provided,
   overflowX:'hidden',
   margin:'0rem'
  }),
  indicatorSeparator: (provided) => ({
   ...provided,
   backgroundColor: 'transparent',
 }),
 dropdownIndicator: (provided, state) => ({
   ...provided,
   transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none', 
   transition: 'transform 0.3s', 
 }),
 placeholder:(provided, state) => ({
   ...provided,
   color:'#ffffff'
 }),
 singleValue:(provided) => ({
  ...provided,
  color:'#ffffff',
 })
}

function Shop() {

  const [defaultProducts,setDefaultProducts] = useState(products);
  const [modifiedProducts,setModifiedProducts] = useState(products);
  const [selectedOption,setSelectedOption] = useState(null);
  const [selectedOption1,setSelectedOption1] = useState(null);
  const [searchInput,setSearchInput] = useState('');

  const navigate = useNavigate();

  const options = [
    { value: 'all', label: 'All' },
    { value: 'sofa', label: 'Sofa' },
    { value: 'chair', label: 'Chair' },
    { value: 'mobile', label: 'Mobile' },
    { value: 'watch', label: 'Watch' },
    { value: 'wireless', label: 'Wireless' },

  ]

  const options1 = [
    {value:'ascending', label:'ascending'},
    {value:'normal', label:'normal'},
    {value:'descending',label:'descending'},
  ]
  
  useEffect(() => {
    const filterProducts = () => {
      if(selectedOption !== null && selectedOption.value !== 'all'){
        setModifiedProducts(products.filter((item,index) => item.category === selectedOption.value));}
      else
        setModifiedProducts(defaultProducts);

    }

    filterProducts();
    setSelectedOption1(options1[1]);
  },[selectedOption]);

  useEffect(() => {
    const sortProducts = () => {
      if(selectedOption1 !== null && selectedOption1.value === 'ascending')
        setModifiedProducts(prevmodifiedProducts => prevmodifiedProducts.slice().sort((a,b) => a.price - b.price));
      else if(selectedOption1 !== null && selectedOption1.value === 'descending')
        setModifiedProducts(prevmodifiedProducts => prevmodifiedProducts.slice().sort((a,b) => b.price - a.price));
    }
    sortProducts();
  },[selectedOption1]);

  const searchProducts = () => {
    if(searchInput !== '')
      {
        let tempproducts = modifiedProducts;
    tempproducts = tempproducts.filter((item) => item.productName.includes(searchInput));
    setModifiedProducts(tempproducts);
      }
    else{
      setModifiedProducts(defaultProducts);
    }
  }
  
  const handleChange = (option) => {
    setSelectedOption(option);
    console.log(option);
  }

  const handleChange1 = (option) => {
    setSelectedOption1(option);
    console.log(option);
  }

  const loadProductDetail = (item) => {
    /* navigate(`/shop/${item.id}`); */
    navigate('home');
  }

  return (
    <div id='main_cont_shop'>

      <section id='main_cont_prodbackimg'>
        <header>Products</header>
      </section>

      <section id='main_cont_searchrefine'>
        <section style={{marginRight:'10%'}}>  
          <Select styles={selectStyles} options={options} value={selectedOption} isClearable={false} isSearchable={false} placeholder='Select Filter' onChange={handleChange}></Select>
        </section>

        <section style={{marginRight:'10px'}}>
          <Select styles={selectStyles} options={options1} value={selectedOption1} isClearable={false} isSearchable={false} placeholder='Select Sort' onChange={handleChange1}></Select>
        </section>

        <section id='search_cont'>
          <input type="text" placeholder='Search' onChange={(e) => setSearchInput(e.target.value)}/>
          <i className="ri-search-line" onClick={searchProducts}></i>
        </section>
      </section>

      <div id='main_cont_productgrid'>
        {modifiedProducts.map((item,index) => {
          return <ProductCard key={index} product={item} onClick={() => alert('ji')}></ProductCard>
        })}
      </div>

    </div>
  )
}

export default Shop