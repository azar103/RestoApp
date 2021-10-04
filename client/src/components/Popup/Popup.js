import React, {useEffect, useState} from 'react'
import { Dialog, DialogContent, DialogTitle, TextField, Button } from '@material-ui/core';
import './Popup.css';
const Popup = ({ openPopup, setOpenPopup, item }) => {

  const [formData, setFormData] = useState({
    name: item.name,
    price: item.price,
    description: item.description
  });


  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

    return (
        <Dialog
        open={openPopup}
        >
            <DialogTitle>
              <div>Edit</div>
            </DialogTitle>
        <DialogContent className="dialog">
          <TextField
            placeholder="name"
            onChange={onChange}
            className="input"
            name="name"
            value={formData.name}
          />
    
          <div
            style={{
              flexDirection: 'row',
            }}
          >
          <Button className="btn"
            style={{backgroundColor:"#353951", color:"#fff", margin:"5px 4px"} }
          >
          submit
          </Button>
          <Button className="btn"
              style={{ backgroundColor: "#353951", color: "#fff", margin: "5px 0" }}
              onClick={() => setOpenPopup(false)}
          >
          cancel
          </Button>
          </div>
            </DialogContent>
        </Dialog>
    )
}

export default Popup
