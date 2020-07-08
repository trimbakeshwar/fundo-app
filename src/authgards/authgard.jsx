
import React, {component} from "react";
import { Redirect, Route } from "react-router-dom";
import auth from "./auth"
const renderMergedProps = (component, ...rest) => {
	const finalProps = Object.assign({}, ...rest);
	return React.createElement(component, finalProps);
};

export const PrivateRoute = ({ component:Component,...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>{
        if(auth.isAuthenticated()){
          return <Component 	{...rest}/>
        }
        else{
          return(<Redirect
						to={{
							pathname: "/",
							state: { from: props.location },
						}}
					/>)
        }
				
			}
			}
		/>
	);
};
export default PrivateRoute;