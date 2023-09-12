import './index.css';
import { useState } from 'react';
import { TechCardContainer, CardNumberContainer } from "./styledComponent"
import { BiCheck } from "react-icons/bi";

const Home=()=> {

   const [showBasic, setShowBasic] = useState(true);
  const [showShop, setShowShop] = useState(false);
  const [showAdv, setShowAdv] = useState(false);

  const colorBorderBt1= showBasic?'border-cls':'';
  const colorBorderBt2= showShop?'border-cls':'';
  const colorBorderBt3= showAdv?'border-cls':'';

  const handleButtonClick = (contentNumber) => {
    if (contentNumber === 1) {
        setShowBasic(true);
        setShowShop(false);
        setShowAdv(false);
    } else if (contentNumber === 2) {
        setShowBasic(false);
        setShowShop(true);
        setShowAdv(false);
    }
    else if (contentNumber === 3) {
        setShowBasic(false);
        setShowShop(false);
        setShowAdv(true);
      }
  };


  return (
    <>
    <div className='main-cont pb-4'>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><img src="https://res.cloudinary.com/dp8ggbibl/image/upload/v1694503107/samples/Shopify_logo_2018.svg_xtzlsu.png" className="logo"/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle font-weight-bold text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Solutions
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link font-weight-bold text-dark" href="#">Pricing</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle font-weight-bold text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Resources
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
    <span class="navbar-text m-2 p-1 text-dark font-weight-bold">
      Log in
    </span>
    <span className="trail-button p-1 pl-4">
      Start free trail 
    </span>
  </div>
</nav>

<div className="d-none d-md-block">
<div className='mt-2 d-flex flex-row justify-content-center'>
  <div className='d-flex center-button text-center p-1'>
    <button className="pay-button text-light ml-1 text-center">Pay Monthly</button>
    <p className='mt-2 m-1 text-center font-weight-bold'>Pay Yearly(Save 25%)</p>
  </div>
</div>
</div>

<div class=" d-flex justify-content-center mt-3 d-md-none d-none">
    <button className={`btn btn-light font-weight-bold ${colorBorderBt1}`} onClick={()=> handleButtonClick(1) }>Basic</button>
    <button className={`btn btn-light font-weight-bold ${colorBorderBt2}`} onClick={()=> handleButtonClick(2)}>Shopify</button>
    <button className={`btn btn-light font-weight-bold ${colorBorderBt3}`} onClick={()=> handleButtonClick(3)}>Advanced</button>
</div>

<div>
{showBasic && (
 <div className="d-block d-md-none">
<div className='container mt-4'>
<div className="row d-flex justify-content-center">
   
<div className='col-12'>
<TechCardContainer  className="card d-flex flex-column justify-content-around align-items-center mb-2 mt-3  bg-white rounded w-100">
    <div className='p-2'>
    <h2 className='pl-3'>Basic</h2>
    <p className="pl-3 para-second">FOR INDIVIDUALS & SMALL BUSINESSES</p>
    <p className="pl-3  para-third">Everything you need to Create your store,ship products,and process payments</p>
    <div className='d-flex'>
    <h1 className='pl-3 cost'>₹1,994</h1>
    <p className='month'>INR /mo</p>
    </div>
    <p className='light-background p-3'>Get Your first 3 months for ₹20/mo</p>
    <p className="pl-3 side-heading">Whats included on Basic</p>
    <p className="check-class pl-3"> <BiCheck color="#50f273" size="23" className=''/> Basic Reports</p>
    <p className="check-class pl-3"> <BiCheck color="#50f273" size="23" className=''/>upto 1000 inventory locatins</p>
    <p className="check-class pl-3"><BiCheck color="#50f273" size="23" className=''/>2 staff accounts</p>
    <div className="text-center mb-2">
      <button className='free-button p-1 '>Try for Free</button>
    </div>
    </div>
    <CardNumberContainer className="shadow-lg rounded-pill cardNoCon h6 d-flex justify-content-center align-items-center ml-2"> Most Popular</CardNumberContainer>
    </TechCardContainer>
    </div>


</div>
</div>
</div>
        
      )}

{showShop && (

<div className='container mt-4'>
<div className="row d-flex justify-content-center">
<div className="d-block d-md-none">
<div className="col-12">
  <div className='card p-3 shadow  mb-5 bg-white rounded w-100 '>
  <h2 className='pl-3 mt-2'>Shopify</h2>
    <p className="pl-3 para-second">FOR SMALL BUSINESSES</p>
    <p className="pl-3  para-third">Level Up your business with professional reporting and more staff accounts</p>
    <div className='d-flex'>
    <h1 className='pl-3 cost'>₹7,447</h1>
    <p className='month'>INR /mo</p>
    </div>
    <p className='light-background p-3'>Get Your first 3 months for ₹20/mo</p>
    <p className="pl-3 side-heading">What's included on Shopify</p>
    <p className="check-class pl-3"> <BiCheck color="#50f273" size="23" className=''/> Professional Reports</p>
    <p className="check-class pl-3"> <BiCheck color="#50f273" size="23" className=''/>upto 1000 inventory locatins</p>
    <p className="check-class pl-3"><BiCheck color="#50f273" size="23" className=''/>5 staff accounts</p>
    <div>
    <button className='free-button p-1'>Try for Free</button>
    </div>
  </div>
  </div>
  </div>

</div>
</div>
        
      )}

{showAdv && (
    <div className='container mt-4'>
    <div className="row d-flex justify-content-center">
    <div className="d-block d-md-none">
    <div className="col-12 ">
      <div className='card  p-3 shadow mb-5 bg-white rounded w-100'>
      <h2 className='pl-3 mt-2'>Advanced</h2>
        <p className="pl-3 para-second">FOR MEDIUM TO LARGE BUSINESSES</p>
        <p className="pl-3  para-third">Get the best of shop with custom reporting and your lowest transaction fees</p>
        <div className='d-flex'>
        <h1 className='pl-3 cost'>₹30,164</h1>
        <p className='month'>INR /mo</p>
        </div>
        <p className='light-background p-3'>Get Your first 3 months for ₹20/mo</p>
        <p className="pl-3 side-heading">What's included on Advanced</p>
        <p className="check-class pl-3"> <BiCheck color="#50f273" size="23" className=''/> Custom Report builder</p>
        <p className="check-class pl-3"> <BiCheck color="#50f273" size="23" className=''/>upto 1,000 inventory locatins</p>
        <p className="check-class pl-3"><BiCheck color="#50f273" size="23" className=''/>15 staff accounts</p>
        <div>
        <button className='free-button p-1 ml-1'>Try for Free</button>
        </div>
      </div>
      </div>
      </div>
  
  </div>
  </div>
        
      )}

</div>
<div className="d-none d-md-block">
<div className='container mt-4'>
    <div className="row d-flex justify-content-center">
        
       
  <div className='col-lg-4 col-md-6' >
  
      <TechCardContainer  className="card d-flex flex-column justify-content-around align-items-center mb-2 mt-3 m-2  bg-white rounded w-100">
        <div className='p-2'>
        <h2 className='pl-3'>Basic</h2>
        <p className="pl-3 para-second">FOR INDIVIDUALS & SMALL BUSINESSES</p>
        <p className="pl-3  para-third">Everything you need to Create your store,ship products,and process payments</p>
        <div className='d-flex'>
        <h1 className='pl-3 cost'>₹1,994</h1>
        <p className='month'>INR /mo</p>
        </div>
        <p className='light-background p-3'>Get Your first 3 months for ₹20/mo</p>
        <p className="pl-3 side-heading">Whats included on Basic</p>
        <p className="check-class pl-3"> <BiCheck color="#50f273" size="23" className=''/> Basic Reports</p>
        <p className="check-class pl-3"> <BiCheck color="#50f273" size="23" className=''/>upto 1000 inventory locatins</p>
        <p className="check-class pl-3"><BiCheck color="#50f273" size="23" className=''/>2 staff accounts</p>
        <div className="text-center mb-2">
          <button className='free-button p-1 '>Try for Free</button>
        </div>
        </div>
        <CardNumberContainer className="shadow-lg rounded-pill cardNoCon h6 d-flex justify-content-center align-items-center ml-2"> Most Popular</CardNumberContainer>
        </TechCardContainer>
      </div>
      
      
      
      <div className=" col-lg-4 col-md-6" >
      <div className='card m-3 p-3 shadow  mb-5 bg-white rounded w-100 '>
      <h2 className='pl-3 mt-2'>Shopify</h2>
        <p className="pl-3 para-second">FOR SMALL BUSINESSES</p>
        <p className="pl-3  para-third">Level Up your business with professional reporting and more staff accounts</p>
        <div className='d-flex'>
        <h1 className='pl-3 cost'>₹7,447</h1>
        <p className='month'>INR /mo</p>
        </div>
        <p className='light-background p-3'>Get Your first 3 months for ₹20/mo</p>
        <p className="pl-3 side-heading">What's included on Shopify</p>
        <p className="check-class pl-3"> <BiCheck color="#50f273" size="23" className=''/> Professional Reports</p>
        <p className="check-class pl-3"> <BiCheck color="#50f273" size="23" className=''/>upto 1000 inventory locatins</p>
        <p className="check-class pl-3"><BiCheck color="#50f273" size="23" className=''/>5 staff accounts</p>
        <div>
        <button className='free-button p-1'>Try for Free</button>
        </div>
      </div>
      </div>
     

    
      <div className="col-lg-4 col-md-6">
      <div className='card m-3 p-3 shadow mb-5 bg-white rounded w-100'>
      <h2 className='pl-3 mt-2'>Advanced</h2>
        <p className="pl-3 para-second">FOR MEDIUM TO LARGE BUSINESSES</p>
        <p className="pl-3  para-third">Get the best of shop with custom reporting and your lowest transaction fees</p>
        <div className='d-flex'>
        <h1 className='pl-3 cost'>₹30,164</h1>
        <p className='month'>INR /mo</p>
        </div>
        <p className='light-background p-3'>Get Your first 3 months for ₹20/mo</p>
        <p className="pl-3 side-heading">What's included on Advanced</p>
        <p className="check-class pl-3"> <BiCheck color="#50f273" size="23" className=''/> Custom Report builder</p>
        <p className="check-class pl-3"> <BiCheck color="#50f273" size="23" className=''/>upto 1,000 inventory locatins</p>
        <p className="check-class pl-3"><BiCheck color="#50f273" size="23" className=''/>15 staff accounts</p>
        <div>
        <button className='free-button p-1 ml-1'>Try for Free</button>
        </div>
      </div>
      </div>
      </div>

    </div>
  </div>
  </div>
    </>
    
  )
}

export default Home;
