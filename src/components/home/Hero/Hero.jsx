import React, { useState } from "react"
import { BiSearch } from "react-icons/bi"
import { products } from "../../assets/data/data"
import { SearchItems } from "./SearchItems"

export const Hero = () => {
  // search
  const [value, setValue] = useState("")
  const onChanage = (e) => {
    setValue(e.target.value)
  }

  const onSearch = (key) => {
    setValue(key)
    console.log("search", key)
  }
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <h1>
            <label>
              Over <span>1,500</span> Apple, Dell, Acer, HP, Lenovo Asus Laptops Available
            </label>
            <br />
            <label>
              Apple🍎 <span>Graphic & Website </span> Accessories
            </label>
          </h1>
          <p>High-quality Design Laptops and Mobile Gadgets for personal or commercial use </p>
          <div className='search'>
            <span>All Categories</span>
            <hr />
            <input type='text' placeholder='Search Products...' onChange={onChanage} value={value} />
            <button onClick={() => onSearch(value)}>
              <BiSearch className='serachIcon heIcon' />
            </button>
          </div>
          <SearchItems products={products} value={value} onSearch={onSearch} />
          <p>Examples: Android, Google Pixel/Chrome Os products, MacOs Product, Software/hardware Technician…</p>
        </div>
      </section>
    </>
  )
}
