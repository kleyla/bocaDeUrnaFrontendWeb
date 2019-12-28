import React from "react";

import Navbar from "./../components/navBar/NavBar.jsx";
import PageHeader from "./../components/pageHeader/PageHeader.jsx";
import Footer from "./../components/footer/Footer.jsx";

class Index extends React.Component {
    constructor(){
      super();
    }
    componentDidMount() {
      
      document.body.classList.toggle("index-page");
      
    }
    componentWillUnmount() {
      document.body.classList.toggle("index-page");
    }
    render() {
      return (
        <>
          <Navbar />
          <div className="wrapper">
            <PageHeader />
            <div className="main">
              </div>
              <Footer />
          </div>
        </>
      );
    }
  }
  
  export default Index;
  