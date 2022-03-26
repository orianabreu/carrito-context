import React from 'react';
import { Link } from 'react-router-dom';

export default function NarBar() {
  return (
    <nav>
        <Link to="/shopping-cart">
            <button>Go to cart</button>
        </Link>
    </nav>
  )
}
