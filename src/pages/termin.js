import React,{useState} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Select from 'react-select'
import Styles from './termin.module.css'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {Link, navigate} from 'gatsby'
 
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const options = [
  { value: 'Implantologija', label: 'Implantologija' },
  { value: 'Estetska stomatologija', label: 'Estetska stomatologija' },
  { value: 'Protetika', label: 'Protetika' },
  { value: 'Oralna kirurgija', label: 'Oralna kirurgija' },
  { value: 'Endodoncija', label: 'Endodoncija' },
  { value: 'Paradontologija', label: 'Paradontologija' },
  { value: 'Ortodoncija', label: 'Ortodoncija' },
  { value: 'Pedodoncija', label: 'Pedodoncija' },
]

const sideBar = (props) => {
  return(
    <div>
      <h2>Prošli pregledi:</h2>
      <div>
          <h3>Pregled: {props.pregled}</h3>
          <h4>Datum: {props.datum}</h4>
      </div>
    </div>    
  );
}

const Termin = () => {

  const [usluga, setUsluga] = useState ("");
  const [startDate, setStartDate] = useState(new Date());
  
  const handleChange = e =>{
      setUsluga(e);
  }

  const onSubmitClick = e => {
    alert("Odabrali ste pregled : " + usluga + "\nU vrmenenu: "+ startDate)
    navigate('/');
  }

  return(
    <Layout>
      <SEO title="Termin" />  
        <div>        
          <div>
            <h3>Zakažite termin</h3>
            <h4>Odaberite uslugu za koju želite zakazati termin.</h4>
            <Select options={options} onChange = {e => setUsluga(e.target)} placeholder = "Odaberite uslugu..." className = {Styles.Select}/>
            <h4>Odaberite datum i vrijeme pregleda.</h4>
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              timeInputLabel="Time:"
              dateFormat="MM/dd/yyyy h:mm aa"
              showTimeInput
            />
            <button 
                    type="submit" 
                    className={Styles.Button}
                    onClick={e => onSubmitClick(e.target)}
                >Zakaži termin.
            </button>
          </div>         
        </div>
    </Layout>
  );
}

export default Termin
