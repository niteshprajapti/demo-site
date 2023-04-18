import React from 'react'
import { Link, Image } from '@inertiajs/inertia-react';
import Log from '../dist/img/logo.png'

export default function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-12 text-center">
                            <img src={Log} />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
