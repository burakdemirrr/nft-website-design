import React from 'react'
import Chapters from './Chapters'
import "./Roadmap.css"
const Roadmap = () => {
  return (
    <div className='roadmap' id='roadmap'> 
        <h1>ROADMAP</h1>
        <div className="chaptar">
            <Chapters tetle="3D NFTs" text="ANTONYM IS A PHYGITAL LIFESTYLE BRAND, BRIDGING THE GAP BETWEEN DIGITAL COLLECTIBLES AND PHYSICAL DESIGNER GOODS." />
            <Chapters tetle="The Big Day" text="
RATHER THAN ACCEPT THE SEPARATION OF THE PHYSICAL AND THE DIGITAL WORLD, WE BELIEVE THE FUTURE IS PHYGITAL - WORKING IN HARMONY TO CREATE UNIQUE PRODUCT EXPERIENCES THAT CONNECT CULTURES AND COMMUNITIES." />
            <Chapters tetle="Exclusive Drop" text="BY LEVERAGING LIMITED-SUPPLY DROPS OF NEW PRODUCTS, SELECT BRAND COLLABORATIONS, PLANNED RETAIL LOCATIONS IN TIER 1 CITIES, AND PHYGITAL EXPERIENCES, ANTONYM IS BUILDING AT THE INTERSECTION OF ART, FASHION, AND CULTURE.
" />
            <Chapters tetle="Hail To The King" text="AS WE BOW TO KING, EMBRACE YOURSELF BECAUSE WHAT COMES NEXT WILL DEFINITELY KEEP YOU AT THE EDGE OF YOUR SEAT!" />
        </div>
    </div>
  
  )
}

export default Roadmap