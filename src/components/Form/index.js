import React from 'react'
import Form from "./style.module.css"

function index({handleCreate}) {
    return (
        <form className={Form.form} onSubmit={handleCreate}>
            <p>Create Playlist</p>
            <div className={Form.group}>
                <label htmlFor="title">Title: </label>
                <input className={Form.input} name="title" id="title" type="text" placeholder="Title..." minLength="10" />
                <label htmlFor="description">Description: </label>
                <input className={Form.input} name="description" id="description" type="text" placeholder="Desc..." minLength="20" />
            </div>
            <button className={Form.btn} type="submit">Submit</button>
        </form>
    )
}

export default index
