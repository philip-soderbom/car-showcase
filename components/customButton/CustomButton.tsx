"use client"
import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from "@/types"

import './style.scss'

const CustomButton = ({ title, containerStyles, handleClick }: CustomButtonProps) => {
    return (
        <button
            id="custom-btn"
            disabled={false}
            type={'button'}
            className={`mb-6 custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1`}>{title}</span>
        </button>
    )
}

export default CustomButton