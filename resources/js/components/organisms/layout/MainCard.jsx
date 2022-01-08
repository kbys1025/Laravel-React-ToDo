import React, { memo } from "react";

import { Card } from "../../atoms/card/Card";

export const MainCard = memo((props) => {
    const { children, headerText } = props;
    
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <Card headerText={headerText}>
                        <form>
                            {children}
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
});