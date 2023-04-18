import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Header from '../common/Header'
import Footer from '../common/Footer'

export default function Thankyou(props) {

    return (
        <>
            <Header />
            <section className="bnrsection">
            <div className="container">
               <div className="row">
                   <div className="offset-lg-1 col-lg-10 col-md-12 col-12 text-center">
                       <h2>Thankyou...</h2>
                       <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                       <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                    </div>
               </div>
           </div>
         </section>

        <Footer />
        </>
    );
}
