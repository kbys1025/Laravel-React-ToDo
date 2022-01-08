import React, { memo } from "react";

import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { Card } from "../../atoms/card/Card";

export const AuthCard = memo((props) => {
    const { children, headerText, buttonText } = props;
    
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <Card headerText={headerText}>
                        <form>
                            {children}
                            <div className="form-group row mb-0">
                                <div className="col-md-6 offset-md-4">
                                    <PrimaryButton>{buttonText}</PrimaryButton>
                                </div>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
});