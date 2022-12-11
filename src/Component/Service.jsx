import React from "react";
import Ourcard from "./Ourcard";
import Sdata from "./Sdata";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Our Service</h1>
      </div>
      <div className="cover">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {Sdata.map((indexvalue, indexnumber) => {
                  return (
                    <Ourcard
                      key={indexvalue}
                      imgsrc={indexvalue.imgsrc}
                      title={indexvalue.title}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
