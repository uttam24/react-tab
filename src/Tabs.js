import React,{useState} from 'react';
import './App.css';


const Tabs =()=> {

	const [toggleState, setToggleState] = useState(1);
	const toggleTab =(index)=>{
		setToggleState(index)
	}
  return (
   <div className='container'>
		<div className='bloc-tabs'>
			<div className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'} onClick={()=>toggleTab(1)}>Tab 1</div>
			<div className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'} onClick={()=>toggleTab(2)}>Tab 2</div>
			<div className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'} onClick={()=>toggleTab(3)}>Tab 3</div>
		</div> 

		<div className='content-tabs'>
			<div className={toggleState === 1 ? 'content active-content' : 'content'}>
				<h2>content 1</h2>
				<hr/>
				<p>Lorem Lopsum color Lorem Lopsum color Lorem Lopsum colorLorem Lopsum colorLorem Lopsum colorLorem Lopsum colorLorem Lopsum color
				Lorem Lopsum colorLorem Lopsum colorLorem Lopsum colorLorem Lopsum colorLorem Lopsum colorLorem Lopsum color</p>
			</div>

			<div className={toggleState === 2 ? 'content active-content' : 'content'}>
				<h2>content 2</h2>
				<hr/>
				<p>Lorem Lopsum color Lorem Lopsum color Lorem Lopsum colorLorem Lopsum colorLorem Lopsum colorLorem Lopsum colorLorem Lopsum color
				Lorem Lopsum colorLorem Lopsum colorLorem Lopsum colorLorem Lopsum colorLorem Lopsum colorLorem Lopsum color</p>
			</div>

			<div className={toggleState === 3 ? 'content active-content' : 'content'}>
				<h2>content 3</h2>
				<hr/>
				<p>Lorem Lopsum color Lorem Lopsum color Lorem Lopsum colorLorem Lopsum colorLorem Lopsum colorLorem Lopsum colorLorem Lopsum color
				Lorem Lopsum colorLorem Lopsum colorLorem Lopsum colorLorem Lopsum colorLorem Lopsum colorLorem Lopsum color</p>
			</div>

		</div>

   </div>
  );
}

export default Tabs;
