import React from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './FoodRow.css'
const FoodRow = ({ item, onDeleteClick, onEditClick, openPopup, setOpenPopup }) => {
    const { _id, name, price } = item;
    const history = useHistory();
    return (
        <tr key={_id}>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>
            <Link
              style={{color:'#000', marginRight:'5px'}}
              to={`/admin/editFood/${_id}`}>
            <i className="fa fa-edit"
            ></i>
            </Link>
            <i className="fa fa-trash"
            onClick={onDeleteClick}
            ></i>
                </td>  
            </tr>
        
    )
}

export default FoodRow
