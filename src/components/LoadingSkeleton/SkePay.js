import React from "react";
import Skeleton from "react-loading-skeleton";
import { Card } from "react-bootstrap";
const LoadingSkeleton = () => {
  return (
    <div>
      <div className="d-flex flex-wrap mt-4">
        <Card style={{ width: "1000px", margin: "auto" }}>
          <Skeleton
            width={200}
            height={20}
            style={{ marginBottom: "1.5rem" }}
          />
          <div className="d-flex flex-wrap justify-content-between mt-4">
            {[...Array(4)].map((e, i) => (
              <div>
                <Skeleton width={150} height={15} />
                <Skeleton
                  width={180}
                  height={10}
                  style={{ marginBottom: "1.5rem" }}
                />
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div className="d-flex flex-wrap justify-content-center mt-3">
        <Card className="me-2">
          <Skeleton
            width={200}
            height={30}
            style={{ marginBottom: "1.5rem" }}
          />
          <Skeleton width={680} height={15} count={2} />
          {[...Array(3)].map((e, i) => (
            <div className="d-flex flex-row mt-3">
              <Skeleton
                width={100}
                height={50}
                style={{ marginRight: "1.5rem" }}
              />
              <Skeleton width={200} height={20} style={{ marginTop: "1rem" }} />
            </div>
          ))}
        </Card>
        <Card className="ms-3">
          <Skeleton width={125} height={20} />
          <Skeleton width={50} height={10} style={{ marginBottom: "2rem" }} />
          <Skeleton width={280} height={50} style={{ marginBottom: "2rem" }} />
          <Skeleton width={280} height={25} />
          <Skeleton width={290} height={40} style={{ marginTop: "4rem" }} />
        </Card>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
