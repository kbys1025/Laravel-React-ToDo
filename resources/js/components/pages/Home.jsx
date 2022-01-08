import React, { memo } from "react";

export const Home = memo(() => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Home</div>
                        <div className="card-body">
                            Homeページ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});