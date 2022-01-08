import React, { memo } from "react";

import { Card } from "../../atoms/card/Card";
import { HorizontalButton } from "../../molecules/form/HorizontalButton";

export const AuthCard = memo((props) => {
    const { children, headerText, buttonText } = props;
    
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <Card headerText={headerText}>
                        <form>
                            {children}
                            <HorizontalButton>{buttonText}</HorizontalButton>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
});