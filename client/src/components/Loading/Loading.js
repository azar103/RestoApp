import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { css } from "@emotion/react";
import './Loading.css'
import loader from '../../assets/images/loader.gif';

import Loader from 'react-loader-spinner';
import RotateLoader from "react-spinners/RotateLoader";
import  {Ring} from 'react-spinners-css'
const Loading = () => {
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: black;
  `;
    const isLoading = useSelector(state => state.auth.isLoading);
    let [color, setColor] = useState("#ffffff");
    if (!isLoading) return null;
    return (
        <div className="center">
            <Ring color="#353951" size={100}
                style={{
                    borderWidth:'1px'
            }}
            />
        </div>
    )
}

export default Loading
