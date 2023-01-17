import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

export const getClient = async() => await createClient({
    projectId: "zckihg4l",
    dataset: "production",
    apiVersion: "2021-10-21", 
    title: 'Portfolio',
    basePath: "/admin",
    useCdn: true,
}).fetch(`*[_type == "projects"] | order(_createdAt desc) `).then((res) => res).catch((err) => err)

export const fetchAccounts = async() => await createClient({
    projectId: "zckihg4l",
    dataset: "production",
    apiVersion: "2021-10-21", 
    title: 'Portfolio',
    basePath: "/admin",
    useCdn: true,
}).fetch(`*[_type == "accountsnew"] | order(_createdAt asc) `).then((res) => res).catch((err) => err)

const builder = imageUrlBuilder({
    projectId: "zckihg4l",
    dataset: "production",
    apiVersion: "2021-10-21", 
    title: 'Portfolio',
    basePath: "/admin",
    useCdn: true, 
})

export const urlFor = (source) => {
    return builder.image(source)
  }

