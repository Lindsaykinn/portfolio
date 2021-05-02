import React, {useEffect, useState} from 'react';
import sanityClient from '../client.js'
import image from "./bg-img.png";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

export default function About(){
  const [author, setAuthor] =useState(null)

  useEffect(() => {
    sanityClient.fetch(`*[_type == "author"]{
      name,
      bio, 
      "authorImage": image.asset->url
    }`).then((data) => setAuthor(data[0]))
    .catch(console.error)
  }, [])

  if (!author) return <div>Loading...</div>    
   
  return (
    <main className='relative'>
      <img src={image} alt="Background" className='absolute w-full' />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className='about-box rounded-lg shadow-2xl lg:flex p-20'>
          <img src={urlFor(author.authorImage).url()} alt={author.name} className='rounded w-32 h-55 lg:w-64 lg:h-65 mr-8' />
          <div className='text-lg flex flex-col justify-center'>
            <h1 className='cursive text-6xl text-green-300 mb-4'>
              Hey there.  I'm{" "}
              <span>{author.name}</span>.
            </h1>
            <div className='prose lg:prose-xl text-white'>
              <BlockContent blocks={author.bio} projectId="ddyqjo6p" dataset="production" />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
