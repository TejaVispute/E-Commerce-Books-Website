import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
function SkletonLoad() {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", gap: "1rem" }}>

            <div><Skeleton width={250} height={250} /></div>
            <div><Skeleton width={250} height={250} /></div>
            <div><Skeleton width={250} height={250} /></div>
            <div><Skeleton width={250} height={250} /></div>
            <div><Skeleton width={250} height={250} /></div>
        </div>
    )
}

export default SkletonLoad