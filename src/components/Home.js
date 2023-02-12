import {useState, useEffect} from 'react';

import Products from './Products';

const Home=()=>{

  const [searchText, setSearchText] = useState('');
  const [productList, setProductList]= useState([]);
  const [filteredProductList, setFilteredProductList]= useState([]);

  
  async function getProductList(){
      const response = await fetch("https://fakestoreapi.com/products");

      if(!response.ok){
          return;
      }

      const data = await response.json();    
      setProductList(data);
      setFilteredProductList(data);      
  }

  useEffect(()=>{
    getProductList();
  },[]);


  const filteredData =(serachText)=>{
     const newList =  productList.filter((product)=>{
        return product.title.toLowerCase().includes(searchText.toLowerCase());
       });
     setFilteredProductList(newList)
  }

  
  const serachTextHandler =(e)=>{
    //console.log('serachText', searchText)
    setSearchText(e.target.value);
  }
    return(
        <div className='mt-3'>
           <div className='bg-slate-500 text-center h-11 p-3 '>
              <input className='boder border-slate-800' type="text" placeholder='Enter your search' onChange={serachTextHandler}/>
              <button className='ml-2 border border-slate-800 px-1'  onClick={filteredData}>Search</button>
            </div>

           <div className='flex flex-wrap justify-around'>
               {
              filteredProductList.map((product)=>{
                return <Products key={product.id} product={product}/>
              })
              } 
           </div> 
        </div>
    )
}
export default Home;
