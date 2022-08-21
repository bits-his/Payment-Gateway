import React from 'react'
import { primaryColor } from '../AppColors/Colors'

export default function SectionDivider({ Header, Body }) {
    return (
        <div>
            <div className='pmd-section p-5'>
                <h1 className='pmd text-center mt-5' style={{ color: primaryColor }}>{Header}</h1>
                <p className='pmd-desc' style={{ color: primaryColor }}>{Body}</p>
            </div>
        </div>
    )
}
