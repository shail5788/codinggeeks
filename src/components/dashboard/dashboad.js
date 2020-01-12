 import React from 'react';
 import NabBar from './navbar';
 import SideBar from './sidebar/sidebar';
 import MainSection from './main-section/mainSection';
 import RightSideBar from './right-sidebar/RightSideBar';
 const DashbaordPage=()=>{

    return (
      <div>
        <NabBar />
        <main>
            <div className="main-section">
                <div className="container">
                    <div className="main-section-data">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                                <SideBar />
                            </div>
                            <div className="col-lg-6 col-md-8 no-pd">
                                <MainSection />
                            </div>
                            <div className="col-lg-3 pd-right-none no-pd">
                                <RightSideBar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </main>

      </div>

    )
 }

 export default DashbaordPage;