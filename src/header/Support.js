import React from "react";
import './Support.scss'

const Support = () => (

      <div>       
            <form className="supoort" >
            <h3> keep in touch  </h3>

                        <label htmlFor="Name"></label>
                              <input
                              name="Name"
                              type="text"
                              placeholder="Name"
                        />
                        <label htmlFor="email"></label>
                        <input
                              name="Email"
                              type="Email"
                              placeholder="Email"
                        />
                        <label htmlFor="Message"></label>
                        <textarea     
                        name="Message"
                        type="text"
                        placeholder="Message"
                        />
                        <button type="submit">Send</button>
            </form>
      </div>);

export default Support;