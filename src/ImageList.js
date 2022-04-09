import React from 'react'
import { connect } from 'react-redux'
import Search from './Search'

const ImageList = (props) => {

    return (
        <div style={{ position: "relative" }} >
            <Search />
            {props.image.hits ?
                props.image.hits.map(img => {
                    return (
                        <div style={{ fontWeight: "bold" }} key={img.id} >
                            <img style={{ width: "45%", padding: "5px" }} src={img.largeImageURL} />
                            <div style={{ marginRight: "210px", float: "right", marginTop: "-350px" }}>
                                <p>Tags: {img.tags} </p>
                                <p>Type: {img.type} </p>
                                <p>User: {img.user} </p>
                                <p>
                                    This Picture Has Been Downloaded <b>{img.downloads}</b> Times in Total. </p>
                                <p>This Picture Has Been Liked <b> {img.likes} </b> Times in Total. </p>
                                <p>Views: {img.views} </p>
                            </div>
                            <hr />
                        </div>
                    )
                })
                : <p>Type the Pictures You Want To Search And Press Enter.</p>
            }
        </div>
    )
}

const map = state => {
    return {
        image: state.imageList
    }
}

export default connect(map)(ImageList)
