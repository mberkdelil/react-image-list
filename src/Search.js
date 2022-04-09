import React, { useState } from 'react'
import { connect } from 'react-redux';
import { getImage } from './actions';

const Search = (props) => {

    const [search, setSearch] = useState("");

    return (
        <div className='ui segment'>
            <form onSubmit={e => {
                e.preventDefault();
                props.getImage(search);
                setSearch("");
            }} className='ui form' >
                <div className='field'>
                    <div className='ui massive icon input'>
                        <input onChange={e => setSearch(e.target.value)} type="text" placeholder="Search Image..." />
                        <i className="search icon"></i>
                    </div>
                </div>
            </form>
        </div>
    )
}

const map = state => {
    return {
        image: state.imageList
    }
}

export default connect(map, { getImage })(Search)
