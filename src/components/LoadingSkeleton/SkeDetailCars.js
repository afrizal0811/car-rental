import React from "react";
import Skeleton from "react-loading-skeleton";
import { Card } from "react-bootstrap";
const LoadingSkeleton = () => {
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center mt-3">
        <Card className="me-2" width={720} height={275}>
          <Skeleton width={200} height={15} />
          <Skeleton width={180} height={15} />
          <Skeleton width={350} height={10} count={2} />
          <Skeleton width={200} height={10} count={2} />
          <Skeleton width={180} height={15} />
          <Skeleton width={320} height={10} count={2} />
          <Skeleton width={220} height={10} count={2} />
          <Skeleton width={720} height={250} />
        </Card>
        <Card className="ms-3">
          <Skeleton width={290} height={300} />
          <Skeleton width={125} height={20} />
          <Skeleton width={50} height={10} />
          <Skeleton width={280} height={10} />
          <Skeleton width={280} height={30} />
          <Skeleton width={280} height={20} style={{ marginTop: "1.5rem" }} />
          <Skeleton width={290} height={40} style={{ marginTop: "1.5rem" }} />
        </Card>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
