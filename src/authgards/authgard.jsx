
// import React from "react";
// import { Redirect, Route } from "react-router-dom";

// const MergedProps = (component, ...rest) => {
// 	const finalProps = Object.assign({}, ...rest);
// 	return React.createElement(component, finalProps);
// };

// export const protectedRoute = ({ component,...rest }) => {
// 	return (
// 		<Route
// 			{...rest}
// 			render={(props) =>{
// 				 return localStorage.getItem("Token") ? (
// 					MergedProps(component, props, rest)
// 				) : (
// 					<Redirect
// 						to={{
// 							pathname: "/login",
// 							state: { from: props.location },
// 						}}
// 					/>
// 				)
// 			}
// 			}
// 		/>
// 	);
// };
// export default protectedRoute;
