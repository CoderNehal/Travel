import React, { createContext, useContext, useState } from 'react';

export const Travelcontext = createContext();

export const ContextAPI = (props) => {
	const [flag, setflag] = useState(false);
	return (
		<Travelcontext.Provider value={[flag, setflag]}>
			{props.children}
		</Travelcontext.Provider>
	);
};
