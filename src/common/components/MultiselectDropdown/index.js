import React from 'react';
import Multiselect from 'react-bootstrap-multiselect';
import '../../../assets/css/multiselect.css';

const MultiselectComponent = (props) => {
const myData = [{value:'One'},{value:'Two'},{value:'Three'},{value:'Four'}]
	
	return (
		<Multiselect data={myData} multiple/>
	)
}

export default MultiselectComponent
